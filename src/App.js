import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FindPlayer from './pages/FindPlayer';
import FindCoach from './pages/FindCoach';
import AddPlayer from './pages/AddPlayer';
import AddCoach from './pages/AddCoach';
import UpdatePlayer from './pages/UpdatePlayer';
import UpdateCoach from './pages/UpdateCoach';
import DeletePlayer from './pages/DeletePlayer';
import DeleteCoach from './pages/DeleteCoach';
import FindTeam from './pages/FindTeam';

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Hello, World!</div>} />
        <Route path='find-player' element={<FindPlayer />} />
        <Route path='find-coach' element={<FindCoach />} />
        <Route path='add-player' element={<AddPlayer />} />
        <Route path='add-coach' element={<AddCoach />} />
        <Route path='update-player' element={<UpdatePlayer />} />
        <Route path='update-coach' element={<UpdateCoach />} />
        <Route path='delete-player' element={<DeletePlayer />} />
        <Route path='delete-coach' element={<DeleteCoach />} />
        <Route path='find-team' element={<FindTeam/>} />

      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;