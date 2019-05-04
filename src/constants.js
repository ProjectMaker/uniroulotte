export const SIGNIN_USER = 'SIGNIN_USER'
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS'
export const SIGNIN_USER_ERROR = 'SIGNIN_USER_ERROR'
export const SIGNOUT_USER = 'SIGNOUT_USER'
export const SIGNOUT_USER_SUCCESS = 'SIGNOUT_USER_SUCCESS'
export const RETRIEVE_CURRENT_USER = 'RETRIEVE_CURRENT_USER'
export const RETRIEVE_CURRENT_USER_SUCCESS = 'RETRIEVE_CURRENT_USER_SUCCESS'

export const PRICES = {
  area: 1300,
  interiorDoor: 2000,
  room: 5000,
  window: {
    arch: 2000,
    rectangular: 1000
  },
  entryDoor: {
    full: 1000,
    semiGlazed: 1500,
    glazed: 2000
  },
  shutter: 1000,
  balcony: 3000,
  roofing: {
    zinc: 150,
    tolecintree: 125,
    tolegalva: 75
  }
}


export const EQUIPMENTS = [
  {label: 'Chambre / Pièce de vie', value: 'bedroom'},
  {label: 'Chambre séparée', value: 'bedroomSepareted', canHaveDoor: true, door: false},
  {label: 'Salle de bain', value: 'bathroom', canHaveDoor: true, door: false},
  {label: 'Cuisine', value: 'kitchen', canHaveDoor: true, door: false},
  {label: 'Balcon', value: 'balcony'}
]

export const ROOFING = [
  {label: 'Tôles plates galvanisées', value: 'tolegalva'},
  {label: 'Tôles cintrées type bac acier', value: 'tolecintree'},
  {label: 'Zinc à joint debout', value: 'zinc'}
]

export const WINDOWS = [
  {label: 'Rectangulaire', value: 'rectangular'},
  {label: 'Cintrée', value: 'arch'}
]
