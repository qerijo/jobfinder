import Url from 'url'
import axios from 'axios'
import getUrlWithParamsConfig from './getUrlWithParamsConfig'

const req = async (endpoint, query) => {
  const { method, uri, body } = getUrlWithParamsConfig(endpoint, query)

  const options = {
    method,
  }

  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body)
  }

  const result = await axios(Url.format(uri), options)

  return result.data
}

export default req
