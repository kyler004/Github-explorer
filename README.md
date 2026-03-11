# GitHub Explorer

A modern web application for exploring GitHub user profiles and repositories with an intuitive interface and comprehensive search capabilities.

## Overview

GitHub Explorer is a full-featured application built with React and Vite that enables users to search and explore GitHub profiles and repositories. The application provides two main modules: a Profile Viewer for examining user profiles with their repository information, and a Repository Explorer for searching and filtering repositories across GitHub.

## Features

### Profile Viewer Module
- Search for GitHub users by username
- Display comprehensive user profile information including name, login, bio, and location
- View user statistics: repository count, followers, following count, and public gists
- Show user company and website information
- Display join date in formatted date representation
- Browse user's public repositories in a grid layout
- Direct links to user profiles on GitHub

### Repository Explorer Module
- Search for repositories across GitHub using keyword-based queries
- Sort results by multiple criteria: stars, forks, last update, or help-wanted issues
- Arrange results in ascending or descending order
- Pagination support for browsing large result sets
- Real-time result count display
- Display repository information including name, description, language, and statistics
- Show star count, last update date, and fork information
- Direct links to repository GitHub pages
- Error handling for failed searches or API errors

### User Interface
- Tab-based navigation between Profile Viewer and Repository Explorer
- Dark theme design with gradient accents for visual appeal
- Responsive layout that adapts to different screen sizes
- Loading states and disabled controls during API requests
- Clear error messaging for user feedback
- Gradient-enhanced buttons and interactive elements

## Technology Stack

### Frontend Framework
- React 19.2.0 - Component-based UI library
- Vite 7.3.1 - Next-generation build tool for rapid development

### Styling
- Tailwind CSS 4.2.1 - Utility-first CSS framework
- Tailwind CSS Vite Plugin 4.2.1 - Vite integration for Tailwind

### Icons
- React Icons 5.5.0 - Icon library for React applications

### Development Tools
- ESLint 9.39.1 - JavaScript linting and code quality
- Babel - JavaScript compiler for JSX transformation
- React Plugins for ESLint - React-specific linting rules

## Project Structure

```
github-explorer/
├── src/
│   ├── components/
│   │   ├── App.jsx                 - Main application component
│   │   ├── ProfileViewer.jsx       - User profile search and display
│   │   ├── RepoExplorer.jsx        - Repository search functionality
│   │   ├── SearchForm.jsx          - Reusable search input component
│   │   ├── RepoCard.jsx            - Repository information card
│   │   ├── RepoFilters.jsx         - Sorting and filtering controls
│   │   ├── Pagination.jsx          - Page navigation component
│   │   ├── StatCard.jsx            - Statistics display card
│   │   ├── ErrorMessage.jsx        - Error notification component
│   │   ├── NavButton.jsx           - Navigation tab button
│   └── services/
│   │   └── githubApi.js            - GitHub API wrapper functions
│   ├── utils/
│   │   └── format.js               - Utility functions for date/number formatting
│   ├── index.css                   - Global styles and Tailwind imports
│   ├── main.jsx                    - Application entry point
├── vite.config.js                  - Vite configuration
├── package.json                    - Project dependencies
└── README.md                        - Project documentation
```

## API Integration

The application integrates with the GitHub REST API v3 to fetch user and repository data:

### Endpoints Used
- **User Profile**: GET /users/{username}
- **User Repositories**: GET /users/{username}/repos
- **Repository Search**: GET /search/repositories

All API calls include proper error handling and user-friendly error messages.

## Installation and Setup

### Prerequisites
- Node.js (version 16.x or higher)
- npm package manager

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd github-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:5173

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement for rapid development iteration.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview
```bash
npm run preview
```
Serves the production build locally for testing before deployment.

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality and identify potential issues.

## Code Organization

### Components
All UI components are located in the `src/components` directory. Each component is responsible for a specific feature or UI element, following the single responsibility principle.

### Services
The `src/services/githubApi.js` file contains all GitHub API integration logic, abstracting API calls from components and providing a clean interface for data fetching.

### Utilities
Common utility functions for date formatting and number formatting are centralized in `src/utils/format.js` for reusability across components.

## Component Details

### App.jsx
Main application component that manages tab navigation between Profile Viewer and Repository Explorer modules.

### ProfileViewer.jsx
Handles user profile search, fetches profile data and repository list, and displays comprehensive user information with statistics.

### RepoExplorer.jsx
Manages repository search functionality, pagination, filtering, and sorting with real-time API requests.

### SearchForm.jsx
Reusable search input component used in both profile and repository search interfaces.

### RepoCard.jsx
Displays individual repository information including name, description, statistics, and language details.

### RepoFilters.jsx
Provides sorting and ordering controls for repository search results with dropdown selectors.

### Other Components
- Pagination.jsx - Navigation controls for paginated results
- StatCard.jsx - Display statistics in card format
- ErrorMessage.jsx - Unified error notification display
- NavButton.jsx - Navigation buttons with active state styling

## Styling Approach

The project uses Tailwind CSS utility classes for all styling, providing a consistent design language and rapid styling capabilities. The dark theme features:
- Gray-900 background with accents
- Blue and purple gradient elements
- Hover effects and transitions for interactive elements
- Responsive design breakpoints for mobile, tablet, and desktop

## Error Handling

The application implements comprehensive error handling:
- API request failures display user-friendly error messages
- Loading states prevent user interaction during data fetching
- Input validation ensures search queries are not empty
- Network errors are caught and communicated clearly

## Browser Compatibility

The application works in all modern browsers that support ES6 and CSS Grid/Flexbox, including:
- Chrome/Edge (latest versions)
- Firefox (latest versions)
- Safari (latest versions)

## Future Enhancement Possibilities

- User authentication for accessing private repositories
- Bookmarking favorite profiles and repositories
- Advanced filtering options
- Repository statistics visualization
- User activity timeline
- Trending repositories section
- Export repository data functionality

## License

This project is provided as-is for educational and personal use.

## Support

For issues or questions regarding the application, please refer to the GitHub API documentation at https://docs.github.com/en/rest
