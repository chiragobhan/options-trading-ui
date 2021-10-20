import {
    UserOutlined,
    FireOutlined,
    RiseOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import HomePage from './pages/HomePage/HomePage';
import Betmount from './pages/Betmount/Betmount';
import NewTrades from './components/NewTrades/NewTrades'
import TradesPlayed from './components/TradesPlayed/TradesPlayed'
import TradesTBD from './components/TradesTBD/TradesTBD'
  
export const appSetting = {
    pbAppName: 'Probo',
    pbIcon: './img/probo-logo.svg',
    pbIconAlt: 'Probo Logo',
    pbDownloadAppText: 'Download App',
    pbDownloadAppLink: 'https://probo.in/',
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
        icon: <FireOutlined />,
        slug: '/betmount',
        displayName: 'Challenge',
        component: <Betmount />,
    },
    {
        key: 4,
        icon: <UserOutlined />,
        slug: '/profile',
        displayName: 'My Profile',
        component: '#',
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