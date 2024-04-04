import React from 'react';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const Index = () => <div>Index</div>;
const Contact = () => <div>Contact</div>;

const Backbtn = () => {
    const navigate = useNavigate();
    

    return (
        <button onClick={() => navigate(-1)}
            style={{ width: "45px", height: "45px", borderRadius: "50px" }}>


            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                <rect width="47" height="47" rx="23.5" fill="#A4A9AE" fill-opacity="0.25" />
                <path d="M27 16L19 24L27 31.5" stroke="#A4A9AE" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


        </button>
    )
}

export default Backbtn