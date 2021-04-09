<template>
  <div>
    <div class="font-sans" v-if="log">
      <div
        class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 "
      >
        <div class="relative sm:max-w-sm w-full">
          <div
            class="card bg-gradient-to-r from-red-400 to-green-500  shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"
          ></div>
          <div
            class="card bg-gradient-to-r from-green-400 to-purple-500  shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"
          ></div>
          <div
            class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md"
          >
            <label
              for=""
              class="block text-sm text-gray-700 text-center font-semibold"
            >
              Login
            </label>
            <form @submit.prevent="loginUser()" class="mt-10">
              <div>
                <input
                  type="username"
                  v-model="loguser"
                  placeholder="Enter your username"
                  class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div class="mt-7">
                <input
                  type="password"
                  v-model="logpassword"
                  placeholder="Enter your password"
                  class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <!-- <div class="mt-7 flex">
                <label
                  for="remember_me"
                  class="inline-flex items-center w-full cursor-pointer"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="remember"
                  />
                  <span class="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>

                <div class="w-full text-right">
                  <a
                    class="underline text-sm text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    ¿Olvido su contraseña?
                  </a>
                </div>
              </div> -->

              <div class="mt-7">
                <button
                  class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Login
                </button>
              </div>

              <!-- <div class="flex mt-7 items-center text-center">
                <hr class="border-gray-300 border-1 w-full rounded-md" />
                <label class="block font-medium text-sm text-gray-700 w-full">
                  Accede con
                </label>
                <hr class="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div class="flex mt-7 justify-center w-full">
                <button
                  class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Facebook
                </button>

                <button
                  class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Google
                </button>
              </div> -->
              <div>
                <div class="mt-7" v-for="login in logins" :key="login.userid">
                  <div class="flex justify-center items-center">
                    <label class="w-full text-sm text-gray-600"
                      >Forgot your password?</label
                    >
                    <a
                      href="#"
                      class="w-full text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Talk to admin
                    </a>

                    <label>{{ login.user_role }}</label>
                  </div>

                  <label>Hello</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Admin from "./admin/Admin.vue";

export default {
  name: "Login",
  // components: {
  //   Admin,
  // },
  data() {
    return {
      login: [],
      loguser: "",
      logpassword: "",
      logRole: "",
      edit: false,
      log: true,
      logname: "",
      uid: "",
    };
  },
  mounted() {
    fetch("https://localhost:44359/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.loguser,
        password: this.logpassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.login = data;
      });
  },
  methods: {
    async loginUser() {
      await fetch("https://localhost:44359/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.loguser,
          password: this.logpassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          data.forEach((el) => (this.login = el.user_role));
          data.forEach((el) => (this.logname = el.username));
          data.forEach((el) => (this.uid = el.userid));
          console.log(this.logname);

          if (this.login === "admin") {
            // this.log = false;
            this.$store.state.session = this.logname;
            this.$store.state.sessionid = this.uid;
            this.$store.state.sessionrole = this.login;
            console.log(this.$store.state.session);
            console.log(this.$store.state.sessionid);
            console.log(this.$store.state.sessionrole);

            this.$router.push("Admin").catch(() => {});
          }

          if (this.login === "PO") {
            // this.log = false;
            this.$store.state.session = this.logname;
            this.$store.state.sessionid = this.uid;
            this.$store.state.sessionrole = this.login;
            console.log(this.$store.state.session);
            console.log(this.$store.state.sessionid);
            console.log(this.$store.state.sessionrole);

            this.$router.push("Po").catch(() => {});
          }

          if (this.login == 0) {
            alert("Wrong Username or Password");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
