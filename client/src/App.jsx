import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./pages/Page"
import Navbar from "./components/Navbar/Nav"
import './App.css'

function App() {
  const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPages() {
            try {
                const res = await fetch('/.netlify/functions/pages'); // adjust to your actual route
                if (!res.ok) {
                    throw new Error(`Request failed: ${res.status}`);
                }
                const data = await res.json();
                setPages(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPages();
    }, []);

    if (loading) return <p>Loading...</p>;
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
      </BrowserRouter>
    </>
  )
}

export default App