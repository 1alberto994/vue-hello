const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Hello Vue!',
        image:"img/home.svg"
      }
    }
  }).mount('#app')