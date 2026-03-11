import React, { useState } from 'react'
import ProfileViewer from './components/ProfileViewer'; 
import RepoExplorer from './components/RepoExplorer';
import NavButton from './components/NavButton';

function App() {
  const [activeTab, setActiveTab] = useState('profile'); 
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <nav className="bg-gray-900 border-b border-gray-800 sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="flex gap-4">
              GitHub Explorer
            </h1>
            <div className="flex gap-4">
              <NavButton onClick={() => setActiveTab('profile')} isActive={activeTab === 'profile'}>Profile Viewer</NavButton>
              <NavButton onClick={() => setActiveTab('repos')} isActive={activeTab === 'repos'}>Repository Explorer</NavButton>
            </div>
          </div>
        </div>
      </nav> 

      <main className='flex-1 overflow-auto'>
          {activeTab === 'profile' ? <ProfileViewer /> : <RepoExplorer/>}
      </main>     
    </div>
  )
}

export default App