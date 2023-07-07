<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
import {SystemStore} from "./store/system";
import {watchEffect} from "vue";

// console.log(systemStore().theme)

let systemStore = SystemStore()


// 挂载组件后立即执行设置系统主题
watchEffect(() => {
  if (systemStore.isDarkTheme) {
    document.body.setAttribute("arco-theme", "dark")
  } else {
    document.body.removeAttribute('arco-theme');
  }
})
</script>

<template>
<!--  <div v-permission="1"></div>-->
  <img id="logo"  alt="Wails logo" src="./assets/images/logo-universal.png"/>
<!--  <HelloWorld/>-->
  <router-view></router-view>
</template>

<style>
#logo {
  display: block;
  width: 50%;
  height: 50%;
  margin: auto;
  padding: 10% 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-origin: content-box;
}
</style>
