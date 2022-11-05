import type { employInterfaceAPIINterface } from '../interfaces/employ.interfaces'
import type { apiErrorInterface } from '../interfaces/errorAPI.interfaces'
// import { apiEmploy } from '../api/employAPI'
import { employsFakers } from '../fakers/employsFakers'

export const createJobsList = async (): Promise<(employInterfaceAPIINterface | apiErrorInterface)> => {
  try {
    // const response = await apiEmploy.get(`/v2/offres/search`)
    // console.log('response', response)
    // return {
    //   datas: response.data.resultats
    // } 
    return {
      datas: employsFakers
    }
  } catch (error) {
    return {
      message: 'error',
      datas: ''
    }
  }
}
