import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub, faLinkedin, faMedium, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

interface FooterProps {
  mode?: "light" | "dark";
}

const Footer = ({ mode = "dark" }: FooterProps) => {
  const linkClasses =
    mode === "light"
      ? "opacity-70 hover:opacity-100 text-white px-2.5 py-1.5 inline-block text-lg"
      : "opacity-50 hover:opacity-100 text-[#2f2e40] px-2.5 py-1.5 inline-block text-lg";

  return (
    <footer className="fixed bottom-3 w-full text-center z-50">
      <a href="https://twitter.com/yashovardhan" target="_blank" className={linkClasses}>
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a href="https://t.me/yashweb3" target="_blank" className={linkClasses}>
        <FontAwesomeIcon icon={faTelegramPlane} />
      </a>
      <a href="https://github.com/yashovardhan" target="_blank" className={linkClasses}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/yashovardhanagrawal/" target="_blank" className={linkClasses}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://medium.com/@yashovardhana" target="_blank" className={linkClasses}>
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a href="mailto:yashovardhan.agrawal@gmail.com" target="_blank" className={linkClasses}>
        <FontAwesomeIcon icon={faEnvelopeOpen} />
      </a>
    </footer>
  );
};

export default Footer;