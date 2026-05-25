import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'

// ── SVG shape components ──────────────────────────────────────────────────────

const DocShape = () => (
  <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
    <path d="M9.03711 0C9.24584 0 9.44596 0.0871767 9.58789 0.240234L14.0498 5.05273C14.1784 5.19141 14.25 5.37339 14.25 5.5625V9.75H12.75V6.75H9C8.58579 6.75 8.25 6.41421 8.25 6V1.5H1.5V9.75H0V1.4375C0 1.07377 0.133426 0.714577 0.386719 0.441406L0.487305 0.34375C0.732123 0.127608 1.04901 0 1.3877 0H9.03711ZM9.75 5.25H12.1885L9.75 2.62109V5.25Z" fill="white"/>
  </svg>
)

const SpreadsheetShape = () => (
  <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
    <path d="M13.5 0C13.9125 0 14.2658 0.14669 14.5596 0.44043C14.8533 0.73418 15 1.0875 15 1.5V10H13.5V8.49414H7.25V10H5.75V8.49414H1.5V10H0V1.5C0 1.0875 0.14668 0.73418 0.44043 0.44043C0.73418 0.14668 1.0875 0 1.5 0H13.5ZM1.5 7.0127H5.75V5.00586H1.5V7.0127ZM7.25 7.0127H13.5V5.00586H7.25V7.0127ZM1.5 3.50586H5.75V1.5H1.5V3.50586ZM7.25 3.50586H13.5V1.5H7.25V3.50586Z" fill="white"/>
  </svg>
)

const PresentationShape = () => (
  <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
    <path d="M5.7793 9.05664H3.39648V5.09473H5.7793V9.05664ZM10.3896 9.05664H8.00684V2.39844H10.3896V9.05664ZM15 9.05664H12.6172V0H15V9.05664ZM6.05371 1.45117H1.67871C1.59552 1.45125 1.52709 1.47863 1.47363 1.53418C1.42029 1.58983 1.39361 1.66146 1.39355 1.74805V9.01758H0V1.74805C5.65533e-05 1.26628 0.164381 0.854109 0.492188 0.512695C0.82024 0.171582 1.2158 8.65586e-05 1.67871 0H7.44727L6.05371 1.45117Z" fill="white"/>
  </svg>
)

const ImageShape = () => (
  <svg width="15" height="10" viewBox="0 0 15 11" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M15 11V1.59507C15 1.14934 14.8456 0.772059 14.5368 0.463235C14.2279 0.154412 13.8507 0 13.4049 0H1.59507C1.14934 0 0.772059 0.154412 0.463235 0.463235C0.154412 0.772059 0 1.14934 0 1.59507V11H1.32353V1.59507C1.32353 1.52713 1.35184 1.46493 1.40846 1.40846C1.46493 1.35184 1.52713 1.32353 1.59507 1.32353H13.4049C13.4729 1.32353 13.5351 1.35184 13.5915 1.40846C13.6482 1.46493 13.6765 1.52713 13.6765 1.59507V11H15ZM11.6817 11L9.29868 7.8225L6.8569 11H11.6817ZM6.78497 11L5.05654 8.78956L3.38905 11H6.78497ZM5.19221 5.19221C4.97735 5.40721 4.71721 5.51471 4.41176 5.51471C4.10632 5.51471 3.84618 5.40721 3.63132 5.19221C3.41632 4.97735 3.30882 4.71721 3.30882 4.41176C3.30882 4.10632 3.41632 3.84618 3.63132 3.63132C3.84618 3.41632 4.10632 3.30882 4.41176 3.30882C4.71721 3.30882 4.97735 3.41632 5.19221 3.63132C5.40721 3.84618 5.51471 4.10632 5.51471 4.41176C5.51471 4.71721 5.40721 4.97735 5.19221 5.19221Z" fill="white"/>
  </svg>
)

const AudioShape = () => (
  <svg width="15" height="10" viewBox="0 0 16 10" fill="none">
    <path d="M6.34766 2.31543H1.4834C1.40981 2.31543 1.34904 2.33959 1.30176 2.38867C1.25444 2.43791 1.23047 2.50142 1.23047 2.57812V10H0V2.57812C0 2.15233 0.144793 1.78803 0.43457 1.48633C0.724448 1.1849 1.07432 1.03418 1.4834 1.03418H7.5791L6.34766 2.31543ZM10.0518 10H8.8291L7.06152 8.16113H4.71777V4.31836H7.06152L10.0518 1.20703V10ZM11.6924 0C12.9356 0.411536 13.9641 1.19157 14.7783 2.33984C15.5925 3.48815 16 4.78866 16 6.24023C15.9999 7.63334 15.6241 8.88623 14.874 10H13.2871C13.5096 9.76252 13.7173 9.50009 13.9053 9.20898C14.4811 8.31759 14.7695 7.32807 14.7695 6.24023C14.7695 5.15225 14.4811 4.16215 13.9053 3.27051C13.3294 2.37893 12.5918 1.73826 11.6924 1.34961V0ZM11.6924 3.51562C12.1479 3.80907 12.5012 4.19982 12.752 4.6875C13.0028 5.17514 13.1279 5.69299 13.1279 6.24023C13.1279 6.78728 13.0014 7.30452 12.748 7.79199C12.4945 8.27967 12.1425 8.67057 11.6924 8.96387V3.51562Z" fill="white"/>
  </svg>
)

const SqlShape = () => (
  <svg width="15" height="10" viewBox="0 0 17 12" fill="none">
    <path d="M8.5 0C10.8487 0 12.8529 0.322056 14.5118 0.96582C16.1705 1.60952 16.9999 2.38554 17 3.29395V12H15.4996V9.83301C15.0792 10.0587 14.6082 10.261 14.0864 10.4395C13.5646 10.6181 13.0046 10.768 12.4066 10.8887C11.8085 11.0093 11.1815 11.1013 10.5254 11.1641C9.86905 11.2268 9.19366 11.2578 8.5 11.2578C7.79367 11.2578 7.10518 11.2249 6.43518 11.1592C5.76549 11.0935 5.13318 11.0006 4.53845 10.8799C3.94372 10.7593 3.38964 10.611 2.87622 10.4355C2.36276 10.26 1.90418 10.0587 1.50037 9.83301V12H0V3.29395C0.000104888 2.38554 0.829501 1.60952 2.48816 0.96582C4.14716 0.322056 6.15133 2.89313e-09 8.5 0ZM15.4996 5.08203C15.0792 5.30757 14.6082 5.50983 14.0864 5.68848C13.5646 5.86699 13.0046 6.01707 12.4066 6.1377C11.8085 6.25843 11.1815 6.35035 10.5254 6.41309C9.86905 6.47583 9.19366 6.50684 8.5 6.50684C7.79367 6.50684 7.10518 6.47409 6.43518 6.4082C5.76548 6.34248 5.13318 6.24951 4.53845 6.12891C3.94373 6.0083 3.38963 5.86005 2.87622 5.68457C2.36278 5.5089 1.90417 5.30757 1.50037 5.08203V8.42188C1.90411 8.64751 2.36288 8.84796 2.87622 9.02344C3.38966 9.19894 3.9437 9.34716 4.53845 9.46777C5.13318 9.58854 5.76549 9.68135 6.43518 9.74707C7.10518 9.8128 7.79367 9.8457 8.5 9.8457C9.19366 9.8457 9.86905 9.8147 10.5254 9.75195C11.1815 9.68921 11.8085 9.59716 12.4066 9.47656C13.0045 9.35595 13.5646 9.20696 14.0864 9.02832C14.6081 8.84986 15.0792 8.64752 15.4996 8.42188V5.08203ZM8.5 1.41211C7.01534 1.41211 5.54336 1.60524 4.08503 1.99316C2.62687 2.38106 1.76869 2.80519 1.50971 3.26367C1.76262 3.73411 2.6149 4.16366 4.06635 4.55273C5.51834 4.94191 6.99618 5.13672 8.5 5.13672C9.95754 5.13672 11.425 4.94254 12.9026 4.55469C14.38 4.16679 15.2369 3.74871 15.4716 3.2998C15.2433 2.83894 14.3955 2.40867 12.9295 2.00977C11.4636 1.61107 9.98708 1.41211 8.5 1.41211Z" fill="white"/>
  </svg>
)

const HtmlShape = () => (
  <svg width="15" height="10" viewBox="0 0 17 12" fill="none">
    <path d="M15.1924 0C15.6975 3.06122e-05 16.1246 0.175421 16.4746 0.525391C16.8246 0.87536 17 1.30251 17 1.80762V12H15.5V1.80762C15.5 1.73067 15.4675 1.66064 15.4033 1.59668C15.3394 1.53255 15.2693 1.50004 15.1924 1.5H1.80762C1.73067 1.50004 1.66064 1.53255 1.59668 1.59668C1.53255 1.66064 1.50004 1.73067 1.5 1.80762V12H0V1.80762C3.06673e-05 1.30251 0.175421 0.87536 0.525391 0.525391C0.87536 0.175421 1.30251 3.06673e-05 1.80762 0H15.1924ZM7.14453 4.5791L4.96973 6.75391L7.15332 8.93848L6.09961 10.0078L2.84668 6.75391L6.09082 3.50977L7.14453 4.5791ZM14.1533 6.75391L10.9004 10.0078L9.84668 8.93848L12.0303 6.75391L9.84668 4.56934L10.9004 3.5L14.1533 6.75391Z" fill="white"/>
  </svg>
)

const VideoShape = () => (
  <svg width="15" height="10" viewBox="0 0 16 8" fill="none">
    <path d="M14.4775 0C14.9029 0 15.2629 0.140266 15.5576 0.420271C15.8524 0.700277 16 1.04223 16 1.44636V8H14.7373V1.44636C14.7373 1.38476 14.7103 1.32778 14.6562 1.27659C14.6024 1.22526 14.5424 1.19959 14.4775 1.19959H1.52246C1.45762 1.19959 1.39764 1.22526 1.34375 1.27659C1.28972 1.32778 1.2627 1.38476 1.2627 1.44636V8H0V1.44636C0 1.04223 0.147646 0.700277 0.442383 0.420271C0.73712 0.140266 1.09706 0 1.52246 0H14.4775ZM11.4004 5.99977L8.12305 8H6.10547V2.76934L11.4004 5.99977Z" fill="white"/>
  </svg>
)

const ZipShape = () => (
  <svg width="15" height="10" viewBox="0 0 16 9" fill="none">
    <path d="M7.83008 1.68457H14.4775C14.9028 1.68457 15.2629 1.83145 15.5576 2.12598C15.8522 2.4206 15.9999 2.78086 16 3.20605V8.8418H14.7373V3.20605C14.7372 3.13071 14.7124 3.06894 14.6641 3.02051C14.6155 2.97195 14.5532 2.94727 14.4775 2.94727H11.3682V4.63184H9.68457V2.94727H7.31348L5.62891 1.2627H1.52246C1.44681 1.2627 1.3845 1.28738 1.33594 1.33594C1.28738 1.3845 1.2627 1.44681 1.2627 1.52246V8.8418H0V1.52246C0 1.09706 0.147646 0.73712 0.442383 0.442383C0.73712 0.147646 1.09706 0 1.52246 0H6.14551L7.83008 1.68457ZM13.0527 8.8418H11.3682V8H13.0527V8.8418ZM11.3682 8H9.68457V6.31543H11.3682V8ZM13.0527 6.31543H11.3682V4.63184H13.0527V6.31543Z" fill="white"/>
  </svg>
)

const OtherShape = () => (
  <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M15 10V1.59507C15 1.14934 14.8456 0.772059 14.5368 0.463235C14.2279 0.154412 13.8507 0 13.4049 0H1.59507C1.14934 0 0.772059 0.154412 0.463235 0.463235C0.154412 0.772059 0 1.14934 0 1.59507V10H1.32353V1.59507C1.32353 1.52713 1.35184 1.46493 1.40846 1.40846C1.46493 1.35184 1.52713 1.32353 1.59507 1.32353H13.4049C13.4729 1.32353 13.5351 1.35184 13.5915 1.40846C13.6482 1.46493 13.6765 1.52713 13.6765 1.59507V10H15ZM4.40528 6.30005C4.15177 6.30005 3.93751 6.2143 3.76251 6.04279C3.5875 5.87129 3.5 5.65878 3.5 5.40528C3.5 5.15177 3.58575 4.93751 3.75726 4.76251C3.92876 4.5875 4.14127 4.5 4.39477 4.5C4.64828 4.5 4.86254 4.58575 5.03754 4.75726C5.21255 4.92876 5.30005 5.14127 5.30005 5.39477C5.30005 5.64828 5.2143 5.86254 5.04279 6.03754C4.87129 6.21255 4.65878 6.30005 4.40528 6.30005ZM8.73214 6.14732V8H9.26786V6.14732L10.5774 7.45685L10.9568 7.07738L9.64732 5.76786H11.5V5.23214H9.64732L10.9568 3.92262L10.5774 3.54315L9.26786 4.85268V3H8.73214V4.85268L7.42262 3.54315L7.04315 3.92262L8.35268 5.23214H6.5V5.76786H8.35268L7.04315 7.07738L7.42262 7.45685L8.73214 6.14732Z" fill="white"/>
  </svg>
)

// ── Individual file icon badge ─────────────────────────────────────────────────

function FileIcon({ color, ext, Shape, shapeName }) {
  const [copied, setCopied] = useState(false)

  function handleClick() {
    const snippet = `<FileIcon color="${color}" ext="${ext}" Shape={${shapeName}} />`
    navigator.clipboard.writeText(snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative flex flex-col items-center" style={{ cursor: 'pointer' }} onClick={handleClick}>
      <div
        style={{ backgroundColor: color }}
        className="flex flex-col items-center justify-center gap-0.5 rounded-[3px] shrink-0 size-8"
      >
        <div className="shrink-0 leading-[0]">
          <Shape />
        </div>
        <span
          style={{
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 900,
            fontSize: '8.25px',
            lineHeight: 'normal',
            color: '#ffffff',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {ext}
        </span>
      </div>

      {/* Tooltip "Copiado!" */}
      {copied && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 6px)',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#13283C',
            color: '#fff',
            fontSize: 11,
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            borderRadius: 4,
            padding: '3px 8px',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          Copiado!
        </div>
      )}
    </div>
  )
}

// ── Category section ───────────────────────────────────────────────────────────

function Category({ label, icons, gap = 32 }) {
  return (
    <div className="flex flex-col gap-4">
      <p
        style={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '20px',
          letterSpacing: '0.25px',
          color: 'var(--text-primary, #4a4a4a)',
        }}
      >
        {label}
      </p>
      <div className="flex items-start" style={{ gap }}>
        {icons.map((item, i) => (
          <FileIcon key={i} color={item.color} ext={item.ext} Shape={item.Shape} shapeName={item.shapeName} />
        ))}
      </div>
    </div>
  )
}

// ── Categories data ────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    label: 'Documentos',
    icons: [
      { ext: 'DOC',  color: '#2b579a', Shape: DocShape,          shapeName: 'DocShape' },
      { ext: 'DOCX', color: '#2b579a', Shape: DocShape,          shapeName: 'DocShape' },
      { ext: 'PDF',  color: '#e9786b', Shape: DocShape,          shapeName: 'DocShape' },
      { ext: 'TXT',  color: '#808080', Shape: DocShape,          shapeName: 'DocShape' },
      { ext: 'RTF',  color: '#4caf50', Shape: DocShape,          shapeName: 'DocShape' },
      { ext: 'ODT',  color: '#018e42', Shape: DocShape,          shapeName: 'DocShape' },
    ],
  },
  {
    label: 'Planilhas',
    icons: [
      { ext: 'XLS',  color: '#217346', Shape: SpreadsheetShape,  shapeName: 'SpreadsheetShape' },
      { ext: 'XLSX', color: '#217346', Shape: SpreadsheetShape,  shapeName: 'SpreadsheetShape' },
      { ext: 'CSV',  color: '#4aa35a', Shape: SpreadsheetShape,  shapeName: 'SpreadsheetShape' },
      { ext: 'ODS',  color: '#83b63e', Shape: SpreadsheetShape,  shapeName: 'SpreadsheetShape' },
    ],
  },
  {
    label: 'Apresentações',
    icons: [
      { ext: 'PPT',  color: '#e67e22', Shape: PresentationShape, shapeName: 'PresentationShape' },
      { ext: 'PPTX', color: '#d35400', Shape: PresentationShape, shapeName: 'PresentationShape' },
      { ext: 'ODT',  color: '#2874a6', Shape: PresentationShape, shapeName: 'PresentationShape' },
    ],
  },
  {
    label: 'Imagens',
    icons: [
      { ext: 'JPG',  color: '#5dade2', Shape: ImageShape,        shapeName: 'ImageShape' },
      { ext: 'JPEG', color: '#58d68d', Shape: ImageShape,        shapeName: 'ImageShape' },
      { ext: 'PNG',  color: '#a569bd', Shape: ImageShape,        shapeName: 'ImageShape' },
      { ext: 'GIF',  color: '#f4d03f', Shape: ImageShape,        shapeName: 'ImageShape' },
      { ext: 'BMP',  color: '#ec7063', Shape: ImageShape,        shapeName: 'ImageShape' },
      { ext: 'TIFF', color: '#f39c12', Shape: ImageShape,        shapeName: 'ImageShape' },
    ],
  },
  {
    label: 'Áudio',
    icons: [
      { ext: 'MP3',  color: '#5658ff', Shape: AudioShape,        shapeName: 'AudioShape' },
      { ext: 'WAV',  color: '#154360', Shape: AudioShape,        shapeName: 'AudioShape' },
      { ext: 'FLAC', color: '#8e44ad', Shape: AudioShape,        shapeName: 'AudioShape' },
      { ext: 'AAC',  color: '#c0392b', Shape: AudioShape,        shapeName: 'AudioShape' },
    ],
  },
  {
    label: 'Código',
    icons: [
      { ext: 'SQL',  color: '#00bcf2', Shape: SqlShape,          shapeName: 'SqlShape' },
      { ext: 'HTML', color: '#e93e30', Shape: HtmlShape,         shapeName: 'HtmlShape' },
    ],
  },
  {
    label: 'Vídeo',
    icons: [
      { ext: 'MP4',  color: '#1abc9c', Shape: VideoShape,        shapeName: 'VideoShape' },
      { ext: 'AVI',  color: '#2d70ed', Shape: VideoShape,        shapeName: 'VideoShape' },
      { ext: 'MOV',  color: '#7f8c8d', Shape: VideoShape,        shapeName: 'VideoShape' },
      { ext: 'MKV',  color: '#cf8d2a', Shape: VideoShape,        shapeName: 'VideoShape' },
    ],
  },
  {
    label: 'Compactados',
    icons: [
      { ext: 'ZIP',  color: '#f1c40f', Shape: ZipShape,          shapeName: 'ZipShape' },
      { ext: 'RAR',  color: '#8e44ad', Shape: ZipShape,          shapeName: 'ZipShape' },
      { ext: '7Z',   color: '#2980b9', Shape: ZipShape,          shapeName: 'ZipShape' },
      { ext: 'TAR',  color: '#e67e22', Shape: ZipShape,          shapeName: 'ZipShape' },
      { ext: 'GZ',   color: '#27ae60', Shape: ZipShape,          shapeName: 'ZipShape' },
    ],
  },
  {
    label: 'Outros',
    gap: 28,
    icons: [
      { ext: 'OUT',  color: '#34495e', Shape: OtherShape,        shapeName: 'OtherShape' },
    ],
  },
]

// ── Page ───────────────────────────────────────────────────────────────────────

export default function IconFilesPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Icon Files"
          description="Ícones de tipos de arquivo organizados por categoria, utilizados para identificação visual de formatos no sistema."
        />

        <div className="mb-12">
          <div className="bg-white rounded-[14px] border border-black/10 p-8">
            <div className="flex flex-col gap-10">
              {CATEGORIES.map((cat) => (
                <Category key={cat.label + cat.icons[0]?.ext} {...cat} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Tamanho', '32 × 32 px'],
              ['Padding interno', '8 px'],
              ['Border radius', '3 px'],
              ['Tipografia', 'Red Hat Display Black, 8.25 px, branco'],
              ['Ícone SVG', 'Branco, dimensões variáveis por categoria'],
              ['Gap entre ícones', '32 px (Outros: 28 px)'],
              ['Categorias', 'Documentos, Planilhas, Apresentações, Imagens, Áudio, Código, Vídeo, Compactados, Outros'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[180px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
