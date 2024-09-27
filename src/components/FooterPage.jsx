import React from "react";

const FooterPage = () => {
  return (
    <div className="relative">
    <footer className="absolute bottom-0 left-0 right-0">
      <div className="flex justify-center items-center pt-10 pb-5 h-20">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()}&nbsp;
          GadgetHub&nbsp; All rights reserved.
        </p>
      </div>
    </footer>
  </div>
  );
};

export default FooterPage;
