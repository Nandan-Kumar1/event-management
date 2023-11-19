import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[#aae5f9] text-center text-black dark:bg-neutral-600 mt-32">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <a href="https://github.com/Nandan-Kumar1" className="mr-9">
            <FaGithub size={32} />
          </a>
          <a href="#!" className="mr-9">
            <FaInstagram size={32} />
          </a>
          <a href="#!">
            <FaFacebook size={32} />
          </a>
        </div>
      </div>

      <div className="w-full p-4 text-center">
        © 2023 Copyright :{" "}
        <a href="https://github.com/Nandan-Kumar1" className="underline">
          Nk & Co.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
