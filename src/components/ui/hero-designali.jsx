import { cn } from '@/lib/utils'
import { ReactTyped } from 'react-typed'

// --- Waver oscillator (module-level `e` is intentional shared state) ---
function Waver(config) {
  this.init(config || {})
}

var e = 0

Waver.prototype = {
  init: function (config) {
    this.phase = config.phase || 0
    this.offset = config.offset || 0
    this.frequency = config.frequency || 0.001
    this.amplitude = config.amplitude || 1
  },
  update: function () {
    this.phase += this.frequency
    e = this.offset + Math.sin(this.phase) * this.amplitude
    return e
  },
  value: function () {
    return e
  },
}

// --- Trail node ---
function Node() {
  this.x = 0
  this.y = 0
  this.vy = 0
  this.vx = 0
}

// --- Module-level canvas state ---
var ctx
var f
var pos = {}
var lines = []
var trailEnabled = true
var E = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
}

// --- Trail line ---
function Line(config) {
  this.init(config || {})
}

Line.prototype = {
  init: function (config) {
    this.spring = config.spring + 0.1 * Math.random() - 0.05
    this.friction = E.friction + 0.01 * Math.random() - 0.005
    this.nodes = []
    for (var t, n = 0; n < E.size; n++) {
      t = new Node()
      t.x = pos.x
      t.y = pos.y
      this.nodes.push(t)
    }
  },
  update: function () {
    var spring = this.spring
    var t = this.nodes[0]
    t.vx += (pos.x - t.x) * spring
    t.vy += (pos.y - t.y) * spring
    for (var n, i = 0, a = this.nodes.length; i < a; i++) {
      t = this.nodes[i]
      if (0 < i) {
        n = this.nodes[i - 1]
        t.vx += (n.x - t.x) * spring
        t.vy += (n.y - t.y) * spring
        t.vx += n.vx * E.dampening
        t.vy += n.vy * E.dampening
      }
      t.vx *= this.friction
      t.vy *= this.friction
      t.x += t.vx
      t.y += t.vy
      spring *= E.tension
    }
  },
  draw: function () {
    var n = this.nodes[0].x
    var i = this.nodes[0].y
    ctx.beginPath()
    ctx.moveTo(n, i)
    var a
    for (var idx = 1, o = this.nodes.length - 2; idx < o; idx++) {
      var nodeA = this.nodes[idx]
      var nodeB = this.nodes[idx + 1]
      n = 0.5 * (nodeA.x + nodeB.x)
      i = 0.5 * (nodeA.y + nodeB.y)
      ctx.quadraticCurveTo(nodeA.x, nodeA.y, n, i)
    }
    a = this.nodes[idx]
    var last = this.nodes[idx + 1]
    ctx.quadraticCurveTo(a.x, a.y, last.x, last.y)
    ctx.stroke()
    ctx.closePath()
  },
}

function onMousemove(event) {
  function initLines() {
    lines = []
    for (var i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }))
    }
  }

  function updatePos(ev) {
    if (ev.touches) {
      pos.x = ev.touches[0].pageX
      pos.y = ev.touches[0].pageY
    } else {
      pos.x = ev.clientX
      pos.y = ev.clientY
    }
    ev.preventDefault()
  }

  function onTouchStart(ev) {
    if (ev.touches.length === 1) {
      pos.x = ev.touches[0].pageX
      pos.y = ev.touches[0].pageY
    }
  }

  document.removeEventListener('mousemove', onMousemove)
  document.removeEventListener('touchstart', onMousemove)
  document.addEventListener('mousemove', updatePos)
  document.addEventListener('touchmove', updatePos)
  document.addEventListener('touchstart', onTouchStart)
  updatePos(event)
  initLines()
  render()
}

function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = 'source-over'
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    if (trailEnabled) {
      ctx.globalCompositeOperation = 'lighter'
      ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',100%,50%,0.025)'
      ctx.lineWidth = 10
      for (var i = 0; i < E.trails; i++) {
        var line = lines[i]
        line.update()
        line.draw()
      }
    }
    ctx.frame++
    window.requestAnimationFrame(render)
  }
}

export function enableTrail() {
  trailEnabled = true
}

export function disableTrail() {
  trailEnabled = false
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth - 20
  ctx.canvas.height = window.innerHeight
}

export const renderCanvas = function () {
  const canvas = document.getElementById('canvas')
  if (!canvas) return
  ctx = canvas.getContext('2d')
  ctx.running = true
  ctx.frame = 1
  f = new Waver({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  })
  document.addEventListener('mousemove', onMousemove)
  document.addEventListener('touchstart', onMousemove)
  document.body.addEventListener('orientationchange', resizeCanvas)
  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('focus', () => {
    if (!ctx.running) {
      ctx.running = true
      render()
    }
  })
  window.addEventListener('blur', () => {
    ctx.running = true
  })
  resizeCanvas()
}

// --- TypeWriter component ---
export const TypeWriter = ({ strings }) => {
  return (
    <ReactTyped
      loop
      typeSpeed={80}
      backSpeed={20}
      strings={strings}
      smartBackspace
      backDelay={1000}
      loopCount={0}
      showCursor
      cursorChar="|"
    />
  )
}

// --- ShineBorder component ---
export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = '#000000',
  className,
  children,
}) {
  return (
    <div
      style={{ '--border-radius': `${borderRadius}px` }}
      className={cn(
        'relative grid h-full w-full place-items-center rounded-3xl bg-white p-3 text-black dark:bg-black dark:text-white',
        className,
      )}
    >
      <div
        style={{
          '--border-width': `${borderWidth}px`,
          '--border-radius': `${borderRadius}px`,
          '--shine-pulse-duration': `${duration}s`,
          '--mask-linear-gradient': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          '--background-radial-gradient': `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(',') : color},transparent,transparent)`,
        }}
        className="before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-3xl before:p-[--border-width] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:![mask-composite:exclude] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]"
      />
      {children}
    </div>
  )
}
