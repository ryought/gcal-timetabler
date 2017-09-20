var demo = new Vue({
  el: '#demo',
  data: {
    master: 'hoge'
  },
  methods: {
    hoge: function(master) {
      console.log(master);
    },
    reverse: function() {
      this.master = this.master.split('').reverse().join('');
    }
  }
});
