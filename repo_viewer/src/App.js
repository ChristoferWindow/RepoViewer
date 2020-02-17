import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepoView from "./components/repo_viewer/RepoView";
import SearchForm from "./components/repo_viewer/repo_search/SearchForm";

function App() {
  return (
    <RepoView/>
  );
}

export default App;
