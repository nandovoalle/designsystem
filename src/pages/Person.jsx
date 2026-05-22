import { PageHeader } from '../components/PageHeader'

/* ── Icons ── */
function BadgeIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
  )
}
function MailIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}
function PhoneAndroidIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z" />
    </svg>
  )
}
function CallIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}
function CalendarPersonIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 14H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z" />
    </svg>
  )
}
function LocationIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

/* ── Base component ── */
function Avatar({ initials }) {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: '#e6f4fd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: 'Red Hat Display, sans-serif',
          fontWeight: 400,
          fontSize: 12,
          letterSpacing: '0.23px',
          color: '#4a4a4a',
          lineHeight: 'normal',
        }}
      >
        {initials}
      </span>
    </div>
  )
}

function PersonPrimary({ initials, name }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Avatar initials={initials} />
      <span
        style={{
          fontFamily: 'Red Hat Display, sans-serif',
          fontWeight: 400,
          fontSize: 14,
          letterSpacing: '0.23px',
          color: '#4a4a4a',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </span>
    </div>
  )
}

function PersonSub({ text }) {
  return (
    <div style={{ paddingLeft: 32 }}>
      <span
        style={{
          fontFamily: 'Red Hat Display, sans-serif',
          fontWeight: 400,
          fontSize: 14,
          letterSpacing: '0.25px',
          color: '#4a4a4a',
          lineHeight: '20px',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>
    </div>
  )
}

/* ── Person — variações exportáveis ── */
function PersonSimples({ initials, name }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <PersonPrimary initials={initials} name={name} />
    </div>
  )
}

function PersonCompleto({ initials, name, secondary, document }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <PersonPrimary initials={initials} name={name} />
      <PersonSub text={secondary} />
      <PersonSub text={document} />
    </div>
  )
}

/* ── Person Info (dark card) ── */
function InfoRow({ icon, text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <span
        style={{
          fontFamily: 'Red Hat Display, sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: 'white',
          lineHeight: '18px',
        }}
      >
        {text}
      </span>
    </div>
  )
}

function PersonInfoCard() {
  return (
    <div
      style={{
        backgroundColor: '#13283c',
        border: '1px solid #13283c',
        borderRadius: 4,
        padding: 16,
        gap: 8,
        width: 362,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <InfoRow icon={<BadgeIcon size={20} color="white" />} text="Gerente Financeiro" />
      <InfoRow icon={<MailIcon size={20} color="white" />} text="renato.aji@minhaempresa.com.br" />
      <InfoRow icon={<PhoneAndroidIcon size={20} color="white" />} text="(55) 99647-4785" />
      <InfoRow icon={<CallIcon size={20} color="white" />} text="(55) 3220-1350" />
      <InfoRow icon={<CalendarPersonIcon size={20} color="white" />} text="06/02/1987" />
      <InfoRow icon={<LocationIcon size={20} color="white" />} text="Rua Francisco Crossetti, 000, Nossa Senhora de Lourdes, 97050220" />
    </div>
  )
}

/* ── Page ── */
export default function PersonPage() {
  return (
    <div className="p-[68px]">
      <div className="container max-w-6xl mx-auto">
        <PageHeader
          title="Person"
          description="Componente de exibição de pessoa — fornecedores, clientes, solicitantes e contatos — em variações PJ/PF, Simples e Completo."
        />

        {/* Preview */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Preview</h2>
          <p className="text-sm text-[#666666] mb-6">
            Exemplo do componente aplicado em linhas de uma lista real.
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 bg-[#FAFAFA]">
                  <th className="text-left px-6 py-3 text-[#13283C] font-medium">Pessoa</th>
                  <th className="text-left px-6 py-3 text-[#13283C] font-medium">Função</th>
                  <th className="text-left px-6 py-3 text-[#13283C] font-medium">Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/5">
                  <td className="px-6 py-4">
                    <PersonCompleto initials="NF" name="Nome Fantasia" secondary="Razão Social LTDA" document="00.000.000/0000-00" />
                  </td>
                  <td className="px-6 py-4 text-[#666]">Fornecedor</td>
                  <td className="px-6 py-4 text-[#666]">PJ — Completo</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="px-6 py-4">
                    <PersonSimples initials="NF" name="Nome Fantasia" />
                  </td>
                  <td className="px-6 py-4 text-[#666]">Cliente</td>
                  <td className="px-6 py-4 text-[#666]">PJ — Simples</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="px-6 py-4">
                    <PersonCompleto initials="Ap" name="Apelido" secondary="Nome Completo da Pessoa" document="000.000.000-00" />
                  </td>
                  <td className="px-6 py-4 text-[#666]">Solicitante</td>
                  <td className="px-6 py-4 text-[#666]">PF — Completo</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <PersonSimples initials="Ap" name="Apelido" />
                  </td>
                  <td className="px-6 py-4 text-[#666]">Responsável</td>
                  <td className="px-6 py-4 text-[#666]">PF — Simples</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Variações */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Variações</h2>
          <p className="text-sm text-[#666666] mb-6">
            Quatro combinações entre tipo de pessoa (PJ / PF) e nível de detalhe (Simples / Completo).
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 text-sm font-medium text-[#13283C] w-32">Tipo</th>
                  <th className="p-6 text-sm font-medium text-[#13283C] text-left">Simples</th>
                  <th className="p-6 text-sm font-medium text-[#13283C] text-left">Completo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E9EFF2]">
                  <td className="p-4 text-sm font-medium text-[#13283C]">PJ</td>
                  <td className="p-6">
                    <PersonSimples initials="NF" name="Nome Fantasia" />
                    <p className="text-xs text-[#9E9E9E] mt-3 pl-8">
                      Se não houver Nome Fantasia,<br />exibir Razão Social
                    </p>
                  </td>
                  <td className="p-6">
                    <PersonCompleto
                      initials="NF"
                      name="Nome Fantasia"
                      secondary="Razão Social"
                      document="00.000.000/0000-00"
                    />
                    <p className="text-xs text-[#9E9E9E] mt-3 pl-8">
                      Se não houver Nome Fantasia,<br />exibir Razão Social
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium text-[#13283C]">PF</td>
                  <td className="p-6">
                    <PersonSimples initials="Ap" name="Apelido" />
                    <p className="text-xs text-[#9E9E9E] mt-3 pl-8">
                      Se não houver Apelido,<br />exibir Nome Completo
                    </p>
                  </td>
                  <td className="p-6">
                    <PersonCompleto
                      initials="Ap"
                      name="Apelido"
                      secondary="Nome Completo"
                      document="000.000.000-00"
                    />
                    <p className="text-xs text-[#9E9E9E] mt-3 pl-8">
                      Se não houver Apelido,<br />exibir Nome Completo
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Person Info */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-1">Person Info</h2>
          <p className="text-sm text-[#666666] mb-6">
            Card de contato completo — exibe apenas os campos disponíveis (cargo, e-mail, celular, telefone, nascimento, endereço).
          </p>
          <div className="bg-white rounded-[14px] border border-black/10 p-8 flex justify-center">
            <PersonInfoCard />
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Especificações Técnicas</h2>
          <div className="bg-white rounded-[14px] border border-black/10 p-6 space-y-3 text-sm">
            {[
              ['Avatar — tamanho',          '24 × 24 px'],
              ['Avatar — radius',           '50 % (círculo)'],
              ['Avatar — fundo',            '#E6F4FD'],
              ['Avatar — tipografia',       '12 px / Regular 400 · letter-spacing 0.23 px · cor #4A4A4A'],
              ['Primary — gap (avatar + nome)', '8 px'],
              ['Primary — tipografia',      '14 px / Regular 400 · letter-spacing 0.23 px · cor #4A4A4A'],
              ['Sub-rows — recuo',          'paddingLeft 32 px (alinha com o nome)'],
              ['Sub-rows — tipografia',     '14 px / Regular 400 · letter-spacing 0.25 px · line-height 20 px · cor #4A4A4A'],
              ['Completo — gap entre linhas', '4 px'],
              ['Info Card — fundo',         '#13283C (--blue-800)'],
              ['Info Card — padding',       '16 px'],
              ['Info Card — radius',        '4 px'],
              ['Info Card — largura',       '362 px'],
              ['Info Card — gap entre rows', '8 px'],
              ['Info Card — ícones',        '20 × 20 px · cor white'],
              ['Info Card — tipografia',    '14 px / Regular 400 · line-height 18 px · cor white'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="font-medium text-[#13283C] min-w-[260px]">{label}:</span>
                <span className="text-[#666666]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tokens de Cor */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-[#13283C] mb-2">Tokens de Cor</h2>
          <p className="text-sm text-[#666666] mb-6">Tokens aplicados nos dois sub-componentes.</p>
          <div className="bg-white rounded-[14px] border border-black/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E9EFF2] bg-[#FAFAFA]">
                  <th className="text-left p-4 font-medium text-[#13283C]">Elemento</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Propriedade</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Token</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Valor</th>
                  <th className="text-left p-4 font-medium text-[#13283C]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { el: 'Avatar',        ctx: 'Background',  token: '--blue-50',       val: '#E6F4FD', color: '#E6F4FD' },
                  { el: 'Avatar',        ctx: 'Texto',       token: '--text-primary',  val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Nome / Sub',    ctx: 'Texto',       token: '--text-primary',  val: '#4A4A4A', color: '#4A4A4A' },
                  { el: 'Info Card',     ctx: 'Background',  token: '--blue-800',      val: '#13283C', color: '#13283C' },
                  { el: 'Info Card',     ctx: 'Texto',       token: '--text-inverse',  val: '#FFFFFF', color: '#FFFFFF' },
                  { el: 'Info Card',     ctx: 'Ícones',      token: '--text-inverse',  val: '#FFFFFF', color: '#FFFFFF' },
                ].map(({ el, ctx, token, val, color }, i, arr) => (
                  <tr key={`${el}-${ctx}`} className={i < arr.length - 1 ? 'border-b border-[#E9EFF2]' : ''}>
                    <td className="p-4 font-medium text-[#13283C]">{el}</td>
                    <td className="p-4 text-[#666666]">{ctx}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{token}</td>
                    <td className="p-4 font-mono text-xs text-[#666666]">{val}</td>
                    <td className="p-4">
                      <div className="w-6 h-6 rounded border border-black/10" style={{ backgroundColor: color }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quando Usar */}
        <div>
          <h2 className="text-xl font-medium text-[#13283C] mb-4">Quando Usar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: 'Simples vs. Completo',
                desc: 'Use Simples quando o espaço for limitado (linhas densas de tabela). Use Completo quando o contexto exige identificação clara — ex.: detalhes de um pedido ou atendimento.',
              },
              {
                label: 'Fallback de nome',
                desc: 'Se o Nome Fantasia (PJ) ou o Apelido (PF) não estiver disponível, exiba Razão Social ou Nome Completo no lugar — nunca deixe o campo vazio.',
              },
              {
                label: 'Person Info',
                desc: 'Use o card escuro para exibir os dados de contato completos de um envolvido. Renderize apenas as linhas que possuem valor — omita campos ausentes.',
              },
              {
                label: 'Funções suportadas',
                desc: 'O componente serve para Fornecedor, Cliente, Solicitante, Responsável, Envolvido, Interlocutor, Observador, Criado por e Remetente — PJ ou PF.',
              },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: 'var(--blue-600)' }} />
                <div>
                  <p className="text-sm font-medium text-[#13283C]">{label}</p>
                  <p className="text-xs text-[#666666] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
