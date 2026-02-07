import '../../../../styles/Communications.css';
import imagenInstalacionComunicaciones from '../../../../assets/img/imagenComunicaciones.jpg';
import { useState } from 'react';

const Communications = () => {

    const [activeTab, setActiveTab] = useState(1);

    const servicesData = [
        {
            id: 1,
            title: "Infraestructura de Red y Cableado",
            shortTitle: "Cableado",
            number: "01",
            description: "Diseño e instalación de infraestructura de cableado estructurado certificado:",
            items: [
                { label: "Cableado categoría 6A y 7", desc: "Certificación para 10 Gigabit Ethernet con garantía de 25 años de fabricante." },
                { label: "Fibra óptica monomodo y multimodo", desc: "Enlaces de alta velocidad con certificación OTDR y conectores LC/SC pulidos." },
                { label: "Rack y gabinetes profesionales", desc: "Sistemas de organización 19\" con gestión térmica y PDU inteligentes." },
                { label: "Canalizaciones y bandejas portacables", desc: "Rutas metálicas certificadas UL, escalerillas y canaletas según normativa." },
                { label: "Etiquetado y documentación", desc: "Sistema de identificación completo con planos as-built y certificados de prueba." }
            ]
        },
        {
            id: 2,
            title: "Sistemas de Seguridad Electrónica",
            shortTitle: "Seguridad",
            number: "02",
            description: "Soluciones integradas de videovigilancia, control de acceso y detección:",
            items: [
                { label: "CCTV IP de alta resolución", desc: "Cámaras 4K con analítica de video, reconocimiento facial y grabación en NVR." },
                { label: "Control de acceso biométrico", desc: "Sistemas con huella dactilar, tarjetas RFID y reconocimiento facial integrado." },
                { label: "Detección de intrusos perimetral", desc: "Sensores PIR, barreras infrarrojas y cercas electrificadas monitoreadas." },
                { label: "Alarmas contra incendio direccionables", desc: "Paneles inteligentes con detección de humo, calor y notificación a centrales." },
                { label: "Integración con plataformas VMS", desc: "Software de gestión unificada para monitoreo centralizado y respuesta automática." }
            ]
        },
        {
            id: 3,
            title: "Telecomunicaciones y Networking",
            shortTitle: "Telecom",
            number: "03",
            description: "Diseño y despliegue de redes de comunicación empresarial robustas:",
            items: [
                { label: "Switches y routers empresariales", desc: "Equipos Cisco, HP Aruba con VLAN, QoS, PoE+ y gestión centralizada." },
                { label: "Redes Wi-Fi de alto rendimiento", desc: "Access Points Wi-Fi 6/6E con roaming inteligente y controladores en la nube." },
                { label: "Telefonía IP y contact center", desc: "PBX virtual, softphones, grabación de llamadas y enrutamiento inteligente." },
                { label: "Enlaces de datos dedicados", desc: "Conexiones de fibra óptica, radioenlaces punto a punto y VPN empresariales." },
                { label: "Monitoreo y gestión NOC", desc: "Supervisión 24/7 con herramientas SNMP, syslog y dashboards en tiempo real." }
            ]
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="telecommunications-infrastructure-hero-banner-section">
                <div className="telecommunications-infrastructure-hero-background-overlay-wrapper">
                    <div className="telecommunications-infrastructure-hero-primary-content-container">
                        <span className="telecommunications-infrastructure-hero-category-label-badge">SISTEMAS DE COMUNICACIONES</span>
                        <h1>Infraestructura digital para conectividad empresarial avanzada</h1>
                        <p className="telecommunications-infrastructure-hero-descriptive-paragraph-text">
                            Diseñamos e implementamos soluciones integrales de comunicaciones, redes de datos,
                            seguridad electrónica y sistemas de automatización con tecnología de última generación,
                            garantizando conectividad confiable, seguridad perimetral y escalabilidad futura.
                        </p>
                        <div className="telecommunications-infrastructure-hero-statistics-metrics-grid">
                            <div className="telecommunications-infrastructure-individual-statistic-item-block">
                                <span className="telecommunications-infrastructure-statistic-numerical-value-display">500+</span>
                                <span className="telecommunications-infrastructure-statistic-descriptive-label-text">Proyectos implementados</span>
                            </div>
                            <div className="telecommunications-infrastructure-individual-statistic-item-block">
                                <span className="telecommunications-infrastructure-statistic-numerical-value-display">99.9%</span>
                                <span className="telecommunications-infrastructure-statistic-descriptive-label-text">Uptime garantizado</span>
                            </div>
                            <div className="telecommunications-infrastructure-individual-statistic-item-block">
                                <span className="telecommunications-infrastructure-statistic-numerical-value-display">10Gbps</span>
                                <span className="telecommunications-infrastructure-statistic-descriptive-label-text">Velocidad de transmisión</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="telecommunications-infrastructure-introduction-presentation-section">
                <div className="telecommunications-infrastructure-introduction-main-content-wrapper">
                    <div className="telecommunications-infrastructure-introduction-featured-image-container">
                        <img
                            src={imagenInstalacionComunicaciones}
                            alt="Instalación de sistemas de comunicaciones profesionales"
                        />
                        <div className="telecommunications-infrastructure-introduction-certification-badge-element">
                            <span className="telecommunications-infrastructure-certification-badge-icon-symbol">✓</span>
                            <span>Certificado TIA/EIA 568</span>
                        </div>
                    </div>

                    <div className="telecommunications-infrastructure-introduction-textual-content-area">
                        <span className="telecommunications-infrastructure-global-section-category-label">INGENIERÍA DE COMUNICACIONES</span>
                        <h2>Soluciones tecnológicas diseñadas para la era digital</h2>
                        <p className="telecommunications-infrastructure-introduction-primary-lead-paragraph">
                            En EJECUTA desarrollamos proyectos de comunicaciones aplicando estándares
                            internacionales de cableado estructurado, ciberseguridad y alta disponibilidad,
                            desde el diseño de arquitectura de red hasta la certificación y transferencia técnica.
                        </p>

                        <div className="telecommunications-infrastructure-introduction-secondary-text-block">
                            <p>
                                Nuestro equipo especializado gestiona cada proyecto con control riguroso de
                                calidad, pruebas de certificación Fluke y documentación técnica completa.
                                Trabajamos con fabricantes líderes del mercado y aplicamos normativas
                                TIA/EIA, ISO/IEC y estándares IEEE vigentes.
                            </p>
                            <p>
                                Implementamos arquitecturas de red convergente, sistemas de seguridad
                                perimetral inteligente y soluciones de comunicación unificada que optimizan
                                la productividad empresarial, reducen costos operativos y garantizan
                                continuidad del negocio con SLA del 99.9% de disponibilidad.
                            </p>
                        </div>

                        <div className="telecommunications-infrastructure-introduction-key-highlights-grid">
                            <div className="telecommunications-infrastructure-individual-highlight-feature-box">
                                <div className="telecommunications-infrastructure-highlight-sequential-number-display">01</div>
                                <div className="telecommunications-infrastructure-highlight-textual-content-wrapper">
                                    <h4>Diseño de Red Certificado</h4>
                                    <p>Arquitectura de red escalable con redundancia, segmentación VLAN y balanceo de carga según mejores prácticas de la industria.</p>
                                </div>
                            </div>

                            <div className="telecommunications-infrastructure-individual-highlight-feature-box">
                                <div className="telecommunications-infrastructure-highlight-sequential-number-display">02</div>
                                <div className="telecommunications-infrastructure-highlight-textual-content-wrapper">
                                    <h4>Equipamiento Empresarial</h4>
                                    <p>Switches, routers, firewalls y access points de marcas líderes con garantía extendida y soporte técnico especializado.</p>
                                </div>
                            </div>

                            <div className="telecommunications-infrastructure-individual-highlight-feature-box">
                                <div className="telecommunications-infrastructure-highlight-sequential-number-display">03</div>
                                <div className="telecommunications-infrastructure-highlight-textual-content-wrapper">
                                    <h4>Certificación de Cableado</h4>
                                    <p>Pruebas con equipos Fluke DSX-8000, certificados de performance para cada enlace y garantía de 25 años del sistema.</p>
                                </div>
                            </div>

                            <div className="telecommunications-infrastructure-individual-highlight-feature-box">
                                <div className="telecommunications-infrastructure-highlight-sequential-number-display">04</div>
                                <div className="telecommunications-infrastructure-highlight-textual-content-wrapper">
                                    <h4>Soporte Técnico 24/7</h4>
                                    <p>Mesa de ayuda, monitoreo remoto NOC, mantenimiento preventivo y respuesta inmediata ante incidencias críticas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Systems Section */}
            <section className="telecommunications-infrastructure-specialized-systems-showcase-section">
                <div className="telecommunications-infrastructure-specialized-systems-main-container">
                    <div className="telecommunications-infrastructure-systems-section-header-wrapper">
                        <span className="telecommunications-infrastructure-global-section-category-label">SOLUCIONES TECNOLÓGICAS</span>
                        <h2>Sistemas de comunicaciones para infraestructura digital empresarial</h2>
                    </div>

                    <div className="telecommunications-infrastructure-systems-technology-cards-grid">
                        <div className="telecommunications-infrastructure-individual-system-technology-card">
                            <h3>Cableado Estructurado</h3>
                            <ul>
                                <li>Cableado UTP/FTP categoría 6A certificado para 10GBASE-T hasta 100 metros</li>
                                <li>Fibra óptica OM3/OM4 multimodo y OS2 monomodo con conectores pre-terminados</li>
                                <li>Patch panels modulares, organizadores horizontales y vertical cable managers</li>
                                <li>Bandejas portacables tipo escalerilla, malla y canaletas metálicas galvanizadas</li>
                                <li>Certificación de enlaces con equipos Fluke DSX-8000 según TIA/EIA 568.2-D</li>
                                <li>Etiquetado profesional con impresoras térmicas y sistema de códigos QR</li>
                            </ul>
                        </div>

                        <div className="telecommunications-infrastructure-individual-system-technology-card">
                            <h3>Redes de Datos y Wi-Fi</h3>
                            <ul>
                                <li>Switches core, distribución y acceso con PoE+ para alimentación de dispositivos</li>
                                <li>Routers edge con firewall integrado, VPN site-to-site y balanceo de WAN</li>
                                <li>Access Points Wi-Fi 6 (802.11ax) con roaming seamless y controladores cloud</li>
                                <li>Segmentación de red con VLANs, ACLs y políticas de Quality of Service (QoS)</li>
                                <li>Redundancia de enlaces con protocolos LACP, STP y enrutamiento dinámico</li>
                                <li>Monitoreo con SNMP, Syslog y dashboards Grafana/Zabbix en tiempo real</li>
                            </ul>
                        </div>

                        <div className="telecommunications-infrastructure-individual-system-technology-card">
                            <h3>Videovigilancia IP (CCTV)</h3>
                            <ul>
                                <li>Cámaras IP 4K/8MP con compresión H.265+, WDR y visión nocturna infrarroja</li>
                                <li>Cámaras PTZ motorizadas con zoom óptico 30x y seguimiento automático</li>
                                <li>NVR enterprise con redundancia RAID, grabación inteligente y respaldo en nube</li>
                                <li>Analítica de video con reconocimiento facial, conteo de personas y detección perimetral</li>
                                <li>Video Management System (VMS) con acceso web, móvil y notificaciones push</li>
                                <li>Almacenamiento escalable con discos enterprise (WD Purple) y retención configurable</li>
                            </ul>
                        </div>

                        <div className="telecommunications-infrastructure-individual-system-technology-card">
                            <h3>Control de Acceso y Alarmas</h3>
                            <ul>
                                <li>Controladoras de acceso con tecnología RFID, biométrica y reconocimiento facial</li>
                                <li>Lectores de tarjetas Mifare, HID y teclados PIN con diseño arquitectónico</li>
                                <li>Cerraduras electromagnéticas, strikes eléctricos y torniquetes de velocidad</li>
                                <li>Paneles de alarma direccionables con detección de humo, calor y movimiento PIR</li>
                                <li>Integración con sistemas de videovigilancia y notificaciones a central de monitoreo</li>
                                <li>Software de gestión con reportes de acceso, auditoría y control de horarios</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="telecommunications-infrastructure-specialized-services-detailed-section">
                <div className="telecommunications-infrastructure-specialized-services-content-container">
                    <header className="telecommunications-infrastructure-services-section-header-block">
                        <span className="telecommunications-infrastructure-services-category-badge-label">Tecnología de Punta</span>
                        <h2>Servicios Especializados</h2>
                        <p>Soluciones integrales de comunicaciones con estándares globales.</p>
                    </header>

                    <div className="telecommunications-infrastructure-services-tabbed-navigation-wrapper">
                        <div className="telecommunications-infrastructure-services-horizontal-tabs-navigation">
                            {servicesData.map((service) => (
                                <button
                                    key={service.id}
                                    className={`telecommunications-infrastructure-individual-tab-navigation-link ${activeTab === service.id ? 'telecommunications-infrastructure-active-tab-state' : ''}`}
                                    onClick={() => setActiveTab(service.id)}
                                >
                                    <span className="telecommunications-infrastructure-tab-sequential-number-label">{service.number}</span>
                                    <span className="telecommunications-infrastructure-tab-title-text-label">{service.shortTitle}</span>
                                </button>
                            ))}
                            <div
                                className="telecommunications-infrastructure-tab-active-indicator-glow-element"
                                style={{
                                    width: `${100 / servicesData.length}%`,
                                    transform: `translateX(${(activeTab - 1) * 100}%)`
                                }}
                            />
                        </div>

                        <div className="telecommunications-infrastructure-services-tabbed-content-display-area">
                            {servicesData.map((service) => (
                                activeTab === service.id && (
                                    <div className="telecommunications-infrastructure-service-detailed-content-card" key={service.id}>
                                        <div className="telecommunications-infrastructure-service-card-lateral-info-section">
                                            <span className="telecommunications-infrastructure-service-large-number-display-element">{service.number}</span>
                                            <div className="telecommunications-infrastructure-service-decorative-accent-line"></div>
                                        </div>

                                        <div className="telecommunications-infrastructure-service-card-primary-content-section">
                                            <h3>{service.title}</h3>
                                            <p className="telecommunications-infrastructure-service-introductory-description-text">{service.description}</p>

                                            <div className="telecommunications-infrastructure-service-features-listing-grid">
                                                {service.items.map((item, idx) => (
                                                    <div className="telecommunications-infrastructure-individual-feature-list-item" key={idx}>
                                                        <span className="telecommunications-infrastructure-feature-bullet-dot-indicator"></span>
                                                        <div>
                                                            <strong>{item.label}</strong>
                                                            <span>{item.desc}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="telecommunications-infrastructure-implementation-process-methodology-section">
                <div className="telecommunications-infrastructure-implementation-process-content-container">
                    <span className="telecommunications-infrastructure-global-section-category-label">METODOLOGÍA DE IMPLEMENTACIÓN</span>
                    <h2>6 etapas para proyectos de comunicaciones de clase mundial</h2>

                    <div className="telecommunications-infrastructure-process-sequential-workflow-display">
                        <div className="telecommunications-infrastructure-individual-process-step-element">
                            <div className="telecommunications-infrastructure-process-step-circular-icon-wrapper">
                                <span>1</span>
                            </div>
                            <h4>Análisis y Diseño</h4>
                            <p>Levantamiento de requerimientos, diseño de arquitectura de red, diagramas lógicos y físicos, cálculo de enlaces y especificaciones técnicas detalladas.</p>
                        </div>

                        <div className="telecommunications-infrastructure-process-connecting-line-element"></div>

                        <div className="telecommunications-infrastructure-individual-process-step-element">
                            <div className="telecommunications-infrastructure-process-step-circular-icon-wrapper">
                                <span>2</span>
                            </div>
                            <h4>Planificación de Rutas</h4>
                            <p>Definición de canalizaciones, ubicación de racks, puntos de acceso y equipamiento con coordinación BIM para evitar interferencias con otras especialidades.</p>
                        </div>

                        <div className="telecommunications-infrastructure-process-connecting-line-element"></div>

                        <div className="telecommunications-infrastructure-individual-process-step-element">
                            <div className="telecommunications-infrastructure-process-step-circular-icon-wrapper">
                                <span>3</span>
                            </div>
                            <h4>Instalación y Tendido</h4>
                            <p>Montaje de infraestructura física, tendido de cableado con técnicas profesionales, instalación de racks, patch panels y equipamiento activo certificado.</p>
                        </div>

                        <div className="telecommunications-infrastructure-individual-process-step-element">
                            <div className="telecommunications-infrastructure-process-step-circular-icon-wrapper">
                                <span>4</span>
                            </div>
                            <h4>Certificación de Enlaces</h4>
                            <p>Pruebas de certificación con equipos Fluke para cada enlace de cobre y fibra óptica, generación de reportes de performance y garantía de calidad.</p>
                        </div>

                        <div className="telecommunications-infrastructure-process-connecting-line-element"></div>

                        <div className="telecommunications-infrastructure-individual-process-step-element">
                            <div className="telecommunications-infrastructure-process-step-circular-icon-wrapper">
                                <span>5</span>
                            </div>
                            <h4>Configuración y Puesta en Marcha</h4>
                            <p>Programación de switches, routers, Wi-Fi y sistemas de seguridad, pruebas de integración, optimización de performance y ajustes finales.</p>
                        </div>

                        <div className="telecommunications-infrastructure-process-connecting-line-element"></div>

                        <div className="telecommunications-infrastructure-individual-process-step-element">
                            <div className="telecommunications-infrastructure-process-step-circular-icon-wrapper">
                                <span>6</span>
                            </div>
                            <h4>Documentación y Capacitación</h4>
                            <p>Entrega de planos as-built, certificados de prueba, manuales técnicos, capacitación a administradores y transferencia de conocimiento completa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="telecommunications-infrastructure-corporate-vision-commitment-section">
                <div className="telecommunications-infrastructure-corporate-vision-background-overlay-wrapper">
                    <div className="telecommunications-infrastructure-corporate-vision-centered-content-area">
                        <span className="telecommunications-infrastructure-vision-section-category-label-badge">INFRAESTRUCTURA DIGITAL CONFIABLE</span>
                        <h2>Sistemas de comunicaciones que impulsan la transformación digital</h2>
                        <p>
                            Cada proyecto que diseñamos e implementamos cumple con los más altos estándares
                            de calidad, seguridad y performance. Utilizamos equipamiento empresarial certificado,
                            protocolos de seguridad robustos y arquitecturas escalables que garantizan conectividad
                            de alta velocidad, protección de datos y disponibilidad continua para operaciones
                            críticas del negocio.
                        </p>
                        <div className="telecommunications-infrastructure-vision-key-features-benefits-grid">
                            <div className="telecommunications-infrastructure-individual-vision-feature-benefit-item">
                                <div className="telecommunications-infrastructure-vision-feature-checkmark-icon-circle">✓</div>
                                <p>Certificación TIA/EIA 568 garantizada</p>
                            </div>
                            <div className="telecommunications-infrastructure-individual-vision-feature-benefit-item">
                                <div className="telecommunications-infrastructure-vision-feature-checkmark-icon-circle">✓</div>
                                <p>Equipamiento empresarial certificado</p>
                            </div>
                            <div className="telecommunications-infrastructure-individual-vision-feature-benefit-item">
                                <div className="telecommunications-infrastructure-vision-feature-checkmark-icon-circle">✓</div>
                                <p>SLA 99.9% de disponibilidad</p>
                            </div>
                            <div className="telecommunications-infrastructure-individual-vision-feature-benefit-item">
                                <div className="telecommunications-infrastructure-vision-feature-checkmark-icon-circle">✓</div>
                                <p>Soporte técnico especializado 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="telecommunications-infrastructure-call-to-action-conversion-section">
                <div className="telecommunications-infrastructure-call-to-action-content-wrapper">
                    <div className="telecommunications-infrastructure-call-to-action-centered-box-element">
                        <h2>¿Necesita una infraestructura de comunicaciones empresarial?</h2>
                        <p>
                            Evaluamos sus necesidades de conectividad y desarrollamos soluciones tecnológicas
                            personalizadas que optimizan el rendimiento de red, garantizan seguridad perimetral
                            y cumplen con todos los estándares internacionales de la industria.
                        </p>
                        <button className="telecommunications-infrastructure-primary-action-button-element">Solicitar consultoría técnica gratuita</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Communications;