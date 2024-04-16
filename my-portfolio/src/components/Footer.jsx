import { FaXTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-purple-200 py-4">
      <div className="align-element flex flex-rpw justify-between items-center">
        <div className="flex gap-x-4">
          <a href="http://x.com/ai_for_success" target="_blank">
            <FaXTwitter className="h-6 w-6 text-slate-500 hover:text-purple-800 duration-300" />
          </a>
          <a href="https://www.youtube.com/@AIForSuccess" target="_blank">
            <FaYoutube className="h-6 w-6 text-slate-500 hover:text-purple-800 duration-300" />
          </a>
        </div>
        <div className="text-purple-600">© 2023 Ashutosh Shrivastava</div>
      </div>
    </footer>
  );
};

export default Footer;
