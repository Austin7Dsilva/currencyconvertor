import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CurrencyList from "./components/CurrencyList";
import ConvertCurrency from "./components/ConvertCurrency";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/currencyList" element={<CurrencyList />} />
                <Route path="/convertcurrency" element={<ConvertCurrency />} />
            </Routes>
        </>
    );
}

export default App;
