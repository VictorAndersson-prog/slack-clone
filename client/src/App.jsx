import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Channel from "./views/Channel";
export default function App() {
    return (
        <>
            <Sidebar />
            <Routes>
                <Route
                    path="/"
                    element={<div className="chat-section">chat section</div>}
                />
                <Route path="/:id" element={<Channel />} />
            </Routes>
        </>
    );
}
