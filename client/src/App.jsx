import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./App.css";

function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-9">
            <div className="max-w-2xl mx-auto">
                <div className="p-5">
                    <div className="flex justify-between items-start border border-gray-700 rounded-lg p-9 animate-fadeInLeftToRight">
                        {/* Left Section */}
                        <div className="flex flex-col justify-center">
                            <div className="text-2xl font-semibold">
                                Richard Han
                            </div>
                            <div className="text-md text-slate-400">
                                Full Stack Engineer
                            </div>
                            <div className="text-md text-slate-200 mt-4">
                                Contact @ hwr040530@gmail.com
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col justify-between h-24 text-right">
                            <div>Toronto, ON 📍</div>
                            <div className="mt-auto space-x-3">
                                <a
                                    href="https://github.com/richy1337"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-400"
                                >
                                    <GitHubIcon />
                                </a>
                                <a
                                    href="https://linkedin.com/in/rwh30"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-400"
                                >
                                    <LinkedInIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-14">
                        <div className="border-b border-gray-700 pb-3 mb-5">
                            Work 💻
                        </div>
                        <div>
                            developed a GPS system within CARLA at McMaster's
                            AI-enhanced Mobility Lab
                        </div>
                        <div className="text-slate-400">Python</div>
                    </div>
                    <div className="mt-14">
                        <div className="border-b border-gray-700 pb-3 mb-5">
                            Projects 🏗️
                        </div>
                        <div>Fitness App</div>
                        <div className="text-slate-400">
                            React, Node, Express, Postgesql
                        </div>
                    </div>
                    <div className="mt-14">
                        <div className="border-b border-gray-700 pb-3 mb-5">
                            Hackathons 👾
                        </div>
                        <div className="flex justify-between">
                            <span>Roommate Matching App</span>
                            <a
                                href="https://devpost.com/software/roommatematch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                Devpost
                            </a>
                        </div>
                        <div className="text-slate-400">
                            React, Node, MongoDB, Python
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
