import {
  Dialog,
  DialogHeader,
  DialogBody,
  ThemeProvider,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

const AboutModal = ({ aboutModalOpen, toggleAboutModal }) => {
  const theme = {
    dialog: {
      styles: {
        base: {
          backdrop: {
            backgroundColor: "transparent",
          },
        },
      },
    },
  };

  return (
    <ThemeProvider value={theme}>
      <Dialog
        open={aboutModalOpen}
        handler={toggleAboutModal}
        className="flex flex-col items-start justify-center rounded-3xl" // Black translucent background
      >
        {/* Close Button */}
        <button
          onClick={toggleAboutModal}
          className="absolute top-1 right-4 text-gray-500 hover:text-gray-800 text-lg"
        >
          &times;
        </button>

        {/* Header Section */}
        <DialogHeader>
          <div className="grid grid-flow-row gap-4 md:grid-flow-col">
            {/* Image Section */}
            <div className="flex justify-start items-center">
              <img
                className="rounded-full w-32 h-32 object-cover"
                src="/src/assets/img/yash.jpg"
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
        </DialogHeader>

        {/* Body Section */}
        <DialogBody className="text-gray-700 text-base leading-relaxed space-y-4">
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
        </DialogBody>
      </Dialog>
    </ThemeProvider>
  );
};

export default AboutModal;
