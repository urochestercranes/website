import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./pages/Page"
import Navbar from "./components/Navbar/Nav"
import Footer from "./components/Footer/Footer"
import Loading from "./components/Loading/Loading"
import './App.css'

function App() {
  const [pages, setPages] = useState([]);
  const [footer, setFooter] = useState({})
    const [loading, setLoading] = useState(2);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPages() {
            try {
                const res = await fetch('/.netlify/functions/pages');
                if (!res.ok) {
                    throw new Error(`Request failed: ${res.status}`);
                }
                const data = await res.json();
                setPages(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(prev => prev - 1);
            }
        }

        fetchPages();
    }, []);

    useEffect(() => {
      async function fetchFooter() {
        try {
              const res = await fetch('/.netlify/functions/footer');
              if (!res.ok) {
                  throw new Error(`Request failed: ${res.status}`);
              }
              const data = await res.json();
              setFooter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(prev => prev - 1);
            }
      }

      fetchFooter();
    }, [])

    console.log(loading);
    if (loading > 0) return <Loading/>;
    if (error) return <p>Error: {error}</p>;


  return (
    <>
      <BrowserRouter>
        <Navbar role="navigation"/>
        <Routes>
          {pages.map((page) => {
              return <Route path={page.path} element={<Page page={page}/>}></Route>
            }
          )}
        </Routes>
        <Footer content={footer}/>
      </BrowserRouter>
    </>
  )
}

export default App