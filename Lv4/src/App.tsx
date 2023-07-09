import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import DogDetail from "./pages/DogDetail";
import DogPost from "./pages/DogPost";
import Dogs from "./pages/Dogs";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import Layout from "./layout";
import { useAppSelector } from "./hooks/useRedux";
import ProtectedRoutes from "./route/auth/ProtectedRoutes";
import NotAuthRoutes from "./route/auth/AuthRoutes";

function Nav() {
  const user = useAppSelector((state) => state.user.id);
  return (
    <Routes>
      <Route element={<NotAuthRoutes user={!!user} />}>
        <Route path="/login" element={<Welcome />} />
        {/* <Route></Route> 회원가입*/}
      </Route>

      <Route element={<ProtectedRoutes user={!!user} />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/main/post" element={<DogPost />} />
          <Route path="/main/:id" element={<DogDetail />} />
          <Route path="/mydog" element={<Dogs />} />
        </Route>
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
