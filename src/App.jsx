import { useEffect, useState } from "react";
import "./App.css";


function App() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  useEffect(() => {
    const sections = [
      { id: "services", name: "services" },
      { id: "work", name: "work" },
      { id: "about", name: "about" },
    ];
  
    const handleActiveSection = () => {
      const position = window.scrollY + window.innerHeight * 0.35;
  
      let currentSection = "";
  
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
  
        if (element && position >= element.offsetTop) {
          currentSection = section.name;
        }
      });
  
      setActiveSection(currentSection);
    };
  
    window.addEventListener("scroll", handleActiveSection);
  
    handleActiveSection();
  
    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);
  return (
    <main id="top">

      {/* =========================
          NAVIGATION
      ========================= */}
      <nav className="navbar">
        <div className="logo">X-FILES</div>

        <div
  className={`nav-links floating-nav ${
    isScrolled ? "nav-scrolled" : ""
  }`}
>
<a
  href="#work"
  className={activeSection === "work" ? "active" : ""}
>
  WORK
</a>

<a
  href="#services"
  className={activeSection === "services" ? "active" : ""}
>
  SERVICES
</a>

<a
  href="#about"
  className={activeSection === "about" ? "active" : ""}
>
  ABOUT
</a>

</div>

        <a className="contact-button" href="#contact">
          LET'S TALK ↗
        </a>
      </nav>


      {/* =========================
          HERO
      ========================= */}
      <section className="hero">

      <div className="hero-glow"></div>

        <div className="hero-meta">
          <span>XF / 001</span>
          <span>DESIGN + ENGINEERING</span>
        </div>

        <h1 className="hero-title">

  <span className="hero-line hero-line-1">
    WE DESIGN.
  </span>

  <span className="hero-line hero-line-2">
    WE BUILD.
  </span>

  <span className="hero-line hero-line-3">
    WE SOLVE.
  </span>

</h1>


        <div className="hero-bottom">
          <p>
            X-Files is a technology services company creating digital
            products, software, and experiences that solve real problems.
          </p>

          <a href="#work" className="project-button">
            EXPLORE OUR WORK ↓
          </a>
        </div>

      </section>


      {/* =========================
          SERVICES
      ========================= */}
      <section className="services" id="services">

        <div className="section-header">
          <span>02 / SERVICES</span>
          <span>WHAT WE DO</span>
        </div>

        <div className="services-heading">

          <h2>
            DESIGN MEETS
            <br />
            <span>ENGINEERING.</span>
          </h2>

          <p>
            From early ideas to finished products, we combine design and
            technology to build digital experiences that work.
          </p>

        </div>

        <div className="services-grid">

          <article className="service-card">
            <div className="service-number">01</div>

            <div>
              <h3>Product Design</h3>
              <p>
                UI/UX, user flows, prototypes, design systems and thoughtful
                digital experiences.
              </p>
            </div>

            <span className="service-arrow">↗</span>
          </article>


          <article className="service-card">
            <div className="service-number">02</div>

            <div>
              <h3>Software Development</h3>
              <p>
                Web applications, mobile applications, APIs and custom
                software built around real business needs.
              </p>
            </div>

            <span className="service-arrow">↗</span>
          </article>


          <article className="service-card">
            <div className="service-number">03</div>

            <div>
              <h3>Digital Products</h3>
              <p>
                We take products from idea and strategy through design,
                development and launch.
              </p>
            </div>

            <span className="service-arrow">↗</span>
          </article>


          <article className="service-card">
            <div className="service-number">04</div>

            <div>
              <h3>Technology Solutions</h3>
              <p>
                Automation, integrations and custom digital tools that make
                businesses work smarter.
              </p>
            </div>

            <span className="service-arrow">↗</span>
          </article>

        </div>

      </section>


      {/* =========================
          SELECTED FILES
      ========================= */}
      <section className="work" id="work">
      
        <div className="section-header">
          <span>03 / WORK</span>
          <span>SELECTED FILES</span>
        </div>

        <div className="work-heading">

          <h2>
            SELECTED
            <br />
            <span>FILES.</span>
          </h2>

          <p>
            A selection of products, experiences and systems designed
            and built by X-Files.
          </p>

        </div>


        {/* PROJECT X-001 */}
        <article className="project">

          <div className="project-visual">
          <div className="project-placeholder">

<span className="placeholder-code">
  X-001
</span>

<div className="placeholder-symbol">
  XF
</div>

<span className="placeholder-status">
  FILE / ACTIVE
</span>

<div className="view-file">
  VIEW FILE
  <span>↗</span>
</div>

</div>
          </div>

          <div className="project-info">

            <div>
              <span className="project-code">X-001</span>
              <h3>Project Alpha</h3>
            </div>

            <div className="project-details">
              <span>PRODUCT DESIGN</span>
              <span>SOFTWARE DEVELOPMENT</span>
              <span>2026</span>
            </div>

          </div>

        </article>


        {/* PROJECT X-002 */}
        <article className="project">

          <div className="project-visual second-project">
            <div className="project-placeholder">

              <span className="placeholder-code">
                X-002
              </span>

              <div className="placeholder-symbol">
                02
              </div>

              <span className="placeholder-status">
                FILE / CLASSIFIED
              </span>
              <div className="view-file">
  VIEW FILE
  <span>↗</span>
</div>

            </div>
          </div>

          <div className="project-info">

            <div>
              <span className="project-code">X-002</span>
              <h3>Project Beta</h3>
            </div>

            <div className="project-details">
              <span>WEB DEVELOPMENT</span>
              <span>UI / UX</span>
              <span>2026</span>
            </div>

          </div>

        </article>


        {/* PROJECT X-003 */}
        <article className="project">

          <div className="project-visual third-project">
            <div className="project-placeholder">

              <span className="placeholder-code">
                X-003
              </span>

              <div className="placeholder-symbol">
                X
              </div>

              <span className="placeholder-status">
                FILE / ARCHIVE
              </span>
              <div className="view-file">
  VIEW FILE
  <span>↗</span>
</div>

            </div>
          </div>

          <div className="project-info">

            <div>
              <span className="project-code">X-003</span>
              <h3>Project Gamma</h3>
            </div>

            <div className="project-details">
              <span>DIGITAL PRODUCT</span>
              <span>DESIGN + ENGINEERING</span>
              <span>2026</span>
            </div>

          </div>

        </article>

      </section>


{/* =========================
          PROCESS
      ========================= */}
      <section className="process">

<div className="section-header">
  <span>04 / PROCESS</span>
  <span>HOW WE WORK</span>
</div>

<div className="process-heading">
  <h2>
    FROM IDEA TO
    <br />
    <span>DEPLOYMENT.</span>
  </h2>

  <p>
    A clear process that takes projects from an initial idea
    to a working digital product.
  </p>
</div>

<div className="process-grid">

  <article className="process-step">
    <span className="process-number">01</span>
    <div className="process-line"></div>
    <h3>DISCOVER</h3>
    <p>
      We understand the problem, your goals, your users and
      what the product needs to achieve.
    </p>
  </article>

  <article className="process-step">
    <span className="process-number">02</span>
    <div className="process-line"></div>
    <h3>DESIGN</h3>
    <p>
      We turn ideas into clear interfaces, user experiences
      and product systems.
    </p>
  </article>

  <article className="process-step">
    <span className="process-number">03</span>
    <div className="process-line"></div>
    <h3>BUILD</h3>
    <p>
      We engineer the product using technology suited to the
      problem and its future growth.
    </p>
  </article>

  <article className="process-step">
    <span className="process-number">04</span>
    <div className="process-line"></div>
    <h3>DEPLOY</h3>
    <p>
      We launch, test, refine and improve the product as it
      enters the real world.
    </p>
  </article>

</div>

</section>
      {/* =========================
          ABOUT
      ========================= */}
      <section className="about" id="about">

<div className="section-header">
  <span>05 / ABOUT</span>
  <span>WHO WE ARE</span>
</div>

<div className="about-intro">

  <h2>
    BUILT BETWEEN
    <br />
    <span>DESIGN</span> AND
    <br />
    <span>ENGINEERING.</span>
  </h2>

  <div className="about-copy">
    <p>
      X-Files is a technology company focused on turning ideas,
      problems and opportunities into useful digital products.
    </p>

    <p>
      We bring creative thinking and technical execution together —
      from understanding the problem and designing the experience
      to engineering and launching the solution.
    </p>
  </div>

</div>


{/* DESIGN + ENGINEERING */}
<div className="about-pillars">

  <article className="about-pillar">

    <div className="pillar-top">
      <span>01</span>
      <span>CREATIVE SYSTEM</span>
    </div>

    <div className="pillar-symbol">
      D
    </div>

    <div className="pillar-content">
      <h3>DESIGN</h3>

      <p>
        Product thinking, UI/UX, visual systems, prototyping and
        experiences built around how people actually use technology.
      </p>

      <div className="pillar-tags">
        <span>UI / UX</span>
        <span>PRODUCT</span>
        <span>VISUAL</span>
        <span>PROTOTYPING</span>
      </div>
    </div>

  </article>


  <div className="about-connector">
    <span>×</span>
  </div>


  <article className="about-pillar">

    <div className="pillar-top">
      <span>02</span>
      <span>TECHNICAL SYSTEM</span>
    </div>

    <div className="pillar-symbol">
      E
    </div>

    <div className="pillar-content">
      <h3>ENGINEERING</h3>

      <p>
        Software, systems and infrastructure engineered to turn
        digital concepts into reliable working products.
      </p>

      <div className="pillar-tags">
        <span>WEB</span>
        <span>MOBILE</span>
        <span>APIs</span>
        <span>SYSTEMS</span>
      </div>
    </div>

  </article>

</div>


{/* COMPANY STATEMENT */}
<div className="about-statement">

  <span className="statement-label">
    XF / PHILOSOPHY
  </span>

  <p>
    We don't separate how something
    <span> looks</span> from how it
    <span> works.</span>
  </p>

</div>

</section>
      {/* =========================
          CAPABILITIES
      ========================= */}
      <section className="capabilities">

<div className="section-header">
  <span>06 / CAPABILITIES</span>
  <span>WHAT WE CAN BUILD</span>
</div>

<div className="capabilities-intro">

  <h2>
    BUILT FOR
    <br />
    <span>WHAT'S NEXT.</span>
  </h2>

  <p>
    From interfaces to infrastructure, our capabilities bring
    design and engineering together across the full digital
    product lifecycle.
  </p>

</div>


<div className="capabilities-list">

  <article className="capability-row">
    <span className="capability-number">01</span>

    <h3>UI / UX DESIGN</h3>

    <p>
      User research, wireframes, interfaces, prototypes and
      design systems.
    </p>

    <span className="capability-arrow">↗</span>
  </article>


  <article className="capability-row">
    <span className="capability-number">02</span>

    <h3>WEB DEVELOPMENT</h3>

    <p>
      Responsive websites, web applications and digital
      platforms built for performance.
    </p>

    <span className="capability-arrow">↗</span>
  </article>


  <article className="capability-row">
    <span className="capability-number">03</span>

    <h3>MOBILE APPS</h3>

    <p>
      Thoughtful mobile experiences designed and engineered
      around real user needs.
    </p>

    <span className="capability-arrow">↗</span>
  </article>


  <article className="capability-row">
    <span className="capability-number">04</span>

    <h3>APIs + INTEGRATIONS</h3>

    <p>
      Connecting products, services and systems so information
      moves where it needs to.
    </p>

    <span className="capability-arrow">↗</span>
  </article>


  <article className="capability-row">
    <span className="capability-number">05</span>

    <h3>AUTOMATION</h3>

    <p>
      Digital workflows and tools that reduce repetitive work
      and improve efficiency.
    </p>

    <span className="capability-arrow">↗</span>
  </article>


  <article className="capability-row">
    <span className="capability-number">06</span>

    <h3>BRAND + DIGITAL DESIGN</h3>

    <p>
      Visual identities and digital systems that give products
      a clear and consistent presence.
    </p>

    <span className="capability-arrow">↗</span>
  </article>

</div>

</section>
      {/* =========================
          CONTACT
      ========================= */}
      <section className="contact" id="contact">

<div className="section-header">
  <span>07 / CONTACT</span>
  <span>START A PROJECT</span>
</div>

<div className="contact-content">

  <span className="contact-label">
    HAVE SOMETHING IN MIND?
  </span>

  <h2>
    HAVE AN IDEA?
    <br />
    LET'S <span>BUILD IT.</span>
  </h2>

  <div className="contact-bottom">

    <p>
      Whether you're starting with an idea, improving an existing
      product or solving a difficult technical problem, we'd like
      to hear about it.
    </p>

    <a
      href="mailto:hello@x-files.com"
      className="contact-cta"
    >
      START A PROJECT
      <span>↗</span>
    </a>

  </div>

</div>


<div className="contact-meta">

  <div className="contact-meta-item">
    <span>LOCATION</span>
    <p>LAGOS, NIGERIA</p>
  </div>

  <div className="contact-meta-item">
    <span>AVAILABILITY</span>
    <p>OPEN FOR PROJECTS</p>
  </div>

  <div className="contact-meta-item">
    <span>WORKING WITH</span>
    <p>CLIENTS WORLDWIDE</p>
  </div>

  <div className="contact-meta-item">
    <span>SYSTEM</span>
    <p className="system-online">
      <i></i>
      ONLINE
    </p>
  </div>

</div>

</section>
{/* =========================
    FOOTER
========================= */}
<footer className="footer">

  <div className="footer-top">

    <div className="footer-brand">
      <a href="#top" className="footer-logo">
        X-FILES
      </a>

      <p>DESIGN + ENGINEERING</p>
    </div>


    <div className="footer-links">

      <div className="footer-link-group">
        <span>NAVIGATION</span>

        <a href="#work">WORK</a>
        <a href="#services">SERVICES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>


      <div className="footer-link-group">
        <span>CONNECT</span>

        <a href="#contact">LINKEDIN ↗</a>
        <a href="#contact">INSTAGRAM ↗</a>
        <a href="#contact">EMAIL ↗</a>
      </div>

    </div>

  </div>


  <div className="footer-wordmark">
    X-FILES
  </div>


  <div className="footer-bottom">

    <div className="footer-copyright">
      <span>© 2026 X-FILES</span>
      <span>ALL RIGHTS RESERVED</span>
    </div>


    <a href="#top" className="footer-top-button">
      <span>BACK TO TOP</span>
      <span className="footer-top-arrow">↑</span>
    </a>

  </div>

</footer>

    </main>
  );
}

export default App;