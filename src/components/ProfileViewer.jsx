import { useState } from "react";
import {fetchUserProfile, fetchUserRepos} from '../services/githubApi'; 
import SearchForm from "./SearchForm";
import ErrorMessage from "./ErrorMessage";
import RepoCard from "./RepoCard";
import { formatDate } from "../utils/format"; 
import { FaMapMarkedAlt, FaCode, FaBuilding, FaLink, FaCalendarAlt, FaGithub, FaUsers, FaUserPlus, FaFileCode } from "react-icons/fa";

const ProfileViewer = () => {

  const [username, setUsername] = useState(''); 
  const [profile, setProfile] = useState(null); 
  const [repos, setRepos]  = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleSearch = async (e) => {
    e.preventDefault(); 
    if(!username.trim()) return; 

    setLoading(true); 
    setError(null); 
    setProfile(null); 
    setRepos([]); 

    try {
      const [userData, reposData] = await Promise.all([fetchUserProfile(username), fetchUserRepos[username]]); 
      setProfile(userData); 
      setRepos(reposData); 
    } catch (err) {
      setError(err.messaege); 
    } finally {
      setLoading(false); 
    }

  };

  const hasContent = profile || repos.length > 0; 
  const stats = [
    {icon: FaCode, label: 'Repositories', value: profile?.public_repos, bgClass: 'from-blue-600/20 to-blue-800/20', borderClass: 'border-blue-500/30 hover:border-blue-400/50', iconClass: 'text-blue-400'}, 
    {icon: FaUsers, label: 'followers', value: profile?.followers, bgClass: 'from-green-600/20 to-green-800/20', borderClass: 'border-green-500/30 hover:border-green-400/50', iconClass: 'text-green-400'}, 
    {icon: FaUserPlus, label: 'Following', value: profile?.following, bgClass: 'from-purple-600/20 to-purple-800/20', borderClass: 'border-purple-500/30 hover:border-purple-400/50', iconClass: 'text-purple-400'}, 
    {icon: FaFileCode, label: 'Gists', value: profile?.public_gists, bgClass: 'from-orange-600/20 to-orange-800/20', borderClass: 'border-orange-500/30 hover:border-orange-400/50', iconClass: 'text-blue-400'}, 
  ]; 
  
  const infoItems = [
    { condition: profile?.company, icon: FaBuilding, label: 'Company', value: profile?.company, iconClass: 'text-blue-400'}, 
    { condition: profile?.location, icon: FaMapMarkedAlt, label: 'Location', value: profile?.location, iconClass: 'text-red-400'}, 
    { condition: profile?.blog, icon: FaLink, label: 'Website', value: profile?.blog, iconClass: 'text-green-400', isLink: true}, 
  ]; 

  return (
    <div className={`bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-4 ${hasContent ? 'min-h-full' : 'h-full flex items-center justify-center'} `}>
      <div className={`max-w-6xl ${hasContent ? '' : 'w-full'}`}>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb62">Github Profile View</h1>
          <p className="text-gray-400">Explore Github user profiles and their repositories</p>
        </div>

        <SearchForm value={username} onChange={(e) => setUsername(e.target.value)} onSubmit={handleSearch} placeholder="Enter Github username..." loading={loading} />
        <ErrorMessage message={error} />

        { profile && (
          <div className="bg-linear-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden mb-8 border-gray-700/50 backdrop-blur-sm">
            <div className="bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 p-6 border-b border-gray-700/50 ">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50">
                    <img src={profile.avatar_url} alt={profile.name || profile.login} className="relative w-32 h-32 md:w-40 md:40 rounded-full border-4 border-gray-700 shadow-xl" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 ">{profile.name || profile.login}</h2>
                    <p className="text-grau-400 text-lg mb-3 flex items-center justify-center md:justify-start gap-2"><FaGithub className="text-gray-500" />@{profile.login}</p>
                    {profile.bio && <p className="text-gray-300 text-base mb-4 max-w-4xl">{profile.bio}</p>}
                    <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <FaGithub /> view on Github
                    </a>
                  </div>

                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-900/50">
                <div className="grid grid-cols-2 md:grid-cols-4 mb-6">
                  {stats.map(({icon: Icon, label, value, bgclass, borderclass, iconClass })) =< (
                    <div key={label} className={`bg-linear-to-br ${bgClass} p-4 rounded-xl border ${borderClass} transition-all duration-200 hover:scale-105`}>
                      <div className={`flex items-center gap-2 ${iconClass} mb-2`}>
                        <Icon classnaeme="text-lg" />
                        <div className=""></div>
                      </div>
                    </div>
                  )}
                </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileViewer; 