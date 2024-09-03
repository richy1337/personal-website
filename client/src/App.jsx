import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./App.css";

function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-start border border-gray-700 p-10">
                    {/* Left Section */}
                    <div className="flex flex-col justify-center">
                        <div className="text-3xl font-semibold">
                            Richard Han
                        </div>
                        <div className="text-md text-slate-200">
                            Full Stack Engineer
                        </div>
                        <div className="text-lg text-slate-200 mt-2">
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
            </div>
        </div>
    );
}

export default App;
