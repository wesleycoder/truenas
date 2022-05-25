import ky from 'ky'

const { VITE_TRUENAS_API: TRUENAS_API, VITE_TRUENAS_API_KEY: TRUENAS_API_KEY } = import.meta.env

export default ky.create({
  prefixUrl: TRUENAS_API,
  headers: {
    Authorization: `Bearer ${TRUENAS_API_KEY}`,
    accept: '*/*',
  },
})
