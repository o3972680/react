import React from 'react';
import './App.css';

import PostList from './components/post_list';
import AppRouter from './router/app_router';

function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
      <AppRouter />
    </div>
  );
}

export default App;
