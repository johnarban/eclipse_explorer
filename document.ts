/* eslint-disable @typescript-eslint/no-explicit-any */
export interface JSEXDocument {
  eclipseform: {
    latd: { value: string | number  };
    latm: { value: string | number  };
    lats: { value: string | number  };
    lond: { value: string | number  };
    lonm: { value: string | number  };
    lons: { value: string | number  };
    alt: { value: string  | number };
    latx: { options: { [x: string]: any }; selectedIndex: number  };
    lonx: { options: { [x: string]: any }; selectedIndex: number  };
    tzm: { options: { [x: string]: any }; selectedIndex: number };
    tzh: { options: { [x: string]: any }; selectedIndex: number };
    tzx: { options: { [x: string]: any }; selectedIndex: number };
    loc_name: { value: string };
    cityndx: { value: any; selectedIndex: number };
  };
  createElement: (arg0: string | number) => any;
  createTextNode: (arg0: string | number ) => any;
  getElementById: (arg0: string | number) => any;
  getElementsByTagName: (arg0: string | number) => any[];
}
