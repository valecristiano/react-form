import Header from "./components/Header";
import ListForm from "./components/ListForm";

const articlesList = ["Html", "Css", "Javascript"];

export default function App() {
  return (
    <>
      <Header></Header>
      <ListForm articlesList={articlesList}></ListForm>
    </>
  );
}
