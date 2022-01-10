import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './layout/Navbar';
import PostList from './layout/PostList';
import Post from './components/Post';
import Wellno from './components/Wellno';
import User from './components/User';

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App h-full w-full">
      <div className="md:container mx-auto">
        <Router>
          <Navbar page={page} setPage={setPage} />
          <Routes>
            <Route
              path="/"
              element={<PostList type={'topstories'} page={page} setPage={setPage} />}
            />
            <Route
              path="/new"
              element={<PostList type={'newstories'} page={page} setPage={setPage} />}
            />
            <Route
              path="/best"
              element={<PostList type={'beststories'} page={page} setPage={setPage} />}
            />
            <Route
              path="/top"
              element={<PostList type={'topstories'} page={page} setPage={setPage} />}
            />
            <Route
              path="/ask"
              element={<PostList type={'askstories'} page={page} setPage={setPage} />}
            />
            <Route
              path="/show"
              element={<PostList type={'showstories'} page={page} setPage={setPage} />}
            />
            <Route
              path="/jobs"
              element={<PostList type={'jobstories'} page={page} setPage={setPage} />}
            />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/user/:userId" element={<User />} />

            <Route path="/submit" element={<Wellno />} />
            <Route path="/login" element={<Wellno />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
