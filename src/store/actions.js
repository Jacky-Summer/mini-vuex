import { SET_TITLE } from './mutation-types'
import axios from 'axios'

export const getTitle = async ({ commit }) => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  commit(SET_TITLE, result.data.title)
}
