import Main from "./Sections/Main"
import {Route, Routes} from "react-router-dom";
import MealInfo from "./Components/MealInfo";
function App() {
  

  return (
    <>
      <section className="sm:px-16 bg-slate-400 px-8 sm:py-24 py-12">
        {/* <Main /> */}
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/:MealId" element={<MealInfo />} />
        </Routes>
      </section>
    </>
  )
}

export default App
