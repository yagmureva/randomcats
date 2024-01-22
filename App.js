import RandomCats from "./cat-app-component/RandomCats"
import "./catStyles.css"
function App() {
  return (
    <RandomCats fetchUrl="https://api.thecatapi.com/v1/images/search"/>
  ) 
}

export default App;