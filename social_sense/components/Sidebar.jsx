import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { PiClipboardText } from "react-icons/pi";
import { IoMdAnalytics } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-3 bg-gray-100 shadow w-60 sticky top-0">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Logo Here</h2>
        </div>
        <div className="flex-1">
          <h4 className="text-gray-400">Menu</h4>
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <IoHomeOutline className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CiCalendar className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Schedule</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
         <PiClipboardText className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>


                <span className="flex-1 ms-3 whitespace-nowrap">
                  Reccomendation
                </span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoMdAnalytics className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Analytics</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                href="logout"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                  <CiUser className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                href="logout"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <CiMail className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                 <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
              </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Theme</span>
              </Link>
            </li>
          </ul>
            <h4  className="text-gray-400">Account</h4>
              <ul>
              <li className="rounded-sm">
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                 <IoSettingsOutline  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
              </Link>
            </li>
              </ul>
        </div>
      </div>
    </div>
  );
}
