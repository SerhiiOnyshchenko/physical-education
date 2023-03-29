import BurgerMenuToggle from 'components/BurgerMenuToggle/BurgerMenuToggle';
import Navbar from 'components/Navbar/Navbar';
import './MobileNav.css';

export default function MobileNav({ isOpen, setOpen }) {
  return (
    <>
      <BurgerMenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />

      <div className={isOpen ? 'navWrapper navWrapper-opened' : 'navWrapper'}>
        <Navbar toggle={() => setOpen(!isOpen)} />
      </div>
    </>
  );
}
