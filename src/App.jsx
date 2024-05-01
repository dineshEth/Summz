import { useEffect, useState } from "react"
import { Footer, HeroContent, Input, Navbar, Summary } from "./compo"
import axios from "axios";
import { conf } from "./conf/conf";



function App() {

  const [url, setUrl] = useState('');
  const [summary, setSummary] =  useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const handleFetchData = async () =>{
    setError(null)
    setLoading(true);
    if(!url) {
      setError('Url not recived');
      setLoading(false)
      return
    };
    try {
      const res = await axios.request({
        method:'GET',
        url:'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url:`${url}`,
          length: '3'
        },
        headers:{
          'X-RapidAPI-Key': `${conf.api_key}`,
          'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
      });
      if (res) {
        // console.log(await res.message)
        const data =  await res.data;
        setSummary(data.summary);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message + "Enter a valid Url");
    } 
      finally {
        setLoading(false);
    }
  }

  useEffect(()=>{
    setLoading(false);
  },[])

  return (
    <>
      <div className="max-w-7xl relative py-2 px-4 mx-auto">
      <Navbar />
      <HeroContent />
      <Input 
      loader={loading}
      url={url} 
      setUrl={setUrl} 
      handleDataFetching={handleFetchData} 
      />
      {!loading ? (
        <>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {summary && <Summary summary={summary} />}
        </>

      ) : (<p className="text-2xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-[#14e2e2] ">Loading...</p>)} 
    </div>
      <Footer />
    </>
  )
}

export default App
