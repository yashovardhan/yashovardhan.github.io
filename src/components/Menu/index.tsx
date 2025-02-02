import Footer from "../Footer";
interface MenuProps {
  menuActive: boolean;
  toggleMenu: () => void;
  toggleAboutModal: () => void;
  logo: string;
}
import "./style.css";

const Menu = ({ menuActive, toggleMenu, toggleAboutModal, logo }: MenuProps) => {
  return (
    <div className={`menuButton ${menuActive ? "active" : ""}`}>
      <button className="menuTgl" type="button" onClick={toggleMenu}>
        <span></span>
      </button>
      <div className="menu z-[199] relative w-screen h-screen bg-black/90 transition-all duration-500 ease-in-out [clip-path:circle(30px_at_calc(100%_-_65px)_65px)] invisible">
        <div className="fixed z-[9] p-[30px] table w-full pointer-events-none">
          <div className="text-left">
            <a
              href="https://yashovardhan.dev"
              className="block w-[20vh] h-auto opacity-70 hover:opacity-100"
            >
              <img className="w-full h-auto" src={logo} alt="yash" />
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col items-center justify-center">
          <a
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={() => {
              toggleAboutModal();
              toggleMenu();
            }}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              About
            </h1>
          </a>
          <a
            href="https://devrel.page/"
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={toggleMenu}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              DevRel.Page
            </h1>
          </a>
          <a
            href="https://medium.com/@yashovardhana"
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={toggleMenu}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              Blog
            </h1>
          </a>
          <a
            href="mailto:connect@yashovardhan.dev"
            target="_blank"
            className="py-3 md:py-4 2xl:py-5 align-middle no-underline"
            onClick={toggleMenu}
          >
            <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold opacity-80 hover:opacity-100">
              Let's Connect!
            </h1>
          </a>
        </div>
        <Footer mode="light" />
      </div>
    </div>
  );
};

export default Menu;