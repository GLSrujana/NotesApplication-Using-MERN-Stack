import React from "react";

export const validateEmail = (email) => {
    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const getInitials = (name) => {
    if (!name || typeof name !== 'string') return ""; // Check if name is null or not a string

    // Trim excess whitespace and split the name into words
    const words = name.trim().split(/\s+/);

    // Extract the first character of each word to form initials
    const initials = words.map(word => word[0]).join('');

    return initials.toUpperCase();
};
