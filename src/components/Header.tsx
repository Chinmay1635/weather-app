import { Link } from "react-router-dom";

import "./Header.css";
import { useTheme } from "../context/ThemeProvider";
import { Moon, Sun } from "lucide-react";
const Header = () => {

    const {theme, setTheme} = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 justify-between items-center container mx-auto px-8">
        <Link to={"/"}>
          <div className="logo flex gap-2 items-center">
            <img
              src="/skysense-logo.webp"
              alt="skysense-logo"
              className="w-12 rounded-lg"
            />
            <h2>SkySense</h2>
          </div>
        </Link>

        <div>
          {/* search */}
          {/* toggle theme */}
          <button onClick={toggleTheme} className={`"flex items-center cursor-pointer transition-transform duration-1000" ${theme === "dark" ? "rotate-180" : "rotate-0"}`}>
            {theme === "dark" ? <Sun className="h-14 text-yellow-500 rotate-0 transition-all" /> : <Moon className="text-blue-500"/>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
