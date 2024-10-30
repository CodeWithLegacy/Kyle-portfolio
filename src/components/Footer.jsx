
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-gray-200 bg-gradient-to-br from-blue-950 to-slate-900 py-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-white text-sm">
            <a
              href="https://vercel.com?utm_source=next-site&utm_medium=footer&utm_campaign=next-website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Powered by <span className="font-semibold ml-1 antialiased">ITPE 4 | WIT-IT</span>
            </a>
          </div>
          <div>
            <h1 className='antialiased'> Copyright © 2024 All Rights Reserved</h1>
          </div>
          <div className="space-x-6 flex items-center">
            <a
              href="https://twitter.com/vercel"
              className="text-gray-500 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.168-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.964 13.964 0 011.671 3.149 4.916 4.916 0 003.15 9.722a4.896 4.896 0 01-2.229-.616c-.053 2.281 1.581 4.415 3.872 4.89a4.904 4.904 0 01-2.224.084 4.92 4.92 0 004.6 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.788-.023-1.175-.068a13.94 13.94 0 007.548 2.211c9.056 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/vercel/next.js"
              className="text-gray-500 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.302-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.302-.536-1.518.117-3.165 0 0 1.008-.322 3.302 1.23a11.54 11.54 0 013.006-.404c1.02.005 2.047.137 3.006.404 2.293-1.552 3.3-1.23 3.3-1.23.654 1.647.242 2.863.118 3.165.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.479 5.922.432.372.816 1.103.816 2.222 0 1.606-.014 2.902-.014 3.293 0 .32.218.694.825.577C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

