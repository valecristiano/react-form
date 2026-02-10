import { useState } from "react";

const articlesList = ["Html", "Css", "Javascript"];

export default function App() {
  const [newTitleList, setNewTitle] = useState(articlesList);
  const [title, setTitle] = useState("");

  return (
    <>
      <header className="bg-light">
        <div className="container p-2">
          <h1>Learn Web Development</h1>
        </div>
      </header>
      {/* Lista Articoli */}
      <section className="container mt-4">
        <ul className="list-group">
          {newTitleList.map((article, index) => (
            <li key={index} className="list-group-item">
              {article}
            </li>
          ))}
        </ul>
      </section>
      {/* Sezione Input */}
      <section className="container mt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(title);
            setNewTitle([...newTitleList, title]);
          }}
        >
          <label className="mx-2" htmlFor="newtitle">
            Inserisci un nuovo titolo:
          </label>
          <input
            id="newtitle"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button className="btn btn-secondary mx-2">Aggiungi</button>
        </form>
      </section>
    </>
  );
}
