import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import PostList from './layout/PostList';
import Post from './components/Post';

function App() {
  return (
    <div className="App h-full w-full">
      <div className="container mx-auto">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<PostList type={'topstories'} />} />
            <Route path="/new" element={<PostList type={'newstories'} />} />
            <Route path="/post/:postId" element={<Post />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
