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
    <div className="text-white text-base uppercase font-medium fixed right-7 top-1/3">
      <div className="flex flex-col items-end gap-5">
        <div className="flex items-center justify-center group">
          <FontAwesomeIcon
            className=" bg-accent rounded-full group-hover:rounded-l-2xl group-hover:rounded-r-full py-4 px-4 z-10"
            icon={faHomeLg}
          />
          <span className="hidden group-hover:block fixed right-14 group-hover:bg-accent py-3 pl-8 pr-6 rounded-l-full rounded-r-4xl -z-10">
            Home
          </span>
        </div>

        <div className="flex items-center justify-center group">
          <FontAwesomeIcon
            className="bg-grayLight group-hover:bg-accent rounded-full group-hover:rounded-l-2xl group-hover:rounded-r-full py-4 px-4 z-10"
            icon={faUser}
          />
          <span className="hidden group-hover:block fixed right-14 group-hover:bg-accent py-3 pl-8 pr-6 rounded-l-full rounded-r-4xl -z-10">
            About
          </span>
        </div>

        <div className="flex items-center justify-center group">
          <FontAwesomeIcon
            className="bg-grayLight group-hover:bg-accent rounded-full group-hover:rounded-l-2xl group-hover:rounded-r-full py-4 px-4 z-10"
            icon={faBriefcase}
          />
          <span className="hidden group-hover:block fixed right-14 group-hover:bg-accent py-3 pl-8 pr-6 rounded-l-full rounded-r-4xl -z-10">
            Portfolio
          </span>
        </div>

        <div className="flex items-center justify-center group">
          <FontAwesomeIcon
            className="bg-grayLight group-hover:bg-accent rounded-full group-hover:rounded-l-2xl group-hover:rounded-r-full py-4 px-4 z-10"
            icon={faEnvelopeOpen}
          />
          <span className="hidden group-hover:block fixed right-14 group-hover:bg-accent py-3 pl-8 pr-6 rounded-l-full rounded-r-4xl -z-10">
            Contact
          </span>
        </div>

        <div className="flex items-center justify-center group">
          <FontAwesomeIcon
            className="bg-grayLight group-hover:bg-accent rounded-full group-hover:rounded-l-2xl group-hover:rounded-r-full py-4 px-4 z-10"
            icon={faMessage}
          />
          <span className="hidden group-hover:block fixed right-14 group-hover:bg-accent py-3 pl-8 pr-6 rounded-l-full rounded-r-4xl -z-10">
            Blog
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navmenu;
