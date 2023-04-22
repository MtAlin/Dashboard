import AdminNavbar from "./Components/AdminNavbar";
import { Routes, Route, Link } from "react-router-dom";
import Posts from "./Components/Posts";
import Blogen from "./Components/Blogen";
import DashboardNavbar from "./Components/DashboardNavbar";
import Categories from "./Components/Categories";
import Users from "./Components/Users";
import Navlnk from "./nav-link.json";
function App() {
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Blogen Navlnk={Navlnk} />} />
        <Route path="/" element={<DashboardNavbar />} />
        <Route path="/Posts" element={<Posts Navlnk={Navlnk} />} />
        <Route path="/Categories" element={<Categories Navlnk={Navlnk} />} />
        <Route path="/Users" element={<Users Navlnk={Navlnk} />} />
      </Routes>
    </div>
  );
}

export default App;
