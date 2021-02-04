Vue.component("carousel", {
  template: "#v-carousel",
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 270,
      items: [
          { name: 'Alonento', place:'SoarTeam', content: '"从最早的Caustic到现在的FL和Live，这些动人的作品见证了Q-Audio的成长"' },
          { name: '大橙子', place: '方块学院', content: '"优秀的团队不会被打倒猫头：优秀的肥宅不会被吹跑"'},
          { name: '左边是我的老婆', place: '网易云音乐', content: '"自从你们回来之后，天都是彩色的，好友列表里空位没了，又可以听到最爱的歌了。带着不满离开，现在又满怀憧憬地归来作曲，真想说一句:我永远爱QAST"'},
          { name: 'Tsing Tao', place: '', content: "Chinese"},
          { name: 'Frances', place: '', content: "French"},
          { name: 'Burma Superstar', place: '', content: "Burmese"},
          { name: 'Salt and Straw', place: '', content: "Ice cream"},
      ]
    }
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  }
});

new Vue({
  el:"#app"
});