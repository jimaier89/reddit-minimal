import React, {useState, useEffect} from 'react';
import './App.css';

import Loading from './components/loading/Loading';
import Header from './components/header/Header';
import Articles from './components/articles/Articles';
import Subreddits from './components/subreddits/Subreddits';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [subreddits, setSubreddits] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  const getArticles = async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const jsonResponse = await response.json();
    setArticles(jsonResponse.data.children);
    setIsLoading(false);
  }

  const getSubreddits = async () => {
    const response = await fetch('https://www.reddit.com/subreddits.json');
    const jsonResponse = await response.json();
    setSubreddits(jsonResponse.data.children);
  }

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    getSubreddits();
  }, []);


  return (
    <div className="App">
      <Header />
      {isLoading && <Loading />}
      <div className="container">
        <Articles articles={articles}/>
        <Subreddits subreddits={subreddits}/>
      </div>
      
    </div>
  );
}

export default App;
