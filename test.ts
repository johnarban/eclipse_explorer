import { recalculateForObserver, recalculateForObserverUTC } from "./program";
// only run the following code if we are in a node environment
import { getCityData } from "./city-na";
const cityData = getCityData('Dallas');
if (cityData) {
  recalculateForObserver(cityData.lat, cityData.latDir, cityData.long, cityData.longDir, cityData.alt, 0, 'W');
} else {
  recalculateForObserverUTC(32.783, 'N', 96.800, 'W', 137); // Dallas, TX
}