const Backhome = () => {
  return (
    <div>
      <a
        href="#home"
        className="fixed bottom-5 right-5 p-3 bg-purple-400 text-white rounded-full hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </div>
  );
};

export default Backhome;
