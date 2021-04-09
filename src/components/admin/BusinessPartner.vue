<template>
  <div>
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-10 sm:px-0">
            <div
              class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto"
            >
              <h1 class="text-3xl mb-3">Create Business Partner</h1>
              <p class="text-lg">
                Here you can create new Business Partner and update information
                of the existing Business Partner in the database.
              </p>
            </div>
          </div>
          <!-- <div class="mx-5 min-h-screen grid place-content-center"></div> -->
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="insertPartner()">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700"
                      >Partner Name</label
                    >
                    <input
                      type="text"
                      name="partnername"
                      id="partnername"
                      v-model="partnername"
                      autocomplete="partnername"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                      >Phone</label
                    >
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      pattern="[\+]\d{2}\d{10}"
                      required
                      v-model="phone"
                      autocomplete="phone"
                      placeholder="+923350211268"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="address"
                      class="block text-sm font-medium text-gray-700"
                      >Address</label
                    >
                    <input
                      type="text"
                      name="address"
                      id="address"
                      required
                      v-model="address"
                      autocomplete="address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                      >Email</label
                    >
                    <input
                      type="text"
                      name="email"
                      id="email"
                      required
                      autocomplete="email"
                      v-model="email"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="ledgertype"
                      class="block text-sm font-medium text-gray-700"
                      >Partner Type</label
                    >
                    <select
                      id="partnertype"
                      name="partnertype"
                      autocomplete="partnertype"
                      required
                      v-model="partnertype"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Vendor</option>
                      <option>Customer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="w-full px-4 py-8 mx-auto overflow-auto overflow-y-scroll h-96 w-80  "
    >
      <table
        class="w-full table-auto rounded-sm text-black-500 bg-gradient-to-l from-indigo-500 to-green-500"
      >
        <thead>
          <tr>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Partner Name
            </th>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Phone Number
            </th>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Partner Type
            </th>
            <th class="px-4 py-4 text-left text-white text-sm font-medium">
              Email
            </th>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Address
            </th>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Inserted Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-gray-300"
            v-for="(ledger, i) in ledgers"
            :key="ledger.ledgerid"
          >
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="ledger.ledger_name"
              />
            </td>

            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md  "
                v-model="ledger.legder_phone"
              />
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <select class="bg-white" v-model="ledger.ledger_type">
                <option>{{ ledger.ledger_type }}</option>
                <option>Vendor</option>
                <option>Customer</option>
              </select>
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="ledger.ledger_email"
              />
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="ledger.ledger_address"
              />
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="ledger.inserted_date"
              />
            </td>
            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-sm justify-end"
            >
              <button
                type="button"
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                v-on:click="updatePartner(ledger)"
              >
                Save</button
              ><button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                v-on:click="deletePartner(ledger.ledgerid, i)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessPartner",

  data() {
    return {
      ledgers: [],
      name: "BusinessPartner",
      partnername: "",
      phone: "",
      partnertype: "",
      address: "",
      email: "",
      //eslint-disable-next-line
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  mounted() {
    fetch("https://localhost:44359/api/ledgers")
      .then((response) => response.json())
      .then((data) => {
        this.ledgers = data;
      });
  },
  methods: {
    reset() {
      this.partnername = "";
      this.phone = "";
      this.partnertype = "";
      this.address = "";
      this.email = "";
    },
    updatePartner(ledger) {
      fetch("https://localhost:44359/api/ledgers/" + ledger.ledgerid, {
        body: JSON.stringify(ledger),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        this.fetchData();
      });
      alert("Business partner info updated successfully");
    },

    deletePartner(ledgerid, i) {
      fetch("https://localhost:44359/api/ledgers/" + ledgerid, {
        method: "DELETE",
      }).then(() => {
        this.ledgers.splice(i, 1);
      });
      alert("Business partner deleted successfully");
    },
    fetchData() {
      fetch("https://localhost:44359/api/ledgers")
        .then((response) => response.json())
        .then((data) => {
          this.ledgers = data;
        });
    },
    async insertPartner() {
      var currentDate = new Date();
      if (
        this.partnername == "" ||
        this.phone == "" ||
        this.partnertype == "" ||
        this.address == "" ||
        this.email == ""
      ) {
        alert("Kindly fill all the fields");
      } else if (!this.reg.test(this.email)) {
        alert("kindly write proper email address");
      } else if (/^.{0,10}$/.test(this.address)) {
        alert("kindly write full address");
      } else if (/^.{0,2}$/.test(this.partnername)) {
        alert("kindly choose a name with 3 or more alphabets");
      } else {
        await fetch("https://localhost:44359/api/ledgers/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ledger_name: this.partnername,
            legder_phone: this.phone,
            inserted_date: currentDate,
            ledger_type: this.partnertype,
            ledger_address: this.address,
            ledger_email: this.email,
          }),
        }).then((response) => response.json());
        this.fetchData();
        alert("Business partner successfully created  " + this.partnername);
        this.reset();
      }
    },
  },
};
</script>

<style scoped>
table {
  width: 50px;
  height: 2vh;
}
</style>
