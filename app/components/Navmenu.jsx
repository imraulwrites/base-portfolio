import Link from 'next/link';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import {
  faBriefcase,
  faHome,
  faHomeLg,
  faMessage,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Navmenu() {
  return (
    <div className="text-white text-base uppercase font-medium fixed right-7 top-1/3 ">
      <ul className="flex flex-col items-end gap-5 ">
        <Link href="/">
          <li className="flex items-center justify-center group h-12">
            <FontAwesomeIcon
              className="bg-accent rounded-full py-4 px-4 z-10 group-hover:rounded-l-xl transition-all duration-300"
              icon={faHomeLg}
            />
            <span className="bg-accent fixed right-7 text-xs h-12 py-4 pl-8 pr-6 opacity-0 rounded-4xl group-hover:rounded-r-xs group-hover:right-14 group-hover:opacity-100 transition-all duration-300">
              Home
            </span>
          </li>
        </Link>
        <Link href="/about">
          <li className="flex items-center justify-center group">
            <FontAwesomeIcon
              className="bg-grayLight group-hover:bg-accent rounded-full py-4 px-4 z-10 group-hover:rounded-l-xl transition-all duration-300"
              icon={faUser}
            />
            <span className="bg-accent fixed right-7 text-xs h-12 py-4 pl-8 pr-6 opacity-0 rounded-4xl group-hover:rounded-r-xs group-hover:right-14 group-hover:opacity-100 transition-all duration-300">
              About
            </span>
          </li>
        </Link>

        <Link href="/portfolio">
          <li className="flex items-center justify-center group">
            <FontAwesomeIcon
              className="bg-grayLight group-hover:bg-accent rounded-full py-4 px-4 z-10 group-hover:rounded-l-xl transition-all duration-300"
              icon={faBriefcase}
            />
            <span className="bg-accent fixed right-7 text-xs h-12 py-4 pl-8 pr-6 opacity-0 rounded-4xl group-hover:rounded-r-xs group-hover:right-14 group-hover:opacity-100 transition-all duration-300">
              Portfolio
            </span>
          </li>
        </Link>

        <Link href="/contact">
          <li className="flex items-center justify-center group">
            <FontAwesomeIcon
              className="bg-grayLight group-hover:bg-accent rounded-full py-4 px-4 z-10 group-hover:rounded-l-xl transition-all duration-300"
              icon={faEnvelopeOpen}
            />
            <span className="bg-accent fixed right-7 text-xs h-12 py-4 pl-8 pr-6 opacity-0 rounded-4xl group-hover:rounded-r-xs group-hover:right-14 group-hover:opacity-100 transition-all duration-300">
              Contact
            </span>
          </li>
        </Link>

        <Link href="/blog">
          <li className="flex items-center justify-center group">
            <FontAwesomeIcon
              className="bg-grayLight group-hover:bg-accent rounded-full py-4 px-4 z-10 group-hover:rounded-l-xl transition-all duration-300"
              icon={faMessage}
            />
            <span className="bg-accent fixed right-7 text-xs h-12 py-4 pl-8 pr-6 opacity-0 rounded-4xl group-hover:rounded-r-xs group-hover:right-14 group-hover:opacity-100 transition-all duration-300">
              Blog
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navmenu;
