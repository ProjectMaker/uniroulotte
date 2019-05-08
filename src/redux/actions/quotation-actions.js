import {
  FETCH_QUOTATIONS,
  FETCH_QUOTATIONS_SUCCESS,
  FETCH_QUOTATIONS_ERROR
} from '../../constants'


export const fetchQuotations = () => {
  return {
    type: FETCH_QUOTATIONS
  }
}

export const fetchQuotationsSuccess = (quotations) => {
  return {
    type: FETCH_QUOTATIONS_SUCCESS,
    quotations
  }
}

export const fetchQuotationsError = (error) => {
  return {
    type: FETCH_QUOTATIONS_ERROR,
    error
  }
}
