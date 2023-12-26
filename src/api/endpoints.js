const PATH = 'http://localhost:1337/api'

const Endpoints = {
  PATH: PATH,
  AUTH: {
    LOGIN: `${PATH}/auth/local`,
    REFRESH: `${PATH}/refresh`,
    LOGOUT: `${PATH}/logout`,
    PROFILE: `${PATH}/users/me`,
    REGISTER: `${PATH}/auth/local/register`
  }
}

export default Endpoints
