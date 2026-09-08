import { useState } from 'react'

const TEDDY_URL =
  'https://images.unsplash.com/photo-1748399998178-b95d91df385a?w=600&h=700&fit=crop&auto=format'
const BG_URL =
  'https://images.unsplash.com/photo-1776174550478-72f34ae13b24?w=1600&h=900&fit=crop&auto=format'
const PHOTO_1 =
  'https://images.unsplash.com/photo-1453828423292-392a660a502f?w=400&h=300&fit=crop&auto=format'
const PHOTO_2 =
  'https://images.unsplash.com/photo-1599652521984-8bebed0580b7?w=300&h=400&fit=crop&auto=format'
const PHOTO_3 =
  'https://images.unsplash.com/photo-1722173205783-d602329f0743?w=360&h=280&fit=crop&auto=format'

type Stage = 'intro' | 'hint' | 'awakened'

export default function App() {
  const [stage, setStage] = useState<Stage>('intro')
  const [hovered, setHovered] = useState(false)

  const handleToyClick = () => {
    if (stage === 'intro') setStage('hint')
    else if (stage === 'hint') setStage('awakened')
  }

  return (
    <div className="grain-overlay relative w-full min-h-screen overflow-hidden bg-[#1a1410]">

      {/* Fondo atmosférico */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${BG_URL}')`,
          opacity: 0.12,
          filter: 'sepia(80%) blur(2px)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(10,6,2,0.85) 100%)',
        }}
      />

      {/* Polaroids de fondo — decorativas */}
      <Polaroid
        src={PHOTO_1}
        alt="Fotografías antiguas en una caja de madera"
        style={{ top: '8%', left: '4%', '--rot': '-6deg' } as React.CSSProperties}
        caption="verano, 1993"
        delay={0.2}
        dim={stage === 'intro'}
      />
      <Polaroid
        src={PHOTO_3}
        alt="Grupo de polaroids sobre tela blanca"
        style={{ top: '12%', right: '5%', '--rot': '5deg' } as React.CSSProperties}
        caption="en casa de la abuela"
        delay={0.5}
        dim={stage === 'intro'}
      />
      <Polaroid
        src={PHOTO_2}
        alt="Marco de fotografía antiguo sobre mesa de madera"
        style={{ bottom: '10%', left: '6%', '--rot': '3deg' } as React.CSSProperties}
        caption="sin fecha"
        delay={0.8}
        dim={stage === 'intro'}
      />

      {/* Centro — contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 gap-0">

        {/* Título */}
        <header className="text-center mb-10 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both', opacity: 0 }}>
          <p
            className="flicker uppercase tracking-[0.35em] text-xs mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: '#8a7a65' }}
          >
            webdoc interactivo
          </p>
          <h1
            className="text-5xl md:text-7xl leading-none mb-3"
            style={{
              fontFamily: 'var(--font-display)',
              color: '#e8dcc8',
              textShadow: '0 0 40px rgba(201,169,110,0.2)',
            }}
          >
            Objetos<br />
            <em style={{ color: '#c9a96e' }}>que hablan</em>
          </h1>
          <div
            className="mx-auto mt-4 h-px w-24"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)' }}
          />
        </header>

        {/* El juguete */}
        <div
          className="relative cursor-pointer select-none group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleToyClick}
          style={{
            animation: 'float 5s ease-in-out infinite',
            ['--rot' as string]: '0deg',
          }}
          title="Interactúa con el juguete"
          role="button"
          aria-label="Explorar el osito de peluche"
        >
          {/* Halo de luz */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none transition-all duration-700"
            style={{
              background: 'radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)',
              transform: 'scale(1.4)',
              opacity: hovered || stage !== 'intro' ? 1 : 0.4,
            }}
          />

          <div
            className="toy-glow overflow-hidden"
            style={{
              width: 220,
              height: 260,
              borderRadius: '50% 50% 45% 45% / 60% 60% 40% 40%',
              border: `1px solid rgba(201,169,110,${hovered ? 0.6 : 0.2})`,
              transition: 'border-color 0.4s ease',
            }}
          >
            <img
              src={TEDDY_URL}
              alt="Osito de peluche desgastado, protagonista de la historia"
              className="w-full h-full object-cover"
              style={{
                filter: `sepia(${stage === 'awakened' ? 0 : 40}%) brightness(${hovered ? 1.15 : 0.9}) contrast(1.05)`,
                transition: 'filter 0.6s ease',
              }}
            />
          </div>

          {/* Indicador de interacción */}
          {stage === 'intro' && (
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1"
              style={{ opacity: hovered ? 0 : 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{
                    background: '#c9a96e',
                    animation: `pulse-glow 1.5s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pista / revelación */}
        <div className="mt-10 text-center min-h-[80px] flex flex-col items-center justify-center">
          {stage === 'intro' && (
            <p
              className="text-sm transition-opacity duration-500"
              style={{
                fontFamily: 'var(--font-mono)',
                color: '#8a7a65',
                opacity: hovered ? 0.4 : 0.7,
              }}
            >
              {hovered ? 'toca para recordar' : 'pasa el cursor sobre el objeto'}
            </p>
          )}

          {stage === 'hint' && (
            <div
              className="animate-fade-up max-w-xs"
              style={{ animationFillMode: 'both', opacity: 0 }}
            >
              <p
                className="text-lg italic leading-relaxed"
                style={{ fontFamily: 'var(--font-display)', color: '#d9cbb5' }}
              >
                "¿Recuerdas dónde estaba<br />
                cuando lo viste por primera vez?"
              </p>
              <button
                onClick={handleToyClick}
                className="mt-6 px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 hover:opacity-80"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#c9a96e',
                  border: '1px solid rgba(201,169,110,0.35)',
                  background: 'rgba(201,169,110,0.05)',
                }}
              >
                explorar
              </button>
            </div>
          )}

          {stage === 'awakened' && (
            <div
              className="animate-fade-up flex flex-col items-center gap-4"
              style={{ animationFillMode: 'both', opacity: 0 }}
            >
              <p
                className="text-base italic"
                style={{ fontFamily: 'var(--font-display)', color: '#c9a96e' }}
              >
                El objeto recuerda por ti.
              </p>
              <nav className="flex gap-6 mt-2">
                {['infancia', 'fotografías', 'recuerdos'].map((label) => (
                  <button
                    key={label}
                    className="text-xs uppercase tracking-widest transition-all duration-300 hover:opacity-100 opacity-60 hover:opacity-100 pb-1"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: '#d9cbb5',
                      borderBottom: '1px solid rgba(201,169,110,0.4)',
                    }}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Barra inferior — progreso de exploración */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-4"
        style={{ borderTop: '1px solid rgba(201,169,110,0.1)' }}
      >
        <span
          className="text-xs uppercase tracking-widest opacity-40"
          style={{ fontFamily: 'var(--font-mono)', color: '#8a7a65' }}
        >
          {stage === 'intro' ? '— inicio —' : stage === 'hint' ? '01 / juguete' : '02 / infancia'}
        </span>
        <div className="flex gap-2 items-center">
          {(['intro', 'hint', 'awakened'] as Stage[]).map((s, i) => (
            <div
              key={s}
              className="transition-all duration-500"
              style={{
                width: stage === s ? 24 : 6,
                height: 2,
                background:
                  stage === s ? '#c9a96e' : 'rgba(201,169,110,0.25)',
                borderRadius: 2,
              }}
            />
          ))}
        </div>
        <span
          className="text-xs uppercase tracking-widest opacity-40"
          style={{ fontFamily: 'var(--font-mono)', color: '#8a7a65' }}
        >
          objetos que hablan
        </span>
      </footer>
    </div>
  )
}

type PolaroidProps = {
  src: string
  alt: string
  style: React.CSSProperties
  caption: string
  delay: number
  dim: boolean
}

function Polaroid({ src, alt, style, caption, delay, dim }: PolaroidProps) {
  return (
    <div
      className="absolute hidden md:block"
      style={{
        animation: `float ${5 + delay}s ease-in-out ${delay}s infinite`,
        opacity: dim ? 0.18 : 0.45,
        transition: 'opacity 0.8s ease',
        ...style,
      }}
    >
      <div
        className="bg-[#f0e8d5] p-2 pb-8 shadow-2xl"
        style={{
          transform: `rotate(${style['--rot' as keyof typeof style] ?? '0deg'})`,
          width: 140,
        }}
      >
        <div className="bg-[#d4c9b0] overflow-hidden" style={{ height: 110 }}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            style={{ filter: 'sepia(60%) contrast(0.9) brightness(0.85)' }}
          />
        </div>
        <p
          className="mt-2 text-center text-[10px] italic"
          style={{ fontFamily: 'var(--font-mono)', color: '#5a4a35' }}
        >
          {caption}
        </p>
      </div>
    </div>
  )
}
