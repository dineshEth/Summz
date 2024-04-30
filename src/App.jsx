import { useEffect, useState } from "react"
import { Footer, HeroContent, Input, Navbar, Summary } from "./compo"
import axios from "axios";


function App() {

  const [url, setUrl] = useState('');
  const [summary, setSummary] =  useState('Text ');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const handleFetchData = async () =>{
    setError(null)
    setLoading(true);
    try {
      const res = await axios.request();
      
    } catch (error) {
      console.log(error);
      setError(error)
    }
  }

  useEffect(()=>{
    setLoading(false);
  },[])

  return (
    <>
      <div className="max-w-7xl py-2 mx-auto">
      <Navbar />
      <HeroContent />
      <Input 
      url={url} 
      setUrl={setUrl} 
      handleDataFetching={handleFetchData} 
      />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {summary && <Summary summary={summary} />}
      
    </div>
      <Footer />
    </>
  )
}

export default App
