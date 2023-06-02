import { BsGlobe2 } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const ContactLinks = () => {
  return (
    <>
      <div className="site absolute bottom-7 left-5">
        <a
          href="https://aesthisia.com/"
          className="text-grayish flex gap-2 items-center"
          target="_blank"
        >
          <BsGlobe2 />
          aesthisia.com
        </a>
      </div>
      <div className="socials flex gap-2 absolute bottom-7 right-5">
        <a href="https://www.linkedin.com/company/aesthisia/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/aesthisia/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/aesthisia/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </>
  );
};

export default ContactLinks;
