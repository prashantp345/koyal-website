<template>
    <div>
        <ul class="drop-down-menu">
            <li @mouseover="mouseOver" @mouseleave="mouseLeave">
                <a :href="title.link">{{title.name}}</a>
                <transition name="fade">
                    <ul v-if="listOne" @click="listOne = false">
                    <li style="margin:0" v-for="item in menuData" :key="item.name">
                      <a :href="item.link">{{item.name}}</a>
                    </li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        data() {
          return {
            listOne: false
          }
        },
        props: {
          title: {
              name : String,
              link: String
          },
          menuData: {
            type: Array
          }
        },
        methods: {
            mouseOver: function(){
                this.listOne = true;
            },
            mouseLeave: function(){
                this.listOne = false;
            },
        },
    }
</script>

<style scoped>

.drop-down-menu {
  font-weight: 600;
  margin: 0 !important;
  padding: 0;
  list-style: none;
}

.drop-down-menu a {
  display: block;
  padding: 12px;
  color: #fff;
  text-decoration: none;
}

.drop-down-menu li {
  display:block;
  float: left;
  position: relative;
  color: #fff;
  min-width: 180px;
}

.drop-down-menu li ul {
  position: absolute;
  left: 0;
  top: 50px;
  line-height: 0;
  margin: 0 !important;
  padding: 0;
}

.drop-down-menu li ul li {
  transition: background .2s;
}

.drop-down-menu li ul li:hover {
  background: #444;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>