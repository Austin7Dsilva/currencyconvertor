import { NavLink } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="App">
                <div className="App-content">
                    <span>Currency Convertor</span>

                    <NavLink to="/convertcurrency">
                        <button class="button-17" role="button">
                            Begin
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
