const articlesList = ["Html", "Css", "Javascript"];

export default function App() {
  return (
    <>
      <header className="bg-light">
        <div className="container p-2">
          <h1>Learn Web Development</h1>
        </div>
      </header>
      <section className="container mt-4">
        <ul className="list-group">
          {articlesList.map((article) => (
            <li className="list-group-item">{article}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
