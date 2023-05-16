import { defineStore } from 'pinia'

const userlogInStore = defineStore('login', {
  state: () => ({
    username: 'username',
    password: '123456'
  }),
  // 发送网络请求
  actions: {}
})

export default userlogInStore