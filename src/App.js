import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import TeachersPage from './pages/TeachersPage/TeachersPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Loader from './components/Loader/Loader';
import SectionsPage from './pages/SectionsPage/SectionsPage';
import LeftRight from './components/LeftRight/LeftRight';
import CompetitionPage from './pages/CompetitionPage/CompetitionPage';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="sections" element={<SectionsPage />} />
        <Route path="competition" element={<CompetitionPage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="contacts" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <LeftRight />
      <Loader />
    </div>
  );
}
