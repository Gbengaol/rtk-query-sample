import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Canvas } from "./pages/canvas";
import UsersLanding from "./pages/auth/Users";
import User from "./pages/auth/Users/user";
import Dashboard from "./pages/auth/Dashboard/Dashboard";
import Users from "./pages/auth/Users/users";
import Index from "./pages/auth";
import Docs from './pages/auth/Docs/Docs';
import Settings from "./pages/auth/Settiings/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Canvas />} />
        <Route path="dashboard" element={<Index />}>
          <Route path="" element={<Dashboard />} />
          <Route path="users" element={<UsersLanding />}>
            <Route path="" element={<Users />} />
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="docs" element={<Docs />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
