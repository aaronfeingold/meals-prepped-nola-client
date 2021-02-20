import axios from 'axios'

export const loginStatus = () => {
  axios.get('http://127.0.0.1:3001/users', 
  {withCredentials: true})
  .then(response => {
    if (response.data.logged_in) {
      this.handleLogin(response)
    } else {
      this.handleLogout()
    }
  })
  .catch(error => console.log('api errors:', error))
}