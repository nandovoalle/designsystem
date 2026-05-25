export function Normal({ size = 16, color = '#3A89C1', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <mask id="mask0_599_3523" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_599_3523)">
        <path d="M3.86667 8.49999V7.16666H12.1333V8.49999H3.86667Z" fill={color}/>
      </g>
    </svg>
  )
}
