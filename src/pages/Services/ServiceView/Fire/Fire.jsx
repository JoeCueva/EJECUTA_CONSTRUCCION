import '../../../../styles/Fire.css';
import { Link } from 'react-router-dom';
import ServicioContraincendio from '../../../../assets/img/imagenContraincendio.jpg';
import Contraincendio1 from '../../../../assets/icons/iconContraincendio1.png';
import Contraincendio2 from '../../../../assets/icons/iconContraincendio2.png';
import Contraincendio3 from '../../../../assets/icons/iconContraincendio3.png';
import Contraincendio4 from '../../../../assets/icons/iconContraincendio4.png';

const Fire = () => {
    return (
        <>

            {/* Hero Section */}
            <section className="fire-hero">
                <div className="fire-hero-overlay">
                    <div className="fire-hero-content">
                        <span className='fire-alert-badge'>SERVICIO CONTRAINCENDIO</span>
                        <h1>Sistemas contra incendios que salvan vidas y protegen activos</h1>
                        <p className="fire-hero-description">
                            Diseñamos, instalamos y mantenemos sistemas de detección, alarma y supresión
                            de incendios certificados bajo normativas NFPA, UL y FM Global, garantizando
                            la máxima protección para personas, infraestructura y continuidad operacional.
                        </p>
                        <div className="fire-hero-metrics">
                            <div className="metric-box">
                                <div className="metric-value">0</div>
                                <div className="metric-label">Fatalidades en nuestros proyectos</div>
                            </div>
                            <div className="metric-box">
                                <div className="metric-value">1000+</div>
                                <div className="metric-label">Sistemas instalados y operativos</div>
                            </div>
                            <div className="metric-box">
                                <div className="metric-value">24/7</div>
                                <div className="metric-label">Servicio de emergencias</div>
                            </div>
                            <div className="metric-box">
                                <div className="metric-value">100%</div>
                                <div className="metric-label">Certificaciones aprobadas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="fire-intro">
                <div className="fire-intro-container">
                    <div className="fire-intro-content">
                        <span className="section-labels">INGENIERÍA DE PROTECCIÓN CONTRA INCENDIOS</span>
                        <h2>Soluciones integrales certificadas bajo los más altos estándares internacionales</h2>

                        <div className="intro-primary-text">
                            <p className="intro-lead">
                                En EJECUTA somos especialistas en el diseño, instalación, comisionamiento
                                y mantenimiento de sistemas de protección contra incendios para edificaciones
                                comerciales, industriales, hospitalarias, hoteleras y de alta complejidad técnica.
                            </p>
                            <p>
                                Nuestro equipo de ingenieros de protección contra incendios (FPE) certificados
                                gestiona cada proyecto aplicando metodologías basadas en análisis de riesgos,
                                cálculos hidráulicos precisos y cumplimiento estricto de códigos NFPA (National
                                Fire Protection Association), UL (Underwriters Laboratories) y FM Global.
                            </p>
                            <p>
                                Trabajamos con tecnología de vanguardia en detección temprana, supresión
                                automática y control de humos, integrando sistemas inteligentes que minimizan
                                falsas alarmas, optimizan tiempos de respuesta y garantizan la evacuación
                                segura de ocupantes en situaciones de emergencia real.
                            </p>
                        </div>

                        <div className="intro-certifications">
                            <div className="cert-badge">
                                <div className="cert-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="cert-text">
                                    <strong>NFPA Certified</strong>
                                    <span>Diseño bajo normas NFPA 13, 14, 20, 72, 101</span>
                                </div>
                            </div>

                            <div className="cert-badge">
                                <div className="cert-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="cert-text">
                                    <strong>UL Listed Equipment</strong>
                                    <span>Equipos y componentes certificados UL</span>
                                </div>
                            </div>

                            <div className="cert-badge">
                                <div className="cert-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="cert-text">
                                    <strong>FM Approved</strong>
                                    <span>Sistemas aprobados por FM Global</span>
                                </div>
                            </div>

                            <div className="cert-badge">
                                <div className="cert-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="cert-text">
                                    <strong>ISO 9001:2015</strong>
                                    <span>Sistema de gestión de calidad certificado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fire-intro-visual">
                        <img
                            src={ServicioContraincendio}
                            alt="Sistema de rociadores contra incendios"
                        />
                        <div className="visual-overlay">
                            <div className="overlay-stat">
                                <div className="stat-info">
                                    <strong>Instalacion de tuberias Contra Incendio</strong>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Systems Section */}
            <section className="fire-systems">
                <div className="fire-systems-container">
                    <div className="systems-header">
                        <span className="section-label">SISTEMAS DE PROTECCIÓN ACTIVA</span>
                        <h2>Tecnologías de supresión y detección para cada nivel de riesgo</h2>
                        <p className="systems-intro">
                            Implementamos sistemas de protección contra incendios basados en agua, gas,
                            espuma y agentes limpios, seleccionados según análisis de ocupación,
                            clasificación de riesgo y activos a proteger.
                        </p>
                    </div>

                    <div className="systems-grid">
                        <div className="system-item system-sprinkler">
                            <div className="system-number">01</div>
                            <div className="system-header">
                                <div className="system-icon">
                                    {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
                                    </svg> */}
                                    <img src={Contraincendio1} alt="sistema rociador" />
                                </div>
                                <h3>Sistemas de Rociadores Automáticos</h3>
                                <span className="risk-tag">Riesgo ligero, ordinario y alto</span>
                            </div>
                            <ul className="system-features">
                                <li>
                                    <strong>Rociadores de tubería húmeda (Wet Pipe):</strong>
                                    <span>Sistemas presurizados con agua permanente, respuesta inmediata ante calor. Aplicación: oficinas, comercios, hoteles, residencias.</span>
                                </li>
                                <li>
                                    <strong>Rociadores de tubería seca (Dry Pipe):</strong>
                                    <span>Tuberías presurizadas con aire/nitrógeno, descarga retardada. Para ambientes no calefaccionados o expuestos a congelamiento.</span>
                                </li>
                                <li>
                                    <strong>Sistemas de pre-acción (Pre-Action):</strong>
                                    <span>Doble interlock: detección + rociador. Protección para áreas sensibles al agua (data centers, museos, archivos).</span>
                                </li>
                                <li>
                                    <strong>Sistemas de diluvio (Deluge):</strong>
                                    <span>Descarga simultánea de todos los rociadores en zona. Para riesgos especiales: hangares, plantas químicas, transformadores.</span>
                                </li>
                                <li>
                                    <strong>Rociadores ESFR (Early Suppression Fast Response):</strong>
                                    <span>Alta densidad de descarga para supresión rápida en almacenes de gran altura (hasta 13.7m) sin necesidad de rociadores in-rack.</span>
                                </li>
                                <li>
                                    <strong>Diseño hidráulico certificado:</strong>
                                    <span>Cálculo de densidades, presiones, diámetros y caudales según NFPA 13 con software AutoSPRINK o HydraCAD.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="system-item system-detection">
                            <div className="system-number">02</div>
                            <div className="system-header">
                                <div className="system-icon">
                                    <img src={Contraincendio2} alt="Deteccion alarma" />
                                </div>
                                <h3>Detección y Alarma Contra Incendios</h3>
                                <span className="risk-tag">Detección temprana inteligente</span>
                            </div>
                            <ul className="system-features">
                                <li>
                                    <strong>Centrales de detección direccionables:</strong>
                                    <span>Paneles analógicos de última generación con identificación punto a punto, capacidad 1-4 lazos, protocolo abierto y comunicación IP.</span>
                                </li>
                                <li>
                                    <strong>Detectores fotoeléctricos de humo:</strong>
                                    <span>Sensor óptico de dispersión de luz, alta sensibilidad en fuegos de combustión lenta. Certificación UL, FM y VdS.</span>
                                </li>
                                <li>
                                    <strong>Detectores iónicos y térmicos:</strong>
                                    <span>Sensores de ionización para fuegos rápidos y detectores de temperatura fija/tasa de elevación para cocinas y áreas industriales.</span>
                                </li>
                                <li>
                                    <strong>Detectores lineales de haz y aspiración (VESDA):</strong>
                                    <span>Detección ultratemprana mediante láser reflejado o muestreo de aire continuo. Ideal para techos altos, áreas críticas y espacios ocultos.</span>
                                </li>
                                <li>
                                    <strong>Pulsadores manuales y estaciones de alarma:</strong>
                                    <span>Estaciones de acción simple o doble con caja metálica, instalación a 1.2m del piso, máximo 60m entre puntos según NFPA 72.</span>
                                </li>
                                <li>
                                    <strong>Notificación audiovisual sincronizada:</strong>
                                    <span>Sirenas de 90dB mínimo, strobes de alta intensidad, mensajes de voz evacuación y sistemas mass notification para grandes complejos.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="system-item system-suppression">
                            <div className="system-number">03</div>
                            <div className="system-header">
                                <div className="system-icon">
                                    <img src={Contraincendio3} alt="supresion" />
                                </div>
                                <h3>Supresión con Agentes Limpios y Gases</h3>
                                <span className="risk-tag">Protección sin daño colateral</span>
                            </div>
                            <ul className="system-features">
                                <li>
                                    <strong>Sistemas FM-200 (HFC-227ea):</strong>
                                    <span>Gas halogenado de descarga total, supresión en 10 segundos, cero residuos. Para data centers, salas de control, telecomunicaciones.</span>
                                </li>
                                <li>
                                    <strong>Sistemas NOVEC 1230:</strong>
                                    <span>Agente limpio ecológico (ODP=0, GWP=1), seguro para ocupantes, tecnología de última generación con menor huella ambiental.</span>
                                </li>
                                <li>
                                    <strong>Sistemas CO2 de alta y baja presión:</strong>
                                    <span>Dióxido de carbono para riesgos clase B y C, descarga local o inundación total. Aplicación: bóvedas, cuartos de máquinas, transformadores.</span>
                                </li>
                                <li>
                                    <strong>Sistemas de gas inerte (IG-55, IG-541):</strong>
                                    <span>Mezclas de nitrógeno-argón-CO2, reducción de oxígeno por dilución, seguro para humanos en áreas ocupadas durante descarga.</span>
                                </li>
                                <li>
                                    <strong>Sistemas de niebla de agua (Water Mist):</strong>
                                    <span>Gotas ultra-finas de alta presión (80-200 bar), enfriamiento rápido y desplazamiento de oxígeno. Menor daño por agua que sprinklers.</span>
                                </li>
                                <li>
                                    <strong>Cálculo de concentración y tiempos de descarga:</strong>
                                    <span>Dimensionamiento de cilindros, boquillas y manifolds según volumen de recinto, hermeticidad y factores de seguridad NFPA 2001.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="system-item system-hydrants">
                            <div className="system-number">04</div>
                            <div className="system-header">
                                <div className="system-icon">
                                    <img src={Contraincendio4} alt="redes hidrante" />
                                </div>
                                <h3>Redes de Hidrantes y Gabinetes</h3>
                                <span className="risk-tag">Primera línea de defensa manual</span>
                            </div>
                            <ul className="system-features">
                                <li>
                                    <strong>Gabinetes contraincendios tipo I y II:</strong>
                                    <span>Gabinetes metálicos con puerta de vidrio, manguera 1½" x 30m, pitón chorro/neblina, válvula angular bronce. Distancia máxima 60m NFPA 14.</span>
                                </li>
                                <li>
                                    <strong>Hidrantes de columna y pared:</strong>
                                    <span>Conexiones Storz 2½" y NST, válvula de apertura rápida, pintura roja anticorrosiva. Presión mínima 65 PSI, caudal 500 GPM por hidrante.</span>
                                </li>
                                <li>
                                    <strong>Sistemas de bombeo principal y jockey:</strong>
                                    <span>Bombas centrífugas acopladas a motor eléctrico y diésel de respaldo, arranque automático por presostatos, controlador NFPA 20 listado.</span>
                                </li>
                                <li>
                                    <strong>Tuberías de acero Schedule 40 pintadas:</strong>
                                    <span>Red mallada o árbol con tuberías SCH 40 ASTM A53, uniones ranuradas Victaulic, soportería cada 3m, color rojo señalización.</span>
                                </li>
                                <li>
                                    <strong>Siamesas de inyección bomberil:</strong>
                                    <span>Conexión dual 2½" NST en fachada, check valve interno, tapones con cadena, señalización reflectiva para cuerpo de bomberos.</span>
                                </li>
                                <li>
                                    <strong>Tanques de reserva y cisternas:</strong>
                                    <span>Almacenamiento exclusivo para incendios según cálculo de demanda: volumen mínimo = GPM x tiempo (90-120 min), compartimentado.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="fire-services">
                <div className="fire-services-container">
                    <span className="section-label">SERVICIOS ESPECIALIZADOS</span>
                    <h2>Gestión integral del ciclo de vida de sistemas contra incendios</h2>

                    <div className="services-columns">
                        <div className="service-column">
                            <div className="column-header">
                                <h3>Ingeniería y Diseño</h3>
                                <div className="header-line"></div>
                            </div>
                            <ul className="service-list">
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Análisis de riesgos y ocupación:</strong>
                                        <p>Evaluación técnica de amenazas, clasificación NFPA, modelamiento de escenarios de fuego y tiempos de evacuación con software FDS y Pathfinder.</p>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Ingeniería de detalle certificada:</strong>
                                        <p>Planos isométricos, diagramas unifilares, memorias de cálculo hidráulico, especificaciones técnicas y metrados validados por ingeniero FPE.</p>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Modelamiento BIM y coordinación 3D:</strong>
                                        <p>Diseño en Revit MEP con familias certificadas, detección de interferencias clash detection y coordinación multidisciplinaria previa a obra.</p>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Revisión de proyectos y peer review:</strong>
                                        <p>Auditoría técnica de diseños existentes, identificación de no conformidades con códigos NFPA/IBC y recomendaciones de mejora ingenieril.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="service-column">
                            <div className="column-header">
                                <h3>Instalación y Comisionamiento</h3>
                                <div className="header-line"></div>
                            </div>
                            <ul className="service-list">
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Instalación por personal certificado NICET:</strong>
                                        <p>Técnicos con certificación en instalación de sistemas de supresión, detección y alarma, supervisión ingenieril permanente en campo.</p>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Protocolos de pruebas hidrostáticas:</strong>
                                        <p>Pruebas a 200 PSI durante 2 horas, verificación de hermeticidad en tuberías de rociadores, gabinetes e hidrantes con certificado firmado.</p>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Comisionamiento funcional completo:</strong>
                                        <p>Pruebas de flujo, presión, densidad, tiempos de descarga, alcance de detectores, sonoridad de alarmas y simulacros de activación real.</p>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Integración con sistemas BMS y seguridad:</strong>
                                        <p>Conexión de paneles de alarma con sistemas de gestión de edificios, cámaras de seguridad, control de accesos y monitoreo remoto 24/7.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="service-column">
                            <div className="column-header">
                                <h3>Mantenimiento y Cumplimiento</h3>
                                <div className="header-line"></div>
                            </div>
                            <ul className="service-list">
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Inspecciones ITM programadas:</strong>
                                        <p>Programa de inspección (I), prueba (T) y mantenimiento (M) según NFPA 25: semanal, mensual, trimestral, semestral y anual con reportes digitales.</p>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Pruebas anuales de bombas y válvulas:</strong>
                                        <p>Flow test de bombas, prueba de válvulas de retención, inspección de válvulas de control, medición de presiones con registros certificados.</p>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Recarga y reemplazo de cilindros de agente:</strong>
                                        <p>Pesaje y recarga de cilindros FM-200, CO2, NOVEC, verificación de integridad de válvulas, manómetros y sistemas de actuación.</p>
                                    </div>
                                </li>
                                <li>
                                    {/* <div className="service-icon">◆</div> */}
                                    <div className="service-content">
                                        <strong>Soporte para certificaciones y aseguradoras:</strong>
                                        <p>Gestión de conformidad ante Defensa Civil, Indeci, compañías de seguros y auditorías FM Global para reducción de primas.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="fire-vision">
                <div className="fire-vision-overlay">
                    <div className="fire-vision-content">
                        <span className="vision-label">COMPROMISO CON LA SEGURIDAD DE VIDA</span>
                        <h2>Sistemas diseñados para funcionar cuando más se necesitan</h2>
                        <p>
                            La protección contra incendios no es un lujo, es una responsabilidad legal,
                            moral y económica. Cada sistema que instalamos es diseñado bajo el principio
                            de "fallo seguro", con redundancias calculadas, componentes certificados y
                            pruebas exhaustivas que garantizan activación inmediata ante emergencia real.
                        </p>
                        <div className="vision-stats">
                            <div className="vision-stat-item">
                                <div className="stat-circle">
                                    <span>100%</span>
                                </div>
                                <p>Sistemas aprobados en primera inspección</p>
                            </div>
                            <div className="vision-stat-item">
                                <div className="stat-circle">
                                    <span>&lt;5s</span>
                                </div>
                                <p>Tiempo de activación de rociadores ante calor</p>
                            </div>
                            <div className="vision-stat-item">
                                <div className="stat-circle">
                                    <span>99.9%</span>
                                </div>
                                <p>Confiabilidad operativa de sistemas instalados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="fire-cta">
                <div className="fire-cta-container">
                    <div className="cta-content">
                        <h2>¿Su edificio cuenta con protección contra incendios certificada?</h2>
                        <p>
                            Realizamos auditorías técnicas gratuitas para evaluar el estado de sus
                            sistemas de protección, identificar no conformidades con códigos vigentes
                            y proponer soluciones que garanticen el cumplimiento normativo y la
                            seguridad de sus ocupantes.
                        </p>
                        <Link to="/contactos">
                        <button className="cta-button">Solicitar auditoría técnica sin costo</button>
                        </Link>
                        <p className="cta-note">
                            * Incluye reporte técnico con observaciones y recomendaciones prioritarias
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Fire;