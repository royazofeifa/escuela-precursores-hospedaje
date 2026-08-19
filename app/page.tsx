"use client";

const guests = [
  { name: "Tita Aquilino Baltodano", congregation: "Cinco Esquinas–Puerto Cortés, Puntarenas", phone: "50670269128", stay: "Quepos Centro", host: "Grace Vargas", hostPhone: "50684267117", map: "https://maps.app.goo.gl/cdZThjiLTf5CrKc89?g_st=aw", detail: "Muy cerca del Salón del Reino de los Testigos de Jehová." },
  { name: "Laren Jiménez Flores", congregation: "Cinco Esquinas–Puerto Cortés, Puntarenas", phone: "50688900623", stay: "Cerritos", host: "Roy Azofeifa", hostPhone: "50688900623", map: "https://maps.app.goo.gl/cLb8pvVcfu33LjMw7", detail: "Por estar retirado de Quepos centro, se incluye transporte de ida y vuelta a la escuela. Se hospedan Laren y su esposa." },
  { name: "Flor Alfaro Alfaro", congregation: "Cinco Esquinas–Puerto Cortés, Puntarenas", phone: "50689774187", stay: "Apartamentos Quepos Studio", host: "Pablo Solano", hostPhone: "50685615092", map: "https://maps.app.goo.gl/boCeT2zShizHWhDN6", apartment: true },
  { name: "Rosa María Fonseca González", congregation: "Cinco Esquinas–Puerto Cortés, Puntarenas", phone: "50685923356", stay: "Apartamentos Quepos Studio", host: "Pablo Solano", hostPhone: "50685615092", map: "https://maps.app.goo.gl/boCeT2zShizHWhDN6", apartment: true },
  { name: "Ana Teresa Gutiérrez Araya", congregation: "Cinco Esquinas–Puerto Cortés, Puntarenas", phone: "50686191700", stay: "Apartamentos Quepos Studio", host: "Pablo Solano", hostPhone: "50685615092", map: "https://maps.app.goo.gl/boCeT2zShizHWhDN6", apartment: true },
  { name: "Ruddy Jimenes", congregation: "No indicada", phone: "50672087884", stay: "Apartamentos Quepos Studio", host: "Pablo Solano", hostPhone: "50685615092", map: "https://maps.app.goo.gl/boCeT2zShizHWhDN6", apartment: true },
];

const wa = (phone: string, name: string) => `https://wa.me/${phone}?text=${encodeURIComponent(`Hola ${name}, le escribo sobre el hospedaje para la Escuela del Servicio de Precursores.`)}`;
const shownPhone = (phone: string) => `+506 ${phone.slice(3, 7)}-${phone.slice(7)}`;
const arrivalNote = "Pueden ingresar desde el domingo a partir de las 3:00 p. m.";

export default function Home() {
  const share = async () => {
    if (navigator.share) await navigator.share({ title: "Hospedaje — Escuela del Servicio de Precursores", text: "Información de hospedaje para la Escuela del Servicio de Precursores", url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert("Enlace copiado"); }
  };

  return (
    <main>
      <header className="hero">
        <div className="eyebrow">Información de hospedaje</div>
        <h1>Escuela del Servicio<br />de Precursores</h1>
        <p>Asignaciones de hospedaje y contactos. Toque cualquier botón para comunicarse o abrir la ubicación.</p>
        <button className="share" onClick={share}>Compartir esta información</button>
      </header>
      <section className="notices" aria-label="Avisos importantes">
        <div><span>Importante</span><strong>Durante la escuela no se incluye el almuerzo, como ha sido costumbre.</strong></div>
        <div><span>Apartamentos</span><strong>Están completamente equipados; se puede cocinar en ellos.</strong></div>
      </section>
      <section className="summary" aria-label="Resumen">
        <h2>Resumen de hospedaje</h2>
        <div className="summaryGrid">
          <div><b>4</b><span>Apartamentos Quepos Studio</span></div>
          <div><b>2</b><span>Casa de Roy Azofeifa</span></div>
          <div><b>1</b><span>Casa de Grace Vargas</span></div>
        </div>
      </section>
      <section className="list">
        <div className="sectionTitle"><span>Asignaciones</span><small>{guests.length} contactos</small></div>
        {guests.map((g, i) => (
          <article className="card" key={g.name}>
            <div className="number">{String(i + 1).padStart(2, "0")}</div>
            <h2>{g.name}</h2>
            <dl>
              <div><dt>Congregación</dt><dd>{g.congregation}</dd></div>
              <div><dt>Teléfono / WhatsApp</dt><dd><a className="textLink" href={wa(g.phone, g.name)} target="_blank" rel="noreferrer">{shownPhone(g.phone)}</a></dd></div>
              <div><dt>Lugar de hospedaje</dt><dd>{g.stay}</dd></div>
              <div><dt>Persona anfitriona</dt><dd>{g.host}</dd></div>
              <div><dt>WhatsApp del hospedaje</dt><dd><a className="textLink" href={wa(g.hostPhone, g.host)} target="_blank" rel="noreferrer">{shownPhone(g.hostPhone)}</a></dd></div>
            </dl>
            <p className="detail">
              {g.detail || "Apartamento completamente equipado; se puede cocinar."} {arrivalNote}
            </p>
            <div className="actions">
              <a className="primary" href={wa(g.phone, g.name)} target="_blank" rel="noreferrer">WhatsApp de {g.name.split(" ")[0]}</a>
              <a href={wa(g.hostPhone, g.host)} target="_blank" rel="noreferrer">WhatsApp de {g.host.split(" ")[0]}</a>
              <a href={g.map} target="_blank" rel="noreferrer">Abrir dirección</a>
            </div>
          </article>
        ))}
      </section>
      <footer>Revise su asignación y guarde este enlace para tener los contactos y las direcciones a mano.</footer>
    </main>
  );
}
