import { ThemeProvider } from './Context/ThemeContext';
import { Outlet } from "react-router";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Page from './Pages/Index';

export default function App() {
  return (
    <ThemeProvider>
        <Header/>
        <Page>
          <Outlet/>
        </Page>
        <Footer/>
    </ThemeProvider>
  );
}

