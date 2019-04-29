import localforage from 'localforage'

window.localforage = localforage

export default {
  async addCurrentUser(user) {
    await localforage.setItem('currentUser', user)
  },

  async getCurrentUser() {
    return await localforage.getItem('currentUser')
  },

  async clear() {
    await localforage.clear()
  }
}
