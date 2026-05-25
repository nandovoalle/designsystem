export function Urgent({ size = 16, color = '#FA7C70', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <mask id="mask0_599_3531" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_599_3531)">
        <path d="M4.85 12.8L4 11.95L8 7.95001L12 11.95L11.15 12.8L8 9.65001L4.85 12.8ZM4.85 8.05001L4 7.20001L8 3.20001L12 7.20001L11.15 8.05001L8 4.90001L4.85 8.05001Z" fill={color}/>
      </g>
    </svg>
  )
}
