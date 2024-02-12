import { ReactElement, useState } from 'react';
import { ChatList } from '../../components/ChatList/ChatList';
import { ChatSection } from '../../components/ChatSection/ChatSection';
import { useTranslation } from 'react-i18next';
import { handleBlur, handleFocus } from '../../util/inputHelper';
import { EmptySectionState } from '../../components/ChatSection/EmptySectionState';

export const Home: React.FC = (): ReactElement => {
  const { t } = useTranslation();
  const [id, setId] = useState<{
    userId?: string;
    groupId?: string;
  }>({
    userId: undefined,
    groupId: undefined,
  });

  return (
    <div className="h-full max-w-screen">
      <nav className="flex flex-col bg-gray-600 shadow-lg h-screen fixed top-0 left-0 min-w-[350px] py-6 px-4 font-[sans-serif] overflow-auto">
        <div className="flex space-x-4 mb-3">
          <button className="flex-1 border border-solid border-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
            0
          </button>
          <button className="flex-1 border border-solid border-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
            0
          </button>
          <button className="flex-1 border border-solid border-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
            0
          </button>
        </div>
        <input
          className="border rounded p-2 w-full text-center placeholder-center text-white"
          style={{ backgroundColor: '#242424' }}
          placeholder={t('home.placeholder.searchChats')}
          onFocus={handleFocus}
          onBlur={(event) =>
            handleBlur(event, t, 'home.placeholder.searchChats')
          }
        />
        <div className="flex-1 flex flex-col">
          <ChatList
            onClick={(userId?: string, groupId?: string) =>
              setId({ userId, groupId })
            }
          />
        </div>
      </nav>
      <div className="h-full margin-left ml-[350px]">
        {!id || (id.userId === undefined && id.groupId === undefined) ? (
          <EmptySectionState className="h-full w-full flex justify-center place-items-center" />
        ) : (
          //TODO: justify-between not needed anymore, when messages are loaded
          <ChatSection className="h-full w-full flex flex-col justify-between" />
        )}
      </div>
    </div>
  );
};

// How to hide sidebar
// import React, { ReactElement, useState } from 'react';

// export const Home: React.FC = (): ReactElement => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <div className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${sidebarVisible ? '' : 'hidden'}`}>
//       {/* ... restlicher Code ... */}
//       <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}></i>
//       {/* ... restlicher Code ... */}
//     </div>
//   );
// };

// sidebar with content
{
  /* <nav className="bg-gray-600 shadow-lg h-screen fixed top-0 left-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto">
      <ul>
        <li>
          <a
            href="javascript:void(0)"
            className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
          >
            Dashboard
          </a>
        </li>
      </ul>
      <div className="mt-4">
        <h6 className="text-blue-600 text-sm font-bold px-4">Information</h6>
        <ul className="mt-2">
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Audience
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Posts
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Schedules
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Promote
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h6 className="text-blue-600 text-sm font-bold px-4">Income</h6>
        <ul className="mt-2">
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Earnings and taxes
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Refunds
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Declines
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Payouts Details
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h6 className="text-blue-600 text-sm font-bold px-4">Actions</h6>
        <ul className="mt-2">
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav> */
}
