import { useState } from 'react'
import { PageContext } from './Context/PageContext';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function App() {
  const [page, setPage] = useState();

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  return (
    <>
      <PageContext.Provider value={handlePageChange}>
        <Header/>
      </PageContext.Provider>
      <Main page={page}/>
      <Footer/>
    </>
  )
}

export default App
