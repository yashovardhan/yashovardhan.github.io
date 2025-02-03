import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import yash from "../assets/img/yash.jpg";

interface AboutModalProps {
  aboutModalOpen: boolean;
  toggleAboutModal: () => void;
}

const AboutModal = ({ aboutModalOpen, toggleAboutModal }: AboutModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-990 flex items-center justify-center ${
        aboutModalOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={toggleAboutModal}
        className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          aboutModalOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div
        className={`relative rounded-3xl p-4 w-[90vw] max-w-4xl max-h-[90vh] bg-white shadow-lg overflow-y-auto transition-transform transition-opacity duration-300 ease-in-out ${
          aboutModalOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-10"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleAboutModal}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-lg"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Header Section */}
        <div className="grid grid-flow-row gap-4 md:grid-flow-col justify-start">
          {/* Image Section */}
          <div className="flex justify-start items-center">
            <img
              className="rounded-full w-32 h-32 object-cover"
              src={yash}
              alt="Yashovardhan Agrawal"
            />
          </div>

          {/* Name and Social Links Section */}
          <div className="flex flex-col justify-center items-start space-y-2">
            <h3 className="text-xl font-bold text-gray-800">
              Yashovardhan Agrawal
            </h3>
            <h4 className="text-lg text-gray-600">
              Head of Developer Relations - Web3Auth
            </h4>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://twitter.com/yashovardhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 text-xl"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="https://github.com/yashovardhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 text-xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/yashovardhanagrawal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 text-xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://medium.com/@yashovardhana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 text-xl"
              >
                <FontAwesomeIcon icon={faMedium} />
              </a>
              <a
                href="mailto:yashovardhan.agrawal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 text-xl"
              >
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </a>
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="text-gray-700 text-base leading-relaxed space-y-4 mt-4">
          <p>
            Yash is an accomplished Developer Relations leader and a seasoned
            JavaScript developer with a strong background in Web3 and open
            source technologies. With years of experience building and nurturing
            developer ecosystems, Yash specializes in bridging the gap between
            complex technologies and developer-friendly solutions.
          </p>
          <p>
            As a passionate advocate for open source and community-driven
            innovation, he has empowered developers worldwide through impactful
            initiatives, insightful content, and engaging sessions at global
            conferences. Yash continues to drive innovation by fostering
            collaboration and enabling developers to thrive in the ever-evolving
            tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
