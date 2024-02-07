import { recalculateForObserver, recalculateForObserverUTC } from "./program";
// only run the following code if we are in a node environment
import { getCityData } from "./city-na";
console.log('In path');
let cityData = getCityData('Dallas');
if (cityData) {
  recalculateForObserver(cityData.lat, cityData.latDir, cityData.long, cityData.longDir, cityData.alt, 0, 'W');
} else {
  recalculateForObserverUTC(32.783, -96.800, 137); // Dallas, TX
}
console.log('In partial');
cityData = getCityData('San Diego');
if (cityData) {
  recalculateForObserver(cityData.lat, cityData.latDir, cityData.long, cityData.longDir, cityData.alt, 0, 'W');
} else {
  recalculateForObserverUTC(32.715, -117.161, 137); // San Diego, CA
}

console.log('No eclipse');
recalculateForObserverUTC(63.037, -145.469, 100); // Paxson, AK
