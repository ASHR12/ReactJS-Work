// import { links } from "../data";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { loading, cmsdata } = useGlobalContext();
  const item = cmsdata && cmsdata[0]; // This will safely check if cmsdata is defined and has at least one item.
  if (!item) {
    return; // Display a message if no data is found
  }
  console.log("links", item.links);
  if (loading) {
    return;
  }
  return (
    <nav className="bg-purple-200 ">
      <div className="align-element py-4 md:flex md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl font-bold">
          Ashutosh <span className="text-purple-600">Shrivastava</span>
        </h2>
        <div className="flex gap-x-3">
          {item.links && (
            <>
              {item.links.map((link, index) => {
                const { href, text } = link;
                return (
                  <a
                    key={index} // Assign a unique key using the id of the link
                    href={href}
                    className="capitalize text-lg tracking-wide hover:text-purple-600 duration-300"
                  >
                    {text}
                  </a>
                );
              })}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
