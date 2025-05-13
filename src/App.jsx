import React from "react";
import { PrimeReactProvider } from "primereact/api";
import Header from "./components/Header";
import MobileMenu from "./components/Navbar";
import Promo from "./components/PromoSection";
import About from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Title from "./components/Title";
import Services from "./components/ServicesBlock";
import Advantages from "./components/AdvantagesSection";
import ScrollToTop from "./components/ScrollToTop";
import Reviews from "./components/ReviewsSection";
import FormSection from "./components/FormSection";
import Contacts from "./components/ContactSection";
import Carousel from "./components/Carousel";
import { LangProvider } from "./context/langProvider";

class App extends React.Component {
  render() {
    return (
      <>
      <LangProvider>
          <Header />
          <ScrollToTop />
          <Promo />
          <About />
          <ServicesSection />
          <Advantages />
          <Reviews />
          <FormSection />
          <Contacts />
          <Footer />
      </LangProvider>
          
      </>
    );
  }
}

export default App;

{
  /* 
<Footer />
<Button />
<Title />
<Services />
<Advantages />
<Form /> */
}

// 1 вариант: index.html (точка входа) -> index.js -> App.js (содержит контент)
// 2 вариант: index.html (точка входа) -> App.js -> Main.js (содержит контент)

/*
  папка config -> файл langs.js -> в ней все переводы 
  const ENGLISH: {
    "title": "Hello",
    "text": "test text"
  }
  const FINISH:{
    "title": "Terve",
    "text": "testi texti"
  }
  const RUSSIAN: {
    "title": "Привет",
    "text": "тестовый текс"
  }

  export const getLang = (code) =>{
    if (code == "EN") return ENGLISH
    if (code == "FI") return FINISH
    if (code == "RU") return RUSSIAN
  }

-------------------------------------------------------

  в компоненте App.js создаем переменную, которая хранит текущий код языка (не код программерский!!!) для сайта и переменную, которая содержит текущие переводы (ключи из объекта)

  import LangMenu from "/path"
  import getLang from ./config/langConfig

  const [langCode, setLangCode] = useState("EN") // хранит текущий код языка (не код программерский!!!) 
  const [lang, setLang] = useState(getLang("EN")) //содержит текущие переводы (ключи из объекта)

  useEffect(()=>{
    setLang(getLang(langCode))
  }, [langCode])

  render(){
    return(
      <>
        <h1>{lang.title}</h1>
        <LangMenu setLangCode={setLangCode} lang={lang}/> // отдаем setLangCode как параметр, чтобы LangMenu мог использовтаь
        <Header lang={lang} />
      </>
    )
  }

--------------------------------------------------------
компонент языковое меню

export cont LangMenu = ({setLangCode, lang}) => {

const handleLang = (newLang) => {
  setLangCode(newLang)
}

<ul>
  <li onClick={handleLang("EN")}>English</li>
  <li onClick={handleLang("FI")}>Finnish</li>
  <li onClick={handleLang("RU")}>Russian</li>
</ul>

}
---------------
export const Header = ({lang}) => {

    render(){
    return(
      <>
          <ul>
            <li>{lang.textAboutMe}</li>
            <li>{lang.prices}</li>
          </ul>
      </>
    )
  }
}
*/
