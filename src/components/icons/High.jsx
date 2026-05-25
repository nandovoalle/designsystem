export function High({ size = 16, color = '#DD9145', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <mask id="mask0_599_3535" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_599_3535)">
        <path d="M8 7.24999L4.85 10.4L4 9.54999L8 5.54999L12 9.54999L11.15 10.4L8 7.24999Z" fill={color}/>
      </g>
    </svg>
  )
}
