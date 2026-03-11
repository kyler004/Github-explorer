import React, { useState } from "react";
import ProfileViewer from "./components/ProfileViewer";
import RepoExplorer from "./components/RepoExplorer";
import NavButton from "./components/NavButton";

function App() {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-900">
      <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GitHub Explorer
            </h1>
            <div className="flex gap-2">
              <NavButton
                onClick={() => setActiveTab("profile")}
                isActive={activeTab === "profile"}
              >
                Profile Viewer
              </NavButton>
              <NavButton
                onClick={() => setActiveTab("repos")}
                isActive={activeTab === "repos"}
              >
                Repository Explorer
              </NavButton>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 overflow-auto">
        {activeTab === "profile" ? <ProfileViewer /> : <RepoExplorer />}
      </main>
    </div>
  );
}

export default App;
