import {http, getOptions} from './index'
import {PRICES} from "../constants";

export const sendDemand = (email, firstname, lastname, phoneNumber, price, detail) => {
  return http.post('/devis', {
    email,
    firstname,
    lastname,
    phoneNumber,
    price,
    detail
  }, getOptions())
}

export const list = () => {
  return http.get('/devis', getOptions())
    .then(resp => resp.data)
}

export const calculateArea = (area) => {
  const {largeur, longueur} = area

  return Math.ceil((largeur * longueur) * PRICES['area'])
}

export const calculateBedroom = (equipments) => {
  const nbRooms = equipments.filter(equipment => ['bedroomSepareted'].includes(equipment.value)).length
  return nbRooms * PRICES['interiorDoor']
}

export const calculateRoomWater = (equipments) => {
  const nbRooms = equipments.filter(equipment => ['bathroom', 'kitchen'].includes(equipment.value)).length
  return nbRooms * PRICES['room']
}

export const calculateWindow = (windows) => {
  const nbArchs = windows.filter(window => window.type === 'arch').length
  const nbRectangulars = windows.filter(window => window.type === 'rectangular').length

  return (nbArchs * PRICES['window']['arch']) + (nbRectangulars * PRICES['window']['rectangular'])
}

export const calculateEntryDoor = (door) => {
  if (door.type === 'full') {
    return PRICES['entryDoor']['full']
  } else if (door.type === 'semiGlazed') {
    return PRICES['entryDoor']['semiGlazed']
  } else if (door.type === 'glazed') {
    return PRICES['entryDoor']['glazed']
  }
  return 0
}

export const calculateShutter = (windows) => {
  const nbShutters = windows.filter(window => window.shutter).length

  return nbShutters * PRICES['shutter']
}

export const calculateBalcony = (equipments) => {
  if (equipments.findIndex(equipment => equipment.value === 'balcony') > -1) {
    return PRICES['balcony']
  }
  return 0
}

export const calculateRoofing = (roofing, area) => {
  const {largeur, longueur} = area
  const price = PRICES['roofing'][roofing.value]

  return Math.ceil(largeur * longueur * price)
}

export const calculatePrice = ({area, equipments, windows, door, roofing}) => {
  const areaPrice = calculateArea(area)
  const roomWaterPrice = calculateRoomWater(equipments)
  const bedroomPrice = calculateBedroom(equipments)
  const windowPrice = calculateWindow(windows)
  const entryDoorPrice = calculateEntryDoor(door)
  const shutterPrice = calculateShutter(windows)
  const balconyPrice = calculateBalcony(equipments)
  const roofingPrice = calculateRoofing(roofing, area)

  return areaPrice + roomWaterPrice + windowPrice + entryDoorPrice + shutterPrice + balconyPrice + roofingPrice + bedroomPrice
}
