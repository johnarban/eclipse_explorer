const cities = [
// "City, State", latd, latm, lats, longd, longm, longs, alt, tz
  ["- - - CANADA - - -",  0,  0,  0,  0,  0,  0,  0,  0],
  ["Alert, NU",  82,  31,   0,  62,  20,   0,  29.0,  -4.0],
  ["Calgary, AB",  51,   3,   0, 114,   5,   0,1079.0,  -7.0],
  ["Charlottetown, PE",  46,  14,   0,  63,   8,   0,  55.2,  -4.0],
  ["Churchill, MB",  58,  46,   0,  94,  10,   0,  28.7,  -6.0],
  ["Edmonton, AB",  53,  33,   0, 113,  28,   0, 676.4,  -7.0],
  ["Fredericton, NB",  45,  58,   0,  66,  39,   0,   8.8,  -4.0],
  ["Halifax, NS",  44,  39,   0,  63,  36,   0,  25.3,  -4.0],
  ["Hamilton, ON",  43,  15,   0,  79,  51,   0, 100.3,  -5.0],
  ["Inuvik, NT",  68,  22,   0, 133,  44,   0,   0.0,  -7.0],
  ["Iqaluit, NU",  63,  44,   0,  68,  28,   0,  33.5,  -5.0],
  ["Kuujjuaq, QC",  58,   6,   0,  68,  25,   0,   0.0,  -5.0],
  ["Lethbridge, AB",  49,  42,   0, 112,  50,   0, 909.8,  -7.0],
  ["London, ON",  42,  59,   0,  81,  14,   0, 250.5,  -5.0],
  ["Montreal, QC",  45,  31,   0,  73,  34,   0,  57.0,  -5.0],
  ["Ottawa, ON",  45,  25,   0,  75,  42,   0, 114.0,  -5.0],
  ["Prince George, BC",  53,  55,   0, 122,  45,   0, 676.0,  -8.0],
  ["Quebec, QC",  46,  49,   0,  71,  14,   0,  72.8,  -5.0],
  ["Regina, SK",  50,  25,   0, 104,  39,   0, 574.2,  -6.0],
  ["Resolute, NU",  74,  41,   0,  94,  54,   0,  67.1,  -6.0],
  ["Saint John's, NF",  47,  34,   0,  52,  43,   0,  64.3,  -3.5],
  ["Saskatoon, SK",  52,   7,   0, 106,  38,   0, 515.1,  -6.0],
  ["Sault Sainte Marie, ON",  46,  31,   0,  84,  20,   0, 179.5,  -5.0],
  ["Thunder Bay, ON",  48,  23,   0,  89,  15,   0, 187.8,  -5.0],
  ["Toronto, ON",  43,  39,   0,  79,  23,   0, 115.5,  -5.0],
  ["Vancouver, BC",  49,  16,   0, 123,   7,   0,  38.7,  -8.0],
  ["Victoria, BC",  48,  25,   0, 123,  22,   0,  17.4,  -5.0],
  ["Whitehorse, YT",  60,  43,   0, 135,   3,   0, 702.0,  -8.0],
  ["Winnipeg, MB",  49,  53,   0,  97,   9,   0, 238.7,  -6.0],
  ["Windsor, ON",  42,  18,   0,  83,   1,   0, 183.8,  -5.0],
  ["Yellowknife, NT",  62,  27,   0, 114,  21,   0, 205.4,  -7.0],
  ["- - - UNITED STATES OF AMERICA - - -",  0,  0,  0,  0,  0,  0,  0,  0],
  ["Albany, NY",  42,  39,   0,  73,  45,   0,  83.8,  -5.0],
  ["Atlanta, GA",  33,  44,   0,  84,  23,   0, 307.8,  -5.0],
  ["Austin, TX",  30,  16,   0,  97,  44,   0, 182.0,  -6.0],
  ["Baltimore, MD",  39,  17,   0,  76,  36,   0,  45.1,  -5.0],
  ["Baton Rouge, LA",  30,  27,   0,  91,   9,   0,  17.4,  -6.0],
  ["Boston, MA",  42,  21,   0,  71,   3,   0,   4.6,  -5.0],
  ["Buffalo, NY",  42,  53,   0,  78,  52,   0, 214.9,  -5.0],
  ["Chicago, IL",  41,  51,   0,  87,  39,   0, 185.0,  -6.0],
  ["Cincinnati, OH",  39,   9,   0,  84,  27,   0, 264.9,  -5.0],
  ["Cleveland, OH",  41,  29,   0,  81,  41,   0, 236.8,  -5.0],
  ["Columbus, OH",  39,  57,   0,  82,  59,   0, 247.5,  -5.0],
  ["Dallas, TX",  32,  46,   0,  96,  47,   0, 167.9,  -6.0],
  ["Denver, CO",  39,  44,   0, 104,  59,   0,1610.3,  -7.0],
  ["Detroit, MI",  42,  20,   0,  83,   3,   0, 192.9,  -5.0],
  ["El Paso, TX",  31,  45,   0, 106,  29,   0,1194.2,  -7.0],
  ["Hartford, CT",  41,  46,   0,  72,  41,   0,  51.5,  -5.0],
  ["Honolulu, HI",  21,  18,   0, 157,  51,   0,   2.1, -10.0],
  ["Houston, TX",  29,  45,   0,  95,  21,   0,  29.3,  -6.0],
  ["Indianapolis, IN",  39,  46,   0,  86,   9,   0, 241.4,  -5.0],
  ["Kansas City, MO",  39,   5,   0,  94,  34,   0, 226.2,  -6.0],
  ["Los Angeles, CA",  34,   3,   0, 118,  14,   0,  29.6,  -8.0],
  ["Louisville, KY",  38,  15,   0,  85,  45,   0, 145.4,  -5.0],
  ["Memphis, TN",  35,   8,   0,  90,   2,   0,  78.6,  -6.0],
  ["Miami, FL",  25,  46,   0,  80,  11,   0,   2.1,  -5.0],
  ["Milwaukee, WI",  43,   2,   0,  87,  54,   0, 204.8,  -6.0],
  ["Minneapolis, MN",  44,  58,   0,  93,  15,   0, 254.2,  -6.0],
  ["Nashville, TN",  36,   9,   0,  86,  47,   0, 179.8,  -6.0],
  ["New Orleans, LA",  29,  57,   0,  90,   4,   0,   0.9,  -6.0],
  ["New York, NY",  40,  43,   0,  74,   1,   0,  40.2,  -5.0],
  ["Oklahoma City, OK",  35,  28,   0,  97,  30,   0, 391.7,  -6.0],
  ["Philadelphia, PA",  39,  57,   0,  75,   9,   0,   1.5,  -5.0],
  ["Phoenix, AZ",  33,  26,   0, 112,   4,   0, 340.5,  -7.0],
  ["Pittsburgh, PA",  40,  26,   0,  79,  59,   0, 227.7,  -5.0],
  ["Portland, OR",  45,  31,   0, 122,  40,   0,   6.4,  -8.0],
  ["Providence, RI",  41,  49,   0,  71,  24,   0,  15.5,  -5.0],
  ["Richmond, VA",  37,  33,   0,  77,  27,   0,  50.0,  -5.0],
  ["Rochester, NY",  43,   9,   0,  77,  36,   0, 166.7,  -5.0],
  ["Sacramento, CA",  38,  34,   0, 121,  29,   0,   9.1,  -8.0],
  ["St. Louis, MO",  38,  37,   0,  90,  11,   0, 163.1,  -6.0],
  ["St. Petersburg, FL",  27,  46,   0,  82,  40,   0,   6.1,  -5.0],
  ["Salt Lake City, UT",  40,  45,   0, 111,  53,   0,1286.3,  -7.0],
  ["San Antonio, TX",  29,  25,   0,  98,  29,   0, 240.2,  -6.0],
  ["San Diego, CA",  32,  42,   0, 117,   9,   0,   4.0,  -8.0],
  ["San Francisco, CA",  37,  46,   0, 122,  25,   0,   2.4,  -8.0],
  ["Seattle, WA",  47,  36,   0, 122,  19,   0, 121.9,  -8.0],
  ["Washington, DC",  38,  53,   0,  77,   2,   0,   4.3,  -5.0],
  ["- - - MEXICO - - -",  0,  0,  0,  0,  0,  0,  0,  0],
  ["Acapulco, MEXICO",  16,  51,   0,  99,  55,   0,   3.0,  -6.0],
  ["Chihuahua, MEXICO",  28,  38,   0, 106,   5,   0,1350.0,  -6.0],
  ["Ciudad de Mexico, MEXICO",  19,  24,   0,  99,   9,   0,2237.2,  -6.0],
  ["Ciudad de Naucalpan, MEXICO",  19,  28,   0,  99,  14,   0,   0.0,  -6.0],
  ["Ciudad Juarez, MEXICO",  31,  44,   0, 106,  29,   0,   0.0,  -6.0],
  ["Ecatepec de Morelos, MEXICO",  19,  35,   0,  99,   4,   0,   0.0,  -6.0],
  ["Guadalajara, MEXICO",  20,  40,   0, 103,  20,   0,1583.1,  -6.0],
  ["Guadalupe, MEXICO",  25,  41,   0, 100,  15,   0,   0.0,  -6.0],
  ["Leon, MEXICO",  21,   7,   0, 101,  40,   0,   0.0,  -6.0],
  ["Merida, MEXICO",  20,  58,   0,  89,  37,   0,  21.9,  -6.0],
  ["Monterrey, MEXICO",  25,  40,   0, 100,  19,   0, 527.9,  -6.0],
  ["Nezahualcoyoytl, MEXICO",  19,  27,   0,  99,   3,   0,   0.0,  -6.0],
  ["Puebla, MEXICO",  19,   3,   0,  98,  12,   0,   0.0,  -6.0],
  ["San Luis Potosi, MEXICO",  22,   9,   0, 100,  59,   0,   0.0,  -6.0],
  ["Tijuana, MEXICO",  32,  32,   0, 117,   1,   0,   0.0,  -6.0],
  ["Tlalnepantla, MEXICO",  19,  33,   0,  99,  12,   0,   0.0,  -6.0],
  ["Torreon, MEXICO",  25,  33,   0, 103,  26,   0,   0.0,  -6.0],
  ["Veracruz, MEXICO",  19,  11,   0,  96,   8,   0,  10.0,  -6.0],
  ["Zapopan, MEXICO",  20,  43,   0, 103,  24,   0,   0.0,  -6.0],
  ["- - - CENTRAL AMERICA - - -",  0,  0,  0,  0,  0,  0,  0,  0],
  ["Alajuela, COSTA RICA",  10,   1,   0,  84,  13,   0,   0.0,  -6.0],
  ["San Jose, COSTA RICA",   9,  56,   0,  84,   5,   0,1146.0,  -6.0],
  ["San Salvador, EL SALVADOR",  13,  42,   0,  89,  12,   0, 682.1,  -6.0],
  ["Santa Ana, EL SALVADOR",  13,  59,   0,  89,  34,   0,   0.0,  -6.0],
  ["Guatemala, GUATEMALA",  14,  38,   0,  90,  31,   0,1479.8,  -6.0],
  ["San Pedro Sula, HONDURAS",  15,  27,   0,  88,   2,   0,   0.0,  -6.0],
  ["Tegucigalpa, HONDURAS",  14,   6,   0,  87,  13,   0,   0.0,  -6.0],
  ["Leon, NICARAGUA",  12,  26,   0,  86,  53,   0,   0.0,  -6.0],
  ["Managua, NICARAGUA",  12,   9,   0,  86,  17,   0,   0.0,  -6.0],
  ["Panama City, PANAMA",   8,  58,   0,  79,  32,   0,   0.0,  -5.0],
  ["- - - CARIBBEAN - - -",  0,  0,  0,  0,  0,  0,  0,  0],
  ["Nassau, BAHAMAS",  25,   5,   0,  77,  21,   0,   3.7,  -5.0],
  ["Bridgetown, BARBADOS",  13,   6,   0,  59,  37,   0,  55.2,  -4.0],
  ["Havana, CUBA",  23,   8,   0,  82,  22,   0,  24.4,  -5.0],
  ["Santiago de Cuba, CUBA",  20,   1,   0,  75,  49,   0,   0.0,  -5.0],
  ["Santiago, DOMINICAN REPUBLIC",  19,  27,   0,  70,  42,   0,   0.0,  -4.0],
  ["Santo Domingo, DOMINICAN REPUBLIC",  18,  28,   0,  69,  54,   0,  17.4,  -4.0],
  ["Saint George's, GRENADA",  12,   3,   0,  61,  45,   0,   0.0,  -4.0],
  ["Basse-Terre, GUADELOUPE",  16,   0,   0,  61,  43,  42,   0.0,  -4.0],
  ["Pointe a Pitre, GUADELOUPE",  16,  14,  18,  61,  31,  30,   0.0,  -4.0],
  ["Port-au-Prince, HAITI",  18,  32,   0,  72,  20,   0,  36.9,  -4.0],
  ["Kingston, JAMAICA",  18,   0,   0,  76,  48,   0,  33.5,  -5.0],
  ["Montego Bay, JAMAICA",  18,  28,   0,  77,  55,   0,   0.0,  -5.0],
  ["Fort-de-France, MARTINIQUE",  14,  36,   0,  61,   5,   0,   4.0,  -4.0],
  ["Oranjestad, Aruba, NETHERLANDS ANTILLES",  12,  31,   0,  70,   2,   0,   0.0,  -4.0],
  ["Willemstad, Curacao, NETHERLANDS ANTILLES",  12,   6,  30,  68,  55,  48,   0.0,  -4.0],
  ["Arecibo, PUERTO RICO",  18,  28,   0,  66,  43,   0,   0.0,  -4.0],
  ["Ponce, PUERTO RICO",  18,   1,   0,  66,  37,   0,   0.0,  -4.0],
  ["San Juan, PUERTO RICO",  18,  28,   0,  66,   7,   0,   4.0,  -4.0],
  ["Castries, ST. LUCIA",  14,   1,   0,  61,   0,   0,   0.0,  -4.0],
  ["Kingstown, ST. VINCENT & GRENADINES",  13,   9,   0,  61,  14,   0,   0.0,  -4.0],
  ["Port-of-Spain, TRINIDAD & TOBAGO",  10,  39,   0,  61,  31,   0,  20.4,  -4.0],
  ["Charlotte Am., St. Thomas, U.S. VIRGIN IS.",  18,  21,   0,  64,  56,   0,   3.4,  -4.0],
  ["Road Town, Tortola, UK VIRGIN IS.",  18,  26,   0,  64,  37,   0,   0.0,  -4.0],
  ["- - - BERMUDA - - -",  0,  0,  0,  0,  0,  0,  0,  0],
  ["Hamilton, BERMUDA",  32,  17,   0,  64,  46,   0,  46.0,  -4.0]
] as  CityTuple[];

// LongList type should be an array with repeating string, number, number, number, number, number, number, number, number
// it must be a multiple of 9 and in the order of city, latd, latm, lats, longd, longm, longs, alt, tz
type CityTuple = [string, number, number, number, number, number, number, number, number];
type CityData = {
    city: string;
    lat: number;
    latDir: 'N' | 'S';
    long: number;
    longDir: 'E' | 'W';
    alt: number;
    tz: number;
    tzDir: 'E' | 'W';
};


function appears(needle: string, haystack: string): boolean {
  // regex
  const re = new RegExp(needle, 'i');
  return re.test(haystack);
}


export function getCityData(city: string): CityData | undefined {
  // array is list of city, latd, latm, lats, longd, longm, longs, alt, tz
  const data = cities.filter((cityData) => appears(city,cityData[0]));
  // check it returned a city
  if (data.length === 0) {
    throw new Error(`City ${city} not found`);
  }
  if (data[0]) {
    const [city, latd, latm, lats, longd, longm, longs, alt, tz] = data[0];
    const latDir = latd > 0 ? 'N' : 'S';
    const longDir = longd > 0 ? 'W' : 'E'; // we are using the programs odd convention of West longitudes being positive
    const tzDir = tz > 0 ? 'W' : 'E'; // we are using the programs odd convention of West timezones being positive
    return {
      city,
      lat: latd + latm / 60 + lats / 3600,
      latDir,
      long: longd + longm / 60 + longs / 3600,
      longDir,
      alt,
      tz,
      tzDir
    };
  }
    
}