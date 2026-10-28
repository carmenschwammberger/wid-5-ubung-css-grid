import "./style.css";

export default function App() {
  return (
    <div className="app"> {/*Elemente werden automatisch von oben nach unten und von links nach rechts definiert, ausser es werden in der css Datei andere Regeln definiert (z.B. grid-column: 1 / -1; -> das Element nimmt die gesamte Breite ein (von ersten bis letzter Spalte))*/}
      <header>Header</header> {/*Für die Anordnung der Elemente ist die Reihenfolge in der App.js Datei wichtig, in der .css Datei spielt die Reihenfolge keine Rolle*/}
      <aside>Sidebar</aside>

      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
}
