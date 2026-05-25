export function Medium({ size = 16, color = '#E4B841', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none" {...props}>
      <mask id="mask0_599_3539" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_599_3539)">
        <path d="M3.86667 10.5333V9.20001H12.1333V10.5333H3.86667ZM3.86667 6.80001V5.46667H12.1333V6.80001H3.86667Z" fill={color}/>
      </g>
    </svg>
  )
}
