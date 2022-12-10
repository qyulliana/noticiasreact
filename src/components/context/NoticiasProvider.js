import {useState, createContext, useEffect} from "react";
import axios from "axios";

const NoticiasContext = createContext()

const NoticiasProvider= ({ children}) => {
  const [categoria, setCategoria] = useState('general')
  const [noticias, setNoticias] = useState([])


  useEffect(() => {
    const consultarApi=  async () => {
      const url= `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${process.env.REACT_APP_VITE_API_KEY}`
      const { data } = await axios(url)

      console.log(data)
      setNoticias(data.articles)


    }
    consultarApi()

  }, [categoria]

  )
  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  return(
    <NoticiasContext.Provider
      value={{categoria, handleChangeCategoria, noticias}}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export {
  NoticiasProvider
}

export default NoticiasContext