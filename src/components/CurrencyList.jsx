import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CurrencyList() {
    const [curNames, setCurNames] = useState([]);
    const [displayNames, setDisplayNames] = useState([]);
    const [initialPage, setInitialPage] = useState(0);
    const [endPage, setEndPage] = useState(5);
    useEffect(() => {
        fetch("https://api.frankfurter.dev/v1/currencies")
            .then((res) => res.json())
            .then((data) => setCurNames(Object.entries(data)));
    }, []);
    useEffect(() => {
        setDisplayNames(curNames.slice(initialPage, endPage));
    }, [curNames, initialPage, endPage]);
    const onClick = (pageIndex) => {
        const currentIndex = pageIndex + 1;
        setInitialPage(currentIndex * 5 - 5);
        setEndPage(currentIndex * 5);
    };
    return (
        <div className="currency-list">
            <div className="back-button">
                <NavLink to="/convertcurrency">
                    <button class="button-17" role="button">
                        Back
                    </button>
                </NavLink>
            </div>
            <h1>List of currency code and its name</h1>
            <div className="tableList">
                <table>
                    <thead>
                        <th>Currency ID</th>
                        <th>Currency Name</th>
                    </thead>
                    <tbody>
                        {displayNames.map((element, index) => (
                            <tr key={index}>
                                <td>{element[0]}</td>
                                <td>{element[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                {[...Array(Math.ceil(curNames.length / 5))].map((_, index) => {
                    return (
                        <button onClick={() => onClick(index)} key={index + 1}>
                            {index + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
