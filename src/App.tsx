import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import PopupForm from "./components/shared/PopupForm";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./components/custom/ScrollToTop";
import Login from "./components/shared/Login"; // Import Login component
import AdminDashboard from "./components/shared/AdminDashboard"; // Import AdminDashboard component

function App() {
  const location = useLocation();

  // Check if the current path is "/login" or "/admin-dashboard"
  const isFooterVisible = location.pathname !== "/login" && location.pathname !== "/admin-dashboard";

  return (
    <>
      <h1 className="w-full font-Lato relative">
        <Header />
        <ScrollToTop />
        <Outlet />
        <PopupForm />
        
        {/* Conditionally render the footer */}
        {isFooterVisible && <Footer />}
        
        <Toaster />
      </h1>
    </>
  );
}

export default App;
