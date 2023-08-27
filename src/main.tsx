import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Snippet from "./pages/Snippet.tsx";
import Homepage from "./pages/Homepage.tsx";
import EditorPage from "./pages/EditorPage.tsx";
import Login from "./pages/Admin/Login.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import CreateSnippet from "./pages/CreateFlow/CreateSnippet.tsx";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<App />}>

      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/*" element={<ProtectedRoutes/>}>
        <Route path="text-editor/" element={<CreateSnippet />} />
        <Route path="text-editor/:id" element={<EditorPage />} />
      </Route>
      <Route path="/snippet/:id" element={<Snippet />} />
      <Route path="/*"  element={<NotFound/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
