import type { employInterfaceAPIINterface } from '../interfaces/employ.interfaces'
import type { apiErrorInterface } from '../interfaces/errorAPI.interfaces'
// import { apiJobs } from '../api/jobsAPI'
import { jobsFakers } from '../fakers/jobsFakers'

export const createJobsList = async (): Promise<(employInterfaceAPIINterface | apiErrorInterface)> => {
  try {
    // const response = await apiEmploy.get(`/v2/offres/search`)
    // console.log('response', response)
    // return {
    //   datas: response.data.resultats
    // } 
    return {
      datas: jobsFakers
    }
  } catch (error) {
    return {
      message: 'error',
      datas: ''
    }
  }
}
