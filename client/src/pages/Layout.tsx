import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";


export const Layout = () => {

    return (
      <>
        <header>
          <Navigation/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
      </>
    );
}