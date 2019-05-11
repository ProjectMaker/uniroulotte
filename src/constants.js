export const SIGNIN_USER = 'SIGNIN_USER'
export const SIGNIN_USER_START = 'SIGNIN_USER_START'
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS'
export const SIGNIN_USER_ERROR = 'SIGNIN_USER_ERROR'
export const SIGNOUT_USER = 'SIGNOUT_USER'
export const SIGNOUT_USER_SUCCESS = 'SIGNOUT_USER_SUCCESS'
export const RETRIEVE_CURRENT_USER = 'RETRIEVE_CURRENT_USER'
export const RETRIEVE_CURRENT_USER_SUCCESS = 'RETRIEVE_CURRENT_USER_SUCCESS'
export const FETCH_QUOTATIONS = 'FETCH_QUOTATIONS'
export const FETCH_QUOTATIONS_START = 'FETCH_QUOTATIONS_START'
export const FETCH_QUOTATIONS_SUCCESS = 'FETCH_QUOTATIONS_SUCCESS'
export const FETCH_QUOTATIONS_ERROR = 'FETCH_QUOTATIONS_ERROR'
export const CHANGE_SIMULATION_PROCESS = 'CHANGE_SIMULATION_PROCESS'
export const CALCULATE_SIMULATION_PRICE = 'CALCULATE_SIMULATION_PRICE'
export const RESET_SIMULATION = 'RESET_SIMULATION'
export const SEND_SIMULATION = 'SEND_QUOTATION'
export const SEND_SIMULATION_START = 'SEND_SIMULATION_START'
export const SEND_SIMULATION_SUCCESS = 'SEND_SIMULATION_SUCCESS'
export const SEND_SIMULATION_ERROR = 'SEND_SIMULATION_ERROR'

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

export const SHIPPING_FORM_VALIDATORS = {
  email: {
    email: {
      message: 'L\' email n\' est pas valide'
    }
  },
  emailConfirm: {
    equality: {
      attribute: "email",
      message: 'Les emails doivent être identiques'
    },
  },
  firstname: {
    length: {
      minimum: 1,
      tooShort: 'Le prénom est obligatoire'
    }
  },
  lastname: {
    presence: {
      allowEmpty: false,
      message: 'Le nom est obligatoire'
    }
  },
  phoneNumber: {
    format: {
      pattern: "[0-9]*",
      flags: "i",
      message: "Le numéro de téléphone ne doit contenir que des chiffres"
    }
  }
}

export const SIGNIN_FORM_VALIDATORS = {
  email: {
    email: {
      message: 'L\' email n\' est pas valide'
    }
  },
  password: {
    length: {
      minimum: 5,
      tooShort: 'Le mot de passe doit contenir au minimum 8 caractères'
    }
  }
}
