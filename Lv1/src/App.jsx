import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import GlobalStyle from "./styles/globalstyle";
import TodoList from "./pages/todoList";

function Nav() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoList />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
}

export default App;
