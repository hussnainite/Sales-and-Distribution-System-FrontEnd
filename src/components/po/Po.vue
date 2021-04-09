<template>
  <div>
    <div class="leading-normal tracking-normal" id="main-body">
      <div class="flex flex-wrap">
        <SideBar></SideBar>

        <div
          class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
          :class="sideBarOpen ? 'overlay' : ''"
          id="main-content"
        >
          <NavPo></NavPo>
          <div class="bg-white dark:bg-gray-800 ">
            <div
              class="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
            >
              <h2
                class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
              >
                <span class="block">
                  Welcome {{ this.$store.state.session }}</span
                >
                <span class="block text-green-500">
                  MASSNOGIX
                  <h2 class="blocl text-yellow-500">
                    Hardware Trading System
                  </h2>
                </span>
              </h2>
            </div>
          </div>
          <router-view></router-view>
          <div class="p-6 bg-gray-100 mb-20"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SideBar from "./SideBar.vue";
import NavPo from "./NavPo.vue";
export default {
  name: "Po",
  components: { SideBar, NavPo },

  data() {
    return {};
  },
  computed: {
    ...mapState(["sideBarOpen"]),
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
