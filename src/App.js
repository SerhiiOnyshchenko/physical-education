import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import TeachersPage from './components/TeachersPage/TeachersPage';
import ContactPage from './components/ContactPage/ContactPage';
import HistoryPage from './components/HistoryPage/HistoryPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Loader from './components/Loader/Loader';
import SectionsPage from './components/SectionsPage/SectionsPage';
import LeftRight from './components/LeftRight/LeftRight';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="sections" element={<SectionsPage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="contacts" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <LeftRight />
      <Footer />
      <Loader />
    </div>
  );
}
