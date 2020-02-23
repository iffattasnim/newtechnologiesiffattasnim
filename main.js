var app = new Vue({
  el: '#app',
  data: {
    brand: 'Jute',
    product1: 'Rope',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image1: './assets/jute.jpg',
    inStock: true,
    onSale: true,
    details: ['natural jute fiber', 'neutral color', 'hand washable'],

    product2: 'Sandal',
    description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image2: './assets/sandal.jpg',
    inStock: true,
    onSale: true,

    product3: 'yogamat',
    description3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image3: './assets/yogamat.jpg',
    inStock: true,
    onSale: true,
  }, 
  computed: {
    title(){
      return this.brand + '' + this.product1
    }
  },
  computed: {
    title(){
      return this.brand + '' + this.product2
    }
  },
  computed: {
    title(){
      return this.brand + '' + this.product3
    }
  }
})