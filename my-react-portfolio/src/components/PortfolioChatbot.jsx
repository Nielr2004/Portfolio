import React from 'react';
import  Chatbot  from 'react-chatbotify';

const PortfolioChatbot = () => {
    const flow = {
        start: {
            message: "Hello! I'm a chatbot. I can answer questions about Snehashis's portfolio. What would you like to know?",
            options: ["Projects", "Skills", "Contact"],
            path: "process_option",
        },
        process_option: {
            message: "Excellent! What would you like to know about my projects?",
            options: ["Face Track+", "This Portfolio", "Netflix Data Visualization"],
            path: "process_projects",
        },
        process_projects: {
            message: (params) => {
                switch (params.userInput) {
                    case "Face Track+":
                        return "Face Track+ is a smart attendance system using OpenCV, Tkinter, and Arduino.";
                    case "This Portfolio":
                        return "This is a one-page Flask site with smooth scroll.";
                    case "Netflix Data Visualization":
                        return "This is a Power BI dashboard for Netflix movie/series analysis.";
                }
            },
            path: "start",
        },
    };

    return (
        <Chatbot flow={flow} />
    );
};

export default PortfolioChatbot;