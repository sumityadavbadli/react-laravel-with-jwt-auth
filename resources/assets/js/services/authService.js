import axios from 'axios'

export function login(credentials) {
  return dispatch => (
      new Promise((resolve,reject) => {
              axios.post('http://laravel-jwt.dev/api/auth/login', credentials)
                  .then((res) => {
                      console.log(res.data);
                      return resolve();
                  })
                  .catch((error) => {
                      reject(error);
                      console.log(error)
                  })
          }
      )
  )
}