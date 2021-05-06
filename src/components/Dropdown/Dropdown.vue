<template>
    <div>
        <ul class="drop-down-menu">
            <li @mouseover="mouseOver" @mouseleave="mouseLeave">
                <a :href="title.link">{{title.name}}</a>
                <transition name="fade">
                    <ul v-if="listOne" @click="listOne = false">
                    <li class="full-width" style="margin:0" v-for="item in menuData" :key="item.name">
                      <a :href="item.link"><span class="text-color">{{item.name}}</span></a>
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
  padding: 10px;
  color: rgb(187, 174, 59);
  text-decoration: none;
}

.full-width {
  width: 100%;
}
.drop-down-menu li {
  display:block;
  float: left;
  position: relative;
  color: rgb(204, 188, 41);
  min-width: 90px;
  line-height: 1.5rem;
 
}

.text-color a:hover  {
  color:  rgb(207, 205, 75) !important;
}

.drop-down-menu li ul {
  position: absolute;
  left: 0;
  top: 50px;
  line-height: 0;
  margin: 0 !important;
  padding: 0;
  background-color: white;
}

.drop-down-menu li ul li {
  transition: background .2s;
}

.drop-down-menu li ul li:hover {
  background: rgb(211, 188, 61);
  color: rgb(211, 188, 61);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>