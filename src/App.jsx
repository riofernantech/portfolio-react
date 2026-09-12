import { PageContext } from './Context/PageContext';
import { ThemeProvider } from './Context/ThemeContext';
import { NavLink, Outlet } from "react-router";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

export default function App() {
  return (
    <ThemeProvider>
      <PageContext.Provider value={NavLink}>
        <Header/>
        <Main>
          <Outlet/>
        </Main>
        <Footer/>
      </PageContext.Provider>
    </ThemeProvider>
  );
}

