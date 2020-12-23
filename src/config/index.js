export const configEndpoint = {
  getVacancies: 'getVacancies',
  getVacancyById: 'getVacancyById',
  getAreas: 'getAreas',
}

const config = {
  client: {
    server: {
      protocol: 'https',
      host: 'api.hh.ru',
    },
    endpoint: {
      [configEndpoint.getVacancies]: {
        method: 'GET',
        uri: {
          pathname: '/vacancies',
        },
      },
      [configEndpoint.getVacancyById]: {
        method: 'GET',
        uri: {
          pathname: '/vacancies/{vacancy_id}',
        },
      },
      [configEndpoint.getAreas]: {
        method: 'GET',
        uri: {
          pathname: '/areas',
        },
      },
    },
  },
}

export default config
