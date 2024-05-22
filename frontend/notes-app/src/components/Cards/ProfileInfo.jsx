import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
    if (!userInfo) {
        // If userInfo is null, return null or some placeholder
        return null; // You can also return a loading indicator or error message here
    }

    // Destructure userInfo if it's not null
    const { fullName } = userInfo;

    return (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
                {getInitials(fullName)}
            </div>

            <div>
                <p className="text-sm font-medium">{fullName}</p>
                <button className="text-sm text-slate-700 underline" onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileInfo;
