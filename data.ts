
export enum OrderState {
  created ='CREATED',
  collected = 'COLLECTED',
  onTheWay = 'ON THE WAY',
  arrived = 'ARRIVED',
  received = 'RECEIVED',
  rejected = 'REJECTED'
}

export enum Categories {
  furniture = 'FURNITURE',
  kitchen = 'KITCHEN',
  homeDecor = 'HOME DECOR'
}



export const goods = [
  {
    id: '1',
    name: 'Sofa',
    url: 'sofa_url',
    description: 'This is a cosy sofa',
    category: Categories.furniture,
    currencyCode: "EUR",
    centAmount: 200
  },
  {
    id: '2',
    name: 'Sofa big',
    url: 'sofa_big_url',
    description: 'This is a big sofa',
    category: Categories.furniture,
    currencyCode: "EUR",
    centAmount: 280
  },
  {
    id: '3',
    name: 'Chair',
    url: 'Chair_url',
    description: 'This is a classic chair',
    category: Categories.furniture,
    currencyCode: "EUR",
    centAmount: 150
  },
  {
    id: '4',
    name: 'Armchair',
    url: 'Armchair_url',
    description: 'This is a comfortable armchair',
    category: Categories.furniture,
    currencyCode: "EUR",
    centAmount: 190
  },
  {
    id: '5',
    name: 'Coffee table',
    url: 'Coffee_table_url',
    description: 'This is a small coffee table for coffee lovers',
    category: Categories.furniture,
    currencyCode: "EUR",
    centAmount: 160
  },
  {
    id: '6',
    name: 'Vase',
    url: 'vase_url',
    description: 'This is a glass vase',
    category: Categories.homeDecor,
    currencyCode: "EUR",
    centAmount: 80
  },
  {
    id: '7',
    name: 'Pot',
    url: 'pot_url',
    description: 'This is a pot for delicious porridge',
    category: Categories.kitchen,
    currencyCode: "EUR",
    centAmount: 30
  },
  {
    id: '8',
    name: 'Kitchen set',
    url: 'Kitchen_set_url',
    description: 'This is a kitchen set 3 meters long',
    category: Categories.kitchen,
    currencyCode: "EUR",
    centAmount: 830
  },
  {
    id: '9',
    name: 'Candle',
    url: 'candle_url',
    description: 'This is a white candle',
    category: Categories.homeDecor,
    currencyCode: "EUR",
    centAmount: 6
  },
  {
    id: '10',
    name: 'Candle',
    url: 'candle_url',
    description: 'This is a white candle',
    category: Categories.homeDecor,
    currencyCode: "EUR",
    centAmount: 6
  },
]

