import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import PostList from './layout/PostList';
import Post from './components/Post';
import Wellno from './components/Wellno';
import User from './components/User';

function App() {
  return (
    <div className="App h-full w-full">
      <div className="container mx-auto">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<PostList type={'topstories'} />} />
            <Route path="/new" element={<PostList type={'newstories'} />} />
            <Route path="/best" element={<PostList type={'beststories'} />} />
            <Route path="/top" element={<PostList type={'topstories'} />} />
            <Route path="/ask" element={<PostList type={'askstories'} />} />
            <Route path="/show" element={<PostList type={'showstories'} />} />
            <Route path="/jobs" element={<PostList type={'jobstories'} />} />
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
