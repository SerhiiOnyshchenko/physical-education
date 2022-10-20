import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import TeachersPage from './components/TeachersPage/TeachersPage';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
