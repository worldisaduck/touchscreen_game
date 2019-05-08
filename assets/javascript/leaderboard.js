Vue.component('leaderboard', {
  data: function() {
    return {
      username: 'Bob',
    }
  },
  props: ['userTime'],
  template: `
    <div>
      <input v-model="username" placeholder="Enter you name"></input>
    </div>
  `
});