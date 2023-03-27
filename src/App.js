import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Staking from "./components/Staking/Staking";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Staking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
