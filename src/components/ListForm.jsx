import { useState } from "react";

export default function ListForm({ articlesList }) {
  const [newTitleList, setNewTitle] = useState(articlesList);
  const [title, setTitle] = useState("");

  const submitFunction = (e) => {
    e.preventDefault();

    if (title === "") return;

    console.log(title);
    setNewTitle([...newTitleList, title]);
    setTitle("");
  };

  const inputFunction = (e) => {
    setTitle(e.target.value);
  };

  const deleteButtonFunction = (deletedIndex) => {
    setNewTitle(newTitleList.filter((title, index) => index !== deletedIndex));
  };
  return (
    <>
      <section className="container mt-4">
        <ul className="list-group">
          {newTitleList.map((article, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <p>{article} </p>{" "}
              <button
                onClick={() => {
                  deleteButtonFunction(index);
                }}
                className="btn btn-outline-danger"
              >
                Elimina
              </button>
            </li>
          ))}
        </ul>
      </section>
      {/* Sezione Input */}
      <section className="container mt-4">
        <form onSubmit={submitFunction}>
          <label className="mx-2" htmlFor="newtitle">
            Inserisci un nuovo titolo:
          </label>
          <input id="newtitle" type="text" value={title} onChange={inputFunction} />
          <button className="btn btn-outline-success mx-2">Aggiungi</button>
        </form>
      </section>
    </>
  );
}
