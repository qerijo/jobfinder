import config from '../config'

const getUrlWithParamsConfig = (endpointConfig, params) => {
  const { method, uri } = config.client.endpoint[endpointConfig]
  let body = {}

  const apiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  }
  const query = {
    ...params,
  }

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val])
      delete query[val]
      return result
    }
    return acc
  }, apiConfigUri.pathname)

  apiConfigUri.pathname = pathname

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    }
  } else {
    body = query
  }

  return {
    method,
    uri: apiConfigUri,
    body,
  }
}

export default getUrlWithParamsConfig
