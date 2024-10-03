import AppleLogo from '../images/Apple.png';
import MicrosoftLogo from '../images/Microsoft.png';
import AmazonLogo from '../images/Amazon.png';
import GoogleLogo from '../images/Google.png';
import FacebookLogo from '../images/Facebook.png';
import IBMLogo from '../images/IBM.png';
import CocaColaLogo from '../images/Cocacola.png';
import NikeLogo from '../images/Nike.png';
import JohnsonJohnsonLogo from '../images/JohnsonJohnson.png';          
import ToyotaLogo from '../images/Toyota.png';
import ProcterGambleLogo from '../images/ProcterGamble.png';
import PepsiCoLogo from '../images/PepsiCo.png';
import SonyLogo from '../images/Sony.png';
import SunRunLogo from '../images/SunRun.png';
// Import other logos as needed

const logoMap = {
  'Apple': AppleLogo,
  'Microsoft': MicrosoftLogo,
  'Amazon': AmazonLogo,
  'Google': GoogleLogo,
  'Facebook': FacebookLogo,
  'IBM': IBMLogo,
  'Coca-Cola': CocaColaLogo,
  'Nike': NikeLogo,
  'Johnson & Johnson': JohnsonJohnsonLogo,
  'Toyota': ToyotaLogo,
  'Procter & Gamble': ProcterGambleLogo,
  'PepsiCo': PepsiCoLogo,
  'Sony': SonyLogo,
  'SunRun': SunRunLogo,
  // Add other client names and their corresponding logos
};

export function getClientLogo(clientName) {
  return logoMap[clientName] || '/OfferManagementApp/client/src/images/SunRun.png';
}