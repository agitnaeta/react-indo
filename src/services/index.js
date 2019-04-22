import Axios from 'axios'

export const loadMovies = async ()=>{
    let url = "https://facebook.github.io/react-native/movies.json"
    let data = await Axios.get(url)
    return Promise.resolve(data)
}