import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x11f474649CAd48a97F9e4E153816c75df5D7BbAB'
);

export default instance;