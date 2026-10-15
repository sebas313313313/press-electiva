import React, { useState, useEffect } from 'react';
import {
  Layers,
  Network,
  GitBranch,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Activity,
  FileText,
  Users,
  Wrench,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ShieldAlert,
  Boxes,
  Compass,
  Cpu,
  BookOpen,
  Calendar,
  AlertTriangle,
  RotateCw
} from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeLoop, setActiveLoop] = useState('both');
  const [filterCause, setFilterCause] = useState('all'); // 'all', 'caso', 'verificar'
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = 11;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', backgroundColor: '#ffffff' }}>
      
      {/* HEADER INSTITUCIONAL UNICOMFACAUCA */}
      <header
        className="no-print"
        style={{
          height: '66px',
          backgroundColor: '#ffffff',
          borderBottom: '1.5px solid var(--border-light)',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: 'var(--shadow-sm)',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              paddingRight: '1.25rem',
              borderRight: '1.5px solid var(--border-light)'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'var(--unicom-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Compass size={20} strokeWidth={2.2} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--unicom-navy)', lineHeight: 1.1 }}>
                UNICOMFACAUCA
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--unicom-blue)', fontWeight: 600 }}>
                Corporación Universitaria Comfacauca
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700 }}>
              Electiva General 2 • Análisis Organizacional • <strong>Grupo 3</strong>
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-main)', fontWeight: 600 }}>
              Integrantes: <span style={{ color: 'var(--unicom-navy)', fontWeight: 700 }}>Daniela Rojas</span> •{' '}
              <span style={{ color: 'var(--unicom-navy)', fontWeight: 700 }}>Cristian Ávila</span> •{' '}
              <span style={{ color: 'var(--unicom-navy)', fontWeight: 700 }}>Jhon Sebastián Potosí Campo</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={toggleFullscreen}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '6px',
              border: '1px solid var(--border-light)',
              backgroundColor: '#ffffff',
              color: 'var(--text-secondary)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            {isFullscreen ? 'Salir' : 'Pantalla Completa'}
          </button>
        </div>
      </header>

      {/* ÁREA CENTRAL DE DIAPOSITIVAS (FONDO 100% BLANCO) */}
      <main
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex'
        }}
      >
        <div
          key={currentSlide}
          className="animate-slide slide-container"
          style={{
            flex: 1,
            padding: '2.2rem 3.5rem 1.6rem 3.5rem',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff'
          }}
        >
          {/* DIAPOSITIVA 0: PORTADA INSTITUCIONAL */}
          {currentSlide === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '6px',
                    backgroundColor: 'var(--unicom-light)',
                    border: '1px solid var(--unicom-border)',
                    color: 'var(--unicom-navy)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '0.75rem'
                  }}
                >
                  <BookOpen size={16} /> Caso Asignado: Grupo 3 • Laboratorio Universitario de Fabricación
                </div>

                <h1
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'var(--unicom-navy)',
                    lineHeight: 1.15,
                    marginBottom: '0.5rem'
                  }}
                >
                  Análisis Organizacional y Propuesta Sustentada
                </h1>
                <p style={{ fontSize: '1.15rem', color: 'var(--unicom-blue)', fontWeight: 500, marginBottom: '1.6rem' }}>
                  Laboratorio de Impresión 3D y Cortadora Láser • Universidad de Comfacauca (Unicomfacauca)
                </p>
              </div>

              {/* Grid 4 Perspectivas de la Rúbrica */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
                <div style={{ border: '1.5px solid var(--border-light)', borderRadius: '10px', padding: '1.3rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--unicom-navy)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--unicom-navy)', fontWeight: 700, marginBottom: '0.45rem' }}>
                    <Network size={18} /> 1. Sistémico
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    Actores, elementos, relaciones, 2 ciclos causales de retroalimentación y efectos no previstos de comprar equipo.
                  </p>
                </div>

                <div style={{ border: '1.5px solid var(--border-light)', borderRadius: '10px', padding: '1.3rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--unicom-blue)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--unicom-blue)', fontWeight: 700, marginBottom: '0.45rem' }}>
                    <Activity size={18} /> 2. Cadena Valor
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    Pistas del caso: recepción, revisión, programación, equipos, materiales y entrega con valor vs fallas.
                  </p>
                </div>

                <div style={{ border: '1.5px solid var(--border-light)', borderRadius: '10px', padding: '1.3rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--status-warning)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--status-warning)', fontWeight: 700, marginBottom: '0.45rem' }}>
                    <GitBranch size={18} /> 3. Ishikawa Real
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    Diagrama visual de espina de pescado auténtico con 14 causas: 6 respaldadas por el caso y 8 por verificar.
                  </p>
                </div>

                <div style={{ border: '1.5px solid var(--border-light)', borderRadius: '10px', padding: '1.3rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--status-success)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--status-success)', fontWeight: 700, marginBottom: '0.45rem' }}>
                    <CheckCircle2 size={18} /> 4. Propuesta
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    2 acciones de mejora, responsables, indicadores cuantitativos, efectos secundarios y dictamen de compra.
                  </p>
                </div>
              </div>

              {/* Banner Grupo 3 */}
              <div
                style={{
                  marginTop: '1.3rem',
                  padding: '0.95rem 1.4rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--unicom-light)',
                  border: '1px solid var(--unicom-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Users size={20} color="var(--unicom-navy)" />
                  <span style={{ fontSize: '0.92rem', color: 'var(--unicom-navy)', fontWeight: 700 }}>
                    Grupo 3: Daniela Rojas • Cristian Ávila • Jhon Sebastián Potosí Campo
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--unicom-blue)', fontWeight: 600 }}>
                  <span>Navegar con flecha derecha (▶)</span> <ArrowRight size={15} />
                </div>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 1: DIAGNÓSTICO DEL CASO */}
          {currentSlide === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Diagnóstico del Caso • Grupo 3
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.2rem' }}>
                  Problema a Analizar: Retrasos y Repetición de Trabajos
                </h2>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  Las evidencias explícitas y pistas dadas en el enunciado
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.4rem' }}>
                <div style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.4rem', textAlign: 'center', borderTop: '4px solid var(--unicom-navy)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Demanda Mensual</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.6rem', fontWeight: 700, color: 'var(--unicom-navy)', lineHeight: 1.1 }}>80</div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                    Solicitudes de varios programas académicos atendidas por <strong>un solo técnico</strong>.
                  </p>
                </div>

                <div style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.4rem', textAlign: 'center', borderTop: '4px solid var(--status-danger)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Retrasos en Entregas</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.6rem', fontWeight: 700, color: 'var(--status-danger)', lineHeight: 1.1 }}>30%</div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                    De los trabajos se entregan <strong>después de la fecha prometida</strong>.
                  </p>
                </div>

                <div style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.4rem', textAlign: 'center', borderTop: '4px solid var(--status-warning)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Repetición de Piezas</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--status-warning)', lineHeight: 1.5 }}>REPROCESO</div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                    Archivos con <strong>dimensiones incorrectas</strong> o <strong>material no adecuado</strong>.
                  </p>
                </div>
              </div>

              <div style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.15rem 1.4rem', backgroundColor: 'var(--unicom-light)' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--unicom-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
                  <AlertTriangle size={18} color="var(--unicom-navy)" /> Regla de la Rúbrica: No Confundir Síntomas con Causas
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', fontSize: '0.88rem', lineHeight: 1.45 }}>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid var(--unicom-border)' }}>
                    <strong style={{ color: 'var(--status-danger)' }}>El Síntoma (Efecto visible):</strong> El 30% de retraso y las quejas de los alumnos son solo el resultado final.
                  </div>
                  <div style={{ backgroundColor: '#ffffff', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid var(--unicom-border)' }}>
                    <strong style={{ color: 'var(--unicom-navy)' }}>Las Causas Raíz (Condiciones generadoras):</strong> Reservas informales por mensajes, consolidación a mano y ausencia de revisión técnica previa.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 2: PUNTO 1 - ACTORES, ELEMENTOS Y RELACIONES */}
          {currentSlide === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Punto 1 • Pensamiento Sistémico
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.2rem' }}>
                  Actores, Elementos y Relaciones del Sistema
                </h2>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  Pistas del caso: estudiantes, docentes, recepción de archivos, revisión técnica, programación, equipos, materiales y entrega
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flex: 1 }}>
                <div style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.4rem', backgroundColor: '#ffffff' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--unicom-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.45rem' }}>
                    <Users size={18} /> Actores Clave del Sistema
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.86rem', lineHeight: 1.45 }}>
                    <div>
                      <strong style={{ color: 'var(--unicom-navy)' }}>• Estudiantes:</strong> Usuarios de varios programas académicos que envían pedidos por mensajes sin formato estandarizado ni conocimiento de tolerancias.
                    </div>
                    <div>
                      <strong style={{ color: 'var(--unicom-navy)' }}>• Docentes:</strong> Asignan maquetas y proyectos de clase con fechas límite sin coordinar la capacidad del taller.
                    </div>
                    <div>
                      <strong style={{ color: 'var(--unicom-navy)' }}>• Técnico Único:</strong> Responsable absoluto de leer mensajes, agendar a mano, calibrar, cortar, imprimir y entregar.
                    </div>
                    <div>
                      <strong style={{ color: 'var(--unicom-navy)' }}>• Directivas / Presupuesto:</strong> Proponen comprar otra máquina asumiendo que el problema es falta de hardware.
                    </div>
                  </div>
                </div>

                <div style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.4rem', backgroundColor: '#ffffff' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--unicom-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.45rem' }}>
                    <Boxes size={18} /> Elementos y la Relación Crítica
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem', lineHeight: 1.45 }}>
                    <div>• <strong>Canal de Reservas:</strong> Mensajes informales (chat) sin validación técnica.</div>
                    <div>• <strong>Archivos y Materiales:</strong> Modelos 3D con medidas incorrectas y materiales inadecuados.</div>
                    <div>• <strong>Equipos de Fabricación:</strong> Impresoras 3D y cortadora láser con agendas saturadas.</div>

                    <div style={{ marginTop: '0.4rem', backgroundColor: 'var(--unicom-light)', borderLeft: '4px solid var(--unicom-navy)', padding: '0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                      <strong style={{ color: 'var(--unicom-navy)' }}>Relación Crítica de Causa y Efecto:</strong> Si los estudiantes envían archivos por chat ➔ el técnico gasta horas agendando a mano ➔ no hace revisión técnica ➔ la máquina imprime mal ➔ se repite el trabajo y colapsa la programación de turnos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 3: PUNTO 1 - DIAGRAMA CAUSAL CON DOS CICLOS DE RETROALIMENTACIÓN */}
          {currentSlide === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Punto 1 • Dinámica de Sistemas
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.95rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.15rem' }}>
                  Diagrama Causal de Retroalimentación (Feedback Loops)
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Representación gráfica formal con polaridades (+ / −) de los dos bucles reforzadores del taller
                </p>
              </div>

              {/* Diagrama Causal Gráfico en SVG */}
              <div style={{ flex: 1, border: '1.5px solid var(--border-light)', borderRadius: '10px', padding: '0.75rem', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <span style={{ fontWeight: 700, color: 'var(--status-danger)' }}>(+) Mismo sentido de cambio</span> •{' '}
                    <span style={{ fontWeight: 700, color: 'var(--status-warning)' }}>R = Ciclo Reforzador (Bola de nieve)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => setActiveLoop('both')}
                      style={{
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: activeLoop === 'both' ? 'var(--unicom-navy)' : '#ffffff',
                        color: activeLoop === 'both' ? '#ffffff' : 'var(--text-secondary)',
                        cursor: 'pointer'
                      }}
                    >
                      Ver Ambos Ciclos
                    </button>
                    <button
                      onClick={() => setActiveLoop('r1')}
                      style={{
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        borderRadius: '4px',
                        border: '1px solid var(--status-danger-border)',
                        backgroundColor: activeLoop === 'r1' ? 'var(--status-danger)' : 'var(--status-danger-bg)',
                        color: activeLoop === 'r1' ? '#ffffff' : 'var(--status-danger)',
                        cursor: 'pointer'
                      }}
                    >
                      Ciclo R1: Reproceso
                    </button>
                    <button
                      onClick={() => setActiveLoop('r2')}
                      style={{
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        borderRadius: '4px',
                        border: '1px solid var(--status-warning-border)',
                        backgroundColor: activeLoop === 'r2' ? 'var(--status-warning)' : 'var(--status-warning-bg)',
                        color: activeLoop === 'r2' ? '#ffffff' : 'var(--status-warning)',
                        cursor: 'pointer'
                      }}
                    >
                      Ciclo R2: Sobrecarga Manual
                    </button>
                  </div>
                </div>

                <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 940 340" style={{ width: '100%', height: '100%', maxHeight: '310px' }}>
                    <defs>
                      <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#005a9c" />
                      </marker>
                      <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#b91c1c" />
                      </marker>
                      <marker id="arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#b45309" />
                      </marker>
                    </defs>

                    {/* BUCLE R1 (Izquierda/Centro) */}
                    <g opacity={activeLoop === 'r2' ? 0.25 : 1} transition="opacity 0.3s">
                      {/* Nodo 1 */}
                      <rect x="50" y="40" width="180" height="50" rx="8" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
                      <text x="140" y="65" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">Archivos con errores</text>
                      <text x="140" y="80" textAnchor="middle" fontSize="9.5" fill="#475569">Medidas malas / material erróneo</text>

                      {/* Flecha 1 -> 2 */}
                      <path d="M 230 65 Q 310 65 350 110" fill="none" stroke="#b91c1c" strokeWidth="2" markerEnd="url(#arrow-red)" />
                      <text x="300" y="80" fontSize="11" fontWeight="bold" fill="#b91c1c">(+)</text>

                      {/* Nodo 2 */}
                      <rect x="340" y="110" width="180" height="50" rx="8" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
                      <text x="430" y="135" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">Piezas defectuosas</text>
                      <text x="430" y="150" textAnchor="middle" fontSize="9.5" fill="#475569">Reproceso / volver a fabricar</text>

                      {/* Flecha 2 -> 3 */}
                      <path d="M 430 160 Q 430 220 370 240" fill="none" stroke="#b91c1c" strokeWidth="2" markerEnd="url(#arrow-red)" />
                      <text x="440" y="205" fontSize="11" fontWeight="bold" fill="#b91c1c">(+)</text>

                      {/* Nodo 3 */}
                      <rect x="220" y="235" width="180" height="50" rx="8" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
                      <text x="310" y="258" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">Máquinas ocupadas</text>
                      <text x="310" y="273" textAnchor="middle" fontSize="9.5" fill="#475569">Repitiendo trabajos viejos</text>

                      {/* Flecha 3 -> 4 */}
                      <path d="M 220 260 Q 130 260 110 215" fill="none" stroke="#b91c1c" strokeWidth="2" markerEnd="url(#arrow-red)" />
                      <text x="140" y="275" fontSize="11" fontWeight="bold" fill="#b91c1c">(+)</text>

                      {/* Nodo 4 */}
                      <rect x="30" y="165" width="170" height="50" rx="8" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
                      <text x="115" y="188" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">Retraso en entregas (30%)</text>
                      <text x="115" y="203" textAnchor="middle" fontSize="9.5" fill="#475569">Acumulación de fila de pedidos</text>

                      {/* Flecha 4 -> 1 (cierra bucle R1) */}
                      <path d="M 115 165 Q 115 120 125 95" fill="none" stroke="#b91c1c" strokeWidth="2" markerEnd="url(#arrow-red)" />
                      <text x="85" y="130" fontSize="11" fontWeight="bold" fill="#b91c1c">(+)</text>

                      {/* Medallón central R1 */}
                      <circle cx="240" cy="155" r="24" fill="#ffffff" stroke="#b91c1c" strokeWidth="2" />
                      <text x="240" y="152" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">R1</text>
                      <text x="240" y="166" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b91c1c">Reproceso</text>
                    </g>

                    {/* BUCLE R2 (Derecha) */}
                    <g opacity={activeLoop === 'r1' ? 0.25 : 1} transition="opacity 0.3s">
                      {/* Nodo 5 */}
                      <rect x="710" y="40" width="190" height="50" rx="8" fill="#fffbeb" stroke="#fde68a" strokeWidth="1.5" />
                      <text x="805" y="63" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Reservas por mensajes</text>
                      <text x="805" y="78" textAnchor="middle" fontSize="9.5" fill="#475569">Chats sueltos sin orden</text>

                      {/* Flecha 5 -> 6 */}
                      <path d="M 710 65 Q 600 65 590 120" fill="none" stroke="#b45309" strokeWidth="2" markerEnd="url(#arrow-amber)" />
                      <text x="630" y="80" fontSize="11" fontWeight="bold" fill="#b45309">(+)</text>

                      {/* Nodo 6 */}
                      <rect x="520" y="125" width="180" height="50" rx="8" fill="#fffbeb" stroke="#fde68a" strokeWidth="1.5" />
                      <text x="610" y="148" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Consolidación manual</text>
                      <text x="610" y="163" textAnchor="middle" fontSize="9.5" fill="#475569">Técnico pasa horas a mano</text>

                      {/* Flecha 6 -> 7 */}
                      <path d="M 610 175 Q 610 240 680 250" fill="none" stroke="#b45309" strokeWidth="2" markerEnd="url(#arrow-amber)" />
                      <text x="635" y="215" fontSize="11" fontWeight="bold" fill="#b45309">(−)</text>

                      {/* Nodo 7 */}
                      <rect x="670" y="235" width="190" height="50" rx="8" fill="#fffbeb" stroke="#fde68a" strokeWidth="1.5" />
                      <text x="765" y="258" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Menos tiempo de calibración</text>
                      <text x="765" y="273" textAnchor="middle" fontSize="9.5" fill="#475569">Sin revisión técnica ni asesoría</text>

                      {/* Flecha 7 -> 8 */}
                      <path d="M 820 235 Q 890 200 870 145" fill="none" stroke="#b45309" strokeWidth="2" markerEnd="url(#arrow-amber)" />
                      <text x="880" y="195" fontSize="11" fontWeight="bold" fill="#b45309">(+)</text>

                      {/* Nodo 8 */}
                      <rect x="760" y="135" width="160" height="45" rx="8" fill="#fffbeb" stroke="#fde68a" strokeWidth="1.5" />
                      <text x="840" y="155" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#92400e">Incertidumbre estudiantil</text>
                      <text x="840" y="168" textAnchor="middle" fontSize="9" fill="#475569">Mandan más mensajes</text>

                      {/* Flecha 8 -> 5 */}
                      <path d="M 840 135 L 840 95" fill="none" stroke="#b45309" strokeWidth="2" markerEnd="url(#arrow-amber)" />
                      <text x="850" y="115" fontSize="11" fontWeight="bold" fill="#b45309">(+)</text>

                      {/* Medallón central R2 */}
                      <circle cx="730" cy="155" r="24" fill="#ffffff" stroke="#b45309" strokeWidth="2" />
                      <text x="730" y="152" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b45309">R2</text>
                      <text x="730" y="166" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">Sobrecarga</text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 4: PUNTO 1 - EFECTOS NO PREVISTOS Y CONDICIONES DE COMPRA */}
          {currentSlide === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Punto 1 • Efectos No Previstos de una Decisión
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.2rem' }}>
                  ¿Qué Ocurre si se Compra Otra Impresora 3D?
                </h2>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  Evaluación de la propuesta del caso frente a las condiciones reales donde sí agregaría valor
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flex: 1 }}>
                <div style={{ border: '1px solid var(--status-danger-border)', borderRadius: '10px', padding: '1.4rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--status-danger)' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--status-danger)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                    <ShieldAlert size={18} /> Efectos No Previstos (Consecuencias Negativas)
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.86rem', lineHeight: 1.45 }}>
                    <div>
                      <strong>1. Sobrecarga letal al técnico:</strong> Si ya no puede con 80 solicitudes a mano, atender otra máquina implicará más chats que transcribir y menos tiempo de revisión.
                    </div>
                    <div>
                      <strong>2. Desperdicio acelerado de insumos:</strong> Sin filtro previo de medidas, la nueva máquina solo servirá para producir piezas defectuosas más rápido y botar más filamento.
                    </div>
                    <div>
                      <strong>3. Inversión ineficiente:</strong> Se gasta dinero universitario en maquinaria cuando el verdadero cuello de botella está en la recepción y validación.
                    </div>
                  </div>
                </div>

                <div style={{ border: '1px solid var(--status-success-border)', borderRadius: '10px', padding: '1.4rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--status-success)' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--status-success)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                    <CheckCircle2 size={18} /> ¿Bajo qué condiciones SÍ agregaría valor?
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.86rem', lineHeight: 1.45 }}>
                    <div>
                      <strong>Condición 1: Entrada estandarizada:</strong> Que los estudiantes usen un formulario digital obligatorio y no se reciba ningún pedido por chats sueltos.
                    </div>
                    <div>
                      <strong>Condición 2: Tasa de reprocesos menor al 3%:</strong> Que gracias a un checklist previo se eliminen las piezas con dimensiones incorrectas.
                    </div>
                    <div>
                      <strong>Condición 3: Capacidad al 100% de piezas buenas:</strong> Que tras eliminar el desorden, las máquinas estén ocupadas al 100% y aun así falte capacidad.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 5: PUNTO 2 - CADENA DE VALOR (ACTIVIDADES) */}
          {currentSlide === 5 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Punto 2 • Cadena de Valor
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.2rem' }}>
                  Actividades Principales y de Apoyo
                </h2>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  Pistas abordadas: recepción de archivos, revisión técnica, programación, equipos, materiales y entrega
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '1.5rem' }}>
                {[
                  { step: '1. Recepción & Programación', desc: 'Recepción de archivos y programación manual de turnos.', icon: <FileText size={18} /> },
                  { step: '2. Revisión & Fabricación', desc: 'Revisión técnica de escalas, laminado, montaje y corte/impresión.', icon: <Cpu size={18} /> },
                  { step: '3. Acabado & Entrega', desc: 'Remoción de rebabas y soportes, y entrega de la pieza terminada.', icon: <CheckCircle2 size={18} /> },
                  { step: '4. Asesoría Técnica', desc: 'Orientación a estudiantes sobre tolerancias y elección de materiales.', icon: <Users size={18} /> }
                ].map((act, idx) => (
                  <div key={idx} style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.2rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--unicom-navy)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--unicom-navy)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.45rem' }}>
                      {act.icon} {act.step}
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{act.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.15rem 1.4rem', backgroundColor: 'var(--unicom-light)' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--unicom-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <Wrench size={18} /> Actividades de Apoyo (Infraestructura del Taller)
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', fontSize: '0.82rem', lineHeight: 1.4 }}>
                  <div><strong>Gestión General:</strong> Políticas de uso, horarios y presupuesto asignado.</div>
                  <div><strong>Gestión de Personal:</strong> Técnico único sin monitores de apoyo en horas pico.</div>
                  <div><strong>Tecnología:</strong> Software de laminado y ausencia de sistema de reservas.</div>
                  <div><strong>Compras y Stock:</strong> Compra de bobinas de filamento, placas de acrílico y repuestos.</div>
                </div>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 6: PUNTO 2 - VALOR VS DESPERDICIO */}
          {currentSlide === 6 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Punto 2 • Análisis de Valor
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.2rem' }}>
                  Generación de Valor vs Demoras, Desperdicios y Fallas
                </h2>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  Identificación exacta de dónde se aporta valor y dónde se destruye
                </p>
              </div>

              <div style={{ border: '1px solid var(--border-light)', borderRadius: '8px', overflow: 'hidden', flex: 1 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--unicom-light)', borderBottom: '1.5px solid var(--border-light)' }}>
                      <th style={{ padding: '0.8rem 1.2rem', color: 'var(--unicom-navy)', fontWeight: 700, width: '25%' }}>Etapa del Flujo</th>
                      <th style={{ padding: '0.8rem 1.2rem', color: 'var(--unicom-navy)', fontWeight: 700, width: '37%' }}>¿Dónde se Genera Valor para el Alumno?</th>
                      <th style={{ padding: '0.8rem 1.2rem', color: 'var(--unicom-navy)', fontWeight: 700, width: '38%' }}>¿Dónde Aparecen Demoras y Desperdicios?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem 1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>1. Recepción y Programación</td>
                      <td style={{ padding: '0.75rem 1.2rem', color: 'var(--text-secondary)' }}>Punto de contacto para entregar el modelo y reservar el turno de fabricación.</td>
                      <td style={{ padding: '0.75rem 1.2rem', color: 'var(--status-danger)', backgroundColor: 'var(--status-danger-bg)' }}>
                        <strong>Demora y Falla:</strong> Mensajes desordenados sin formato; el técnico pierde horas anotando a mano.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem 1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>2. Fabricación (Equipos y Materiales)</td>
                      <td style={{ padding: '0.75rem 1.2rem', color: 'var(--status-success)', backgroundColor: 'var(--status-success-bg)' }}>
                        <strong>Valor Principal:</strong> Transforma el archivo 3D en una pieza física real para la maqueta.</td>
                      <td style={{ padding: '0.75rem 1.2rem', color: 'var(--status-danger)', backgroundColor: 'var(--status-danger-bg)' }}>
                        <strong>Desperdicio Grave:</strong> Piezas con medidas malas o material erróneo; plástico botado y máquinas bloqueadas.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.75rem 1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>3. Entrega de la Pieza</td>
                      <td style={{ padding: '0.75rem 1.2rem', color: 'var(--text-secondary)' }}>El estudiante recibe su modelo terminado y funcional para su presentación.</td>
                      <td style={{ padding: '0.75rem 1.2rem', color: 'var(--status-danger)', backgroundColor: 'var(--status-danger-bg)' }}>
                        <strong>Demora Crítica:</strong> El 30% de los trabajos se entregan tarde, afectando la nota académica.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem 1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>4. Asesoría y Revisión Técnica</td>
                      <td style={{ padding: '0.75rem 1.2rem', color: 'var(--text-secondary)' }}>Aprender sobre materiales reales, tolerancias y manufactura digital.</td>
                      <td style={{ padding: '0.75rem 1.2rem', color: 'var(--status-warning)', backgroundColor: 'var(--status-warning-bg)' }}>
                        <strong>Abandono Total:</strong> No se realiza por falta de tiempo del técnico, perdiendo el rol formativo.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 7: PUNTO 3 - DIAGRAMA DE ISHIKAWA (ESPINA DE PESCADO REAL SVG) */}
          {currentSlide === 7 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Punto 3 • Diagrama de Ishikawa Auténtico
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.95rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.1rem' }}>
                    Diagrama de Causa y Efecto (Espina de Pescado)
                  </h2>
                </div>

                {/* Filtro de causas para interactividad */}
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Filtrar causas:</span>
                  <button
                    onClick={() => setFilterCause('all')}
                    style={{
                      padding: '0.2rem 0.55rem',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: filterCause === 'all' ? 'var(--unicom-navy)' : '#ffffff',
                      color: filterCause === 'all' ? '#ffffff' : 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    Todas (14)
                  </button>
                  <button
                    onClick={() => setFilterCause('caso')}
                    style={{
                      padding: '0.2rem 0.55rem',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      borderRadius: '4px',
                      border: '1px solid var(--status-success-border)',
                      backgroundColor: filterCause === 'caso' ? 'var(--status-success)' : 'var(--status-success-bg)',
                      color: filterCause === 'caso' ? '#ffffff' : 'var(--status-success)',
                      cursor: 'pointer'
                    }}
                  >
                    Respaldadas por Caso (6)
                  </button>
                  <button
                    onClick={() => setFilterCause('verificar')}
                    style={{
                      padding: '0.2rem 0.55rem',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      borderRadius: '4px',
                      border: '1px solid var(--status-warning-border)',
                      backgroundColor: filterCause === 'verificar' ? 'var(--status-warning)' : 'var(--status-warning-bg)',
                      color: filterCause === 'verificar' ? '#ffffff' : 'var(--status-warning)',
                      cursor: 'pointer'
                    }}
                  >
                    Por Verificar (8)
                  </button>
                </div>
              </div>

              {/* DIBUJO LITERAL DE LA ESPINA DE PESCADO (SVG VECTORIAL PURO) */}
              <div style={{ flex: 1, border: '1.5px solid var(--border-light)', borderRadius: '10px', padding: '0.5rem', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 1020 460" style={{ width: '100%', height: '100%', maxHeight: '420px' }}>
                  <defs>
                    <marker id="fish-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#002b49" />
                    </marker>
                    <marker id="sub-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#005a9c" />
                    </marker>
                  </defs>

                  {/* ESPINA DORSAL CENTRAL */}
                  <line x1="30" y1="230" x2="795" y2="230" stroke="#002b49" strokeWidth="4" markerEnd="url(#fish-arrow)" />

                  {/* COLA DEL PEZ (Izquierda) */}
                  <polygon points="30,230 10,185 20,230 10,275" fill="#e2e8f0" stroke="#002b49" strokeWidth="2" />

                  {/* CABEZA DEL PEZ (Derecha) */}
                  <polygon points="795,145 990,230 795,315" fill="#fef2f2" stroke="#b91c1c" strokeWidth="2.5" />
                  
                  {/* OJO DEL PEZ */}
                  <circle cx="945" cy="210" r="6" fill="#991b1b" />
                  <circle cx="947" cy="208" r="2" fill="#ffffff" />

                  {/* TEXTO CABEZA DEL PEZ (PROBLEMA CENTRAL) */}
                  <text x="880" y="185" textAnchor="middle" fontSize="10" fontWeight="800" fill="#b91c1c" letterSpacing="0.05em">PROBLEMA CENTRAL</text>
                  <text x="880" y="240" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">RETRASOS DEL 30%</text>
                  <text x="880" y="255" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">Y REPROCESO DE PIEZAS</text>
                  <text x="880" y="280" textAnchor="middle" fontSize="9" fill="#64748b">(Efecto visible / Síntoma)</text>

                  {/* ======================================= */}
                  {/* ESPINAS SUPERIORES (3 HUESOS DIAGONALES) */}
                  {/* ======================================= */}

                  {/* Hueso Superior 1: MÉTODOS */}
                  <line x1="160" y1="230" x2="250" y2="40" stroke="#005a9c" strokeWidth="3" />
                  <rect x="200" y="20" width="100" height="26" rx="4" fill="#002b49" />
                  <text x="250" y="37" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">MÉTODOS</text>

                  {/* Causas Métodos */}
                  <g opacity={filterCause === 'verificar' ? 0.2 : 1}>
                    <line x1="110" y1="90" x2="225" y2="90" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="35" y="78" width="165" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="38" y="81" width="38" height="16" rx="2" fill="#dcfce7" />
                    <text x="57" y="93" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">CASO</text>
                    <text x="82" y="93" fontSize="9" fill="#1e293b">Consolidación manual a mano</text>
                  </g>

                  <g opacity={filterCause === 'caso' ? 0.2 : 1}>
                    <line x1="100" y1="140" x2="200" y2="140" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="25" y="128" width="170" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="28" y="131" width="50" height="16" rx="2" fill="#fef3c7" />
                    <text x="53" y="143" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">VERIFICAR</text>
                    <text x="84" y="143" fontSize="9" fill="#1e293b">Sin lista de chequeo formal</text>
                  </g>

                  {/* Hueso Superior 2: PERSONAS */}
                  <line x1="390" y1="230" x2="480" y2="40" stroke="#005a9c" strokeWidth="3" />
                  <rect x="430" y="20" width="105" height="26" rx="4" fill="#002b49" />
                  <text x="482" y="37" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">PERSONAS</text>

                  {/* Causas Personas */}
                  <g opacity={filterCause === 'verificar' ? 0.2 : 1}>
                    <line x1="330" y1="80" x2="460" y2="80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="260" y="68" width="170" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="263" y="71" width="38" height="16" rx="2" fill="#dcfce7" />
                    <text x="282" y="83" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">CASO</text>
                    <text x="307" y="83" fontSize="9" fill="#1e293b">Técnico único para todo</text>
                  </g>

                  <g opacity={filterCause === 'caso' ? 0.2 : 1}>
                    <line x1="320" y1="120" x2="440" y2="120" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="245" y="108" width="180" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="248" y="111" width="50" height="16" rx="2" fill="#fef3c7" />
                    <text x="273" y="123" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">VERIFICAR</text>
                    <text x="304" y="123" fontSize="9" fill="#1e293b">Vacíos de diseño 3D en alumnos</text>
                  </g>

                  <g opacity={filterCause === 'caso' ? 0.2 : 1}>
                    <line x1="310" y1="160" x2="420" y2="160" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="235" y="148" width="185" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="238" y="151" width="50" height="16" rx="2" fill="#fef3c7" />
                    <text x="263" y="163" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">VERIFICAR</text>
                    <text x="294" y="163" fontSize="9" fill="#1e293b">Docentes no coordinan fechas</text>
                  </g>

                  {/* Hueso Superior 3: MATERIALES */}
                  <line x1="620" y1="230" x2="710" y2="40" stroke="#005a9c" strokeWidth="3" />
                  <rect x="660" y="20" width="110" height="26" rx="4" fill="#002b49" />
                  <text x="715" y="37" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">MATERIALES</text>

                  {/* Causas Materiales */}
                  <g opacity={filterCause === 'verificar' ? 0.2 : 1}>
                    <line x1="560" y1="85" x2="690" y2="85" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="490" y="73" width="170" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="493" y="76" width="38" height="16" rx="2" fill="#dcfce7" />
                    <text x="512" y="88" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">CASO</text>
                    <text x="537" y="88" fontSize="9" fill="#1e293b">Material escogido no adecuado</text>
                  </g>

                  <g opacity={filterCause === 'caso' ? 0.2 : 1}>
                    <line x1="550" y1="130" x2="670" y2="130" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="475" y="118" width="180" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="478" y="121" width="50" height="16" rx="2" fill="#fef3c7" />
                    <text x="503" y="133" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">VERIFICAR</text>
                    <text x="534" y="133" fontSize="9" fill="#1e293b">Sin muestrario didáctico físico</text>
                  </g>

                  <g opacity={filterCause === 'caso' ? 0.2 : 1}>
                    <line x1="540" y1="170" x2="650" y2="170" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="465" y="158" width="185" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="468" y="161" width="50" height="16" rx="2" fill="#fef3c7" />
                    <text x="493" y="173" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">VERIFICAR</text>
                    <text x="524" y="173" fontSize="9" fill="#1e293b">Humedad en rollos de filamento</text>
                  </g>

                  {/* ======================================= */}
                  {/* ESPINAS INFERIORES (3 HUESOS DIAGONALES) */}
                  {/* ======================================= */}

                  {/* Hueso Inferior 1: CANAL Y PROGRAMACIÓN */}
                  <line x1="160" y1="230" x2="250" y2="420" stroke="#005a9c" strokeWidth="3" />
                  <rect x="180" y="415" width="145" height="26" rx="4" fill="#002b49" />
                  <text x="252" y="432" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#ffffff">CANAL / PROGRAMACIÓN</text>

                  {/* Causas Canal */}
                  <g opacity={filterCause === 'verificar' ? 0.2 : 1}>
                    <line x1="110" y1="285" x2="190" y2="285" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="25" y="273" width="175" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="28" y="276" width="38" height="16" rx="2" fill="#dcfce7" />
                    <text x="47" y="288" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">CASO</text>
                    <text x="72" y="288" fontSize="9" fill="#1e293b">Reservas por mensajes sueltos</text>
                  </g>

                  <g opacity={filterCause === 'caso' ? 0.2 : 1}>
                    <line x1="120" y1="340" x2="215" y2="340" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="35" y="328" width="180" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="38" y="331" width="50" height="16" rx="2" fill="#fef3c7" />
                    <text x="63" y="343" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">VERIFICAR</text>
                    <text x="94" y="343" fontSize="9" fill="#1e293b">Picos de entrega a fin de semestre</text>
                  </g>

                  {/* Hueso Inferior 2: EQUIPOS */}
                  <line x1="390" y1="230" x2="480" y2="420" stroke="#005a9c" strokeWidth="3" />
                  <rect x="430" y="415" width="105" height="26" rx="4" fill="#002b49" />
                  <text x="482" y="432" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">EQUIPOS</text>

                  {/* Causas Equipos */}
                  <g opacity={filterCause === 'verificar' ? 0.2 : 1}>
                    <line x1="330" y1="290" x2="425" y2="290" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="250" y="278" width="180" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="253" y="281" width="38" height="16" rx="2" fill="#dcfce7" />
                    <text x="272" y="293" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">CASO</text>
                    <text x="297" y="293" fontSize="9" fill="#1e293b">Máquinas saturadas repitiendo</text>
                  </g>

                  <g opacity={filterCause === 'caso' ? 0.2 : 1}>
                    <line x1="340" y1="350" x2="450" y2="350" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="260" y="338" width="190" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="263" y="341" width="50" height="16" rx="2" fill="#fef3c7" />
                    <text x="288" y="353" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">VERIFICAR</text>
                    <text x="319" y="353" fontSize="9" fill="#1e293b">Descalibración y falta mantención</text>
                  </g>

                  {/* Hueso Inferior 3: MEDICIÓN Y REVISIÓN */}
                  <line x1="620" y1="230" x2="710" y2="420" stroke="#005a9c" strokeWidth="3" />
                  <rect x="645" y="415" width="140" height="26" rx="4" fill="#002b49" />
                  <text x="715" y="432" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#ffffff">MEDICIÓN / REVISIÓN</text>

                  {/* Causas Medición */}
                  <g opacity={filterCause === 'verificar' ? 0.2 : 1}>
                    <line x1="560" y1="290" x2="655" y2="290" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="475" y="278" width="185" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="478" y="281" width="38" height="16" rx="2" fill="#dcfce7" />
                    <text x="497" y="293" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">CASO</text>
                    <text x="522" y="293" fontSize="9" fill="#1e293b">Archivos con dimensiones malas</text>
                  </g>

                  <g opacity={filterCause === 'caso' ? 0.2 : 1}>
                    <line x1="570" y1="350" x2="680" y2="350" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#sub-arrow)" />
                    <rect x="495" y="338" width="185" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                    <rect x="498" y="341" width="50" height="16" rx="2" fill="#fef3c7" />
                    <text x="523" y="353" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">VERIFICAR</text>
                    <text x="554" y="353" fontSize="9" fill="#1e293b">Sin software de seguimiento turnos</text>
                  </g>
                </svg>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 8: PUNTO 3 - CLASIFICACIÓN DE LAS 14 CAUSAS */}
          {currentSlide === 8 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Punto 3 • Evidencia de Causas
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.2rem' }}>
                  14 Causas Raíz: Respaldadas vs Por Verificar
                </h2>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  Marcadas rigurosamente según los datos explícitos del caso e hipótesis para verificación en campo
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flex: 1 }}>
                <div style={{ border: '1px solid var(--status-success-border)', borderRadius: '10px', padding: '1.4rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--status-success)' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--status-success)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                    <CheckCircle2 size={18} /> 6 Causas Respaldadas por el Caso (Datos Explícitos)
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.85rem' }}>
                    <div><strong>1. Métodos:</strong> El técnico consolida las solicitudes manualmente.</div>
                    <div><strong>2. Canal:</strong> Los estudiantes reservan equipos por mensajes.</div>
                    <div><strong>3. Medición:</strong> Los archivos tienen dimensiones incorrectas.</div>
                    <div><strong>4. Materiales:</strong> El material escogido por el alumno no es adecuado.</div>
                    <div><strong>5. Personas:</strong> Un único técnico atiende a 80 solicitudes y todas las máquinas.</div>
                    <div><strong>6. Equipos:</strong> Las máquinas se saturan teniendo que fabricar piezas de nuevo.</div>
                  </div>
                </div>

                <div style={{ border: '1px solid var(--status-warning-border)', borderRadius: '10px', padding: '1.4rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--status-warning)' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--status-warning)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                    <HelpCircle size={18} /> 8 Causas que Deben Verificarse (Hipótesis)
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.42rem', fontSize: '0.82rem' }}>
                    <div>• Existencia de una lista formal de chequeo antes de fabricar.</div>
                    <div>• Concentración de pedidos en semanas de exámenes finales.</div>
                    <div>• Ausencia de un software para que el alumno rastree su turno.</div>
                    <div>• Falta de un muestrario didáctico de materiales en recepción.</div>
                    <div>• Presencia de humedad en bobinas de filamento abiertas.</div>
                    <div>• Nivel de formación previa en diseño 3D en las materias.</div>
                    <div>• Falta de coordinación de los docentes con el laboratorio.</div>
                    <div>• Frecuencia de calibración de camas y mantenimiento preventivo.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 9: PUNTO 4 - PROPUESTAS DE MEJORA */}
          {currentSlide === 9 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Punto 4 • Propuestas de Solución
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.2rem' }}>
                  Dos Acciones de Mejora Sustentadas
                </h2>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  Responsable, indicador de seguimiento y efecto secundario con su mitigación
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flex: 1 }}>
                <div style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.35rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--unicom-navy)' }}>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--unicom-navy)', marginBottom: '0.55rem' }}>
                    Acción 1: Formulario Digital con Requisitos Obligatorios
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    <div>
                      <strong>Descripción:</strong> Reemplazar los chats por un formulario estándar (Google Forms / Microsoft 365) con campos obligatorios: dimensiones en mm, escala 1:1 verificada, material y formato STL/DXF.
                    </div>
                    <div>
                      <strong>Responsable:</strong> Técnico del laboratorio con apoyo del área de Sistemas.
                    </div>
                    <div style={{ backgroundColor: 'var(--unicom-light)', padding: '0.55rem 0.8rem', borderRadius: '4px' }}>
                      <strong>Indicador:</strong> <code>% Reprocesos = (Piezas Repetidas / Total Solicitudes) × 100</code><br />
                      <strong style={{ color: 'var(--status-success)' }}>Meta:</strong> Reducir a menos del 3% en dos meses.
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <strong>Efecto secundario y mitigación:</strong> Resistencia inicial de estudiantes; se mitiga con una guía infográfica de 1 página sobre cómo exportar a escala real.
                    </div>
                  </div>
                </div>

                <div style={{ border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.35rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--unicom-blue)' }}>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--unicom-blue)', marginBottom: '0.55rem' }}>
                    Acción 2: Muestrario Físico y Coordinación Docente
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    <div>
                      <strong>Descripción:</strong> Panel físico didáctico con muestras reales de PLA, ABS, PETG, Acrílico y MDF con fichas de resistencia; sumado a acuerdos con profesores para escalonar fechas y revisar escalas en clase.
                    </div>
                    <div>
                      <strong>Responsables:</strong> Profesores de asignaturas prácticas y Técnico.
                    </div>
                    <div style={{ backgroundColor: 'var(--unicom-light)', padding: '0.55rem 0.8rem', borderRadius: '4px' }}>
                      <strong>Indicador:</strong> <code>% A Tiempo = (Entregas a Tiempo / Total Solicitudes) × 100</code><br />
                      <strong style={{ color: 'var(--status-success)' }}>Meta:</strong> Subir del 70% actual a más del 95%.
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <strong>Efecto secundario y mitigación:</strong> Falta de tiempo docente; se mitiga fijando el cronograma desde decanatura a inicio de semestre.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DIAPOSITIVA 10: CONCLUSIÓN FINAL Y DICTAMEN DE COMPRA */}
          {currentSlide === 10 && (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--unicom-blue)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Conclusión Estratégica
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--unicom-navy)', marginTop: '0.2rem' }}>
                  Dictamen: ¿Comprar otra Impresora 3D en este Momento?
                </h2>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  Respuesta sustentada a la propuesta inicial del caso
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flex: 1 }}>
                <div style={{ border: '1px solid var(--status-danger-border)', borderRadius: '10px', padding: '1.6rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--status-danger)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--status-danger)', textTransform: 'uppercase' }}>
                    DECISIÓN EN EL CORTO PLAZO
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 700, color: 'var(--status-danger)', lineHeight: 1, margin: '0.4rem 0' }}>
                    ¡NO!
                  </div>
                  <div style={{ textAlign: 'left', fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    <p>• <strong>No ataca la causa raíz:</strong> Las máquinas no están lentas; se la pasan repitiendo piezas defectuosas.</p>
                    <p>• <strong>Sobrecarga al técnico:</strong> Tendría más turnos que anotar a mano y menos tiempo para calibrar.</p>
                    <p>• <strong>Desperdicio económico:</strong> La máquina solo imprimiría basura a mayor velocidad.</p>
                  </div>
                </div>

                <div style={{ border: '1px solid var(--status-success-border)', borderRadius: '10px', padding: '1.6rem', backgroundColor: '#ffffff', borderTop: '4px solid var(--status-success)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--status-success)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                    <CheckCircle2 size={19} /> ¿Cuándo sí se debe comprar?
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.86rem', lineHeight: 1.4 }}>
                    <div style={{ backgroundColor: 'var(--status-success-bg)', padding: '0.7rem', borderRadius: '6px', borderLeft: '3px solid var(--status-success)' }}>
                      <strong>1. Formulario digital activo:</strong> Cero solicitudes informales por chat.
                    </div>
                    <div style={{ backgroundColor: 'var(--status-success-bg)', padding: '0.7rem', borderRadius: '6px', borderLeft: '3px solid var(--status-success)' }}>
                      <strong>2. Reprocesos reducidos a &lt; 3%:</strong> Piezas ingresando con medidas exactas y material correcto.
                    </div>
                    <div style={{ backgroundColor: 'var(--status-success-bg)', padding: '0.7rem', borderRadius: '6px', borderLeft: '3px solid var(--status-success)' }}>
                      <strong>3. Capacidad real agotada:</strong> Las máquinas al 100% en piezas buenas no alcanzan para la demanda.
                    </div>
                  </div>
                  <div style={{ marginTop: '1.1rem', textAlign: 'center', fontSize: '0.88rem', fontWeight: 700, color: 'var(--unicom-navy)' }}>
                    «Primero optimizar el flujo; luego expandir la capacidad física»
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER NAVEGACIÓN */}
      <footer
        className="no-print"
        style={{
          height: '58px',
          backgroundColor: '#ffffff',
          borderTop: '1.5px solid var(--border-light)',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '220px', height: '6px', backgroundColor: 'var(--border-light)', borderRadius: '999px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                backgroundColor: 'var(--unicom-navy)',
                transition: 'width 0.25s ease'
              }}
            />
          </div>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            Diapositiva {currentSlide + 1} de {totalSlides}
          </span>
        </div>

        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Grupo 3 • <strong>Daniela Rojas • Cristian Ávila • Jhon Sebastián Potosí Campo</strong>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.9rem',
              borderRadius: '6px',
              border: '1px solid var(--border-light)',
              backgroundColor: '#ffffff',
              color: currentSlide === 0 ? 'var(--text-light)' : 'var(--text-main)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            <ChevronLeft size={16} /> Anterior
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 1rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: currentSlide === totalSlides - 1 ? 'var(--border-medium)' : 'var(--unicom-navy)',
              color: '#ffffff',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Siguiente <ChevronRight size={16} />
          </button>
        </div>
      </footer>
    </div>
  );
}
