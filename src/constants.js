import {
    UserOutlined,
    RiseOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import HomePage from './pages/HomePage/HomePage';
import Profile from './pages/Profile/Profile';
import NewTrades from './components/NewTrades/NewTrades'
import TradesPlayed from './components/TradesPlayed/TradesPlayed'
import TradesTBD from './components/TradesTBD/TradesTBD'
  
export const appSetting = {
    pbAppName: 'Betmount',
    pbIcon: './img/btm-logo.png',
    pbIconAlt: 'Betmount Logo',
    pbDownloadAppText: 'Download App',
    pbDownloadAppLink: 'https://betmount.com/',
    pbDownloadAppIcon: <DownloadOutlined />,
    howToTradeText: 'How to Trade?',
    howToTradeDrawerTitle: 'How to Trade?',
};

export const navMenu = [
    {
        key: 2,
        icon: <RiseOutlined />,
        slug: '/trades',
        displayName: 'Trades',
        component: <HomePage />,
    },
    {
        key: 3,
        icon: <UserOutlined />,
        slug: '/profile',
        displayName: 'My Profile',
        component: <Profile />,
    }
];

export const tabList = [
    {
    key: 'newTrades',
    tab: 'New Trades',
    },
    {
    key: 'tradesPlayed',
    tab: 'Trades Played',
    },
    {
    key: 'tradesTBD',
    tab: 'Trades TBD',
    },
];

export const contentList = {
    newTrades: <NewTrades />,
    tradesPlayed: <TradesPlayed />,
    tradesTBD: <TradesTBD />,
};