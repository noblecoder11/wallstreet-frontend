import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Company Info',
    path: '/company-list',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Your Shares',
    path: '/shares',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Buy / Sell',
    path: '/buysell',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/news',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: <IoIcons.IoMdCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Leaderboard',
    path: '/leaderboard',
    icon: <FaIcons.FaDochub />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoIcons.IoMdLogOut />,
    cName: 'nav-text'
  }
];
