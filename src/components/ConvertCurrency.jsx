import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ConvertCurrency() {
    const [curNames, setCurNames] = useState([]);
    const [curValue, setCurValue] = useState({});
    const [fromValue, setFromValue] = useState("AUD");
    const [toValue, setToValue] = useState("AUD");
    const [result, setResult] = useState(0);
    const [userInput, setUserInput] = useState(0);
    useEffect(() => {
        fetch("https://api.frankfurter.dev/v1/currencies")
            .then((res) => res.json())
            .then((data) => setCurNames(Object.keys(data)));

        fetch("https://api.frankfurter.dev/v1/latest")
            .then((res) => res.json())
            .then((data) => setCurValue(data.rates));
    }, []);
    const convert = () => {
        const res =
            (Number(userInput) / Number(curValue[fromValue])) *
            Number(curValue[toValue]);
        setResult(res.toFixed(3));
    };

    return (
        <div className="convert-currency">
            <div className="viewilist">
                <NavLink to="/currencyList">
                    <button class="button-17" role="button">
                        View currency list
                    </button>
                </NavLink>
            </div>
            <div className="inputValue">
                <label htmlFor="">Enter value to be converted</label>
                <input
                    type="number"
                    onChange={(event) => setUserInput(event.target.value)}
                />
            </div>
            <div className="conversion">
                <div className="from">
                    <label htmlFor="">from</label>
                    <select
                        name="from"
                        onChange={(event) => setFromValue(event.target.value)}
                    >
                        {curNames.map((ele) => (
                            <option>{ele}</option>
                        ))}
                    </select>
                </div>
                <div className="to">
                    <label htmlFor="">to</label>
                    <select
                        name="to"
                        onChange={(event) => setToValue(event.target.value)}
                    >
                        {curNames.map((ele) => (
                            <option>{ele}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="convertButton">
                <button onClick={convert}>convert</button>
            </div>
            <div className="result">
                {userInput} {fromValue} = {result} {toValue}
            </div>
        </div>
    );
}
