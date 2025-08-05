import { useState, useEffect} from 'react';
import { PageContext } from './Context/PageContext';
import { ThemeContext } from './Context/ThemeContext';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState('light');

  const handlePageChange = (newPage) => setPage(newPage);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleThemeChange }}>
        <PageContext.Provider value={handlePageChange}>
          <Header/>
        </PageContext.Provider>
        <Main page={page}/>
        <Footer/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
