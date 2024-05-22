import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Cards/SearchBar/SearchBar";

const Navbar = ({ userInfo }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate(); // Correct usage of useNavigate

    const onLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    // Unused function, consider removing or using it
    const handleSearch = () => {
        // Implement search functionality
    };

    const onClearSearch = () => {
        setSearchQuery("");
    };

    return (
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
            <h2 className="text-xl font-medium text-black py-2">Notes</h2>

            <SearchBar
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value);
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />

            {/* Pass onLogout function to ProfileInfo */}
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>
    );
};

export default Navbar;
