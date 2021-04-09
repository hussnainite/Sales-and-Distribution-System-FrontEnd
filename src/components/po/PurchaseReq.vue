/* eslint-disable no-unused-vars */
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
              class="bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto"
            >
              <h1 class="text-3xl mb-3">Create a Purchase Requisition</h1>
              <p class="text-lg">
                Here you can create a Purchase Requisition by filling the
                following fields
              </p>
            </div>
          </div>
          <!-- <div class="mx-5 min-h-screen grid place-content-center"></div> -->
        </div>

        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="createPR()">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="user_name"
                      class="block text-sm font-medium text-gray-700 w-full mt-1 "
                      >Purchase Requisition Name</label
                    >

                    <input
                      type="text"
                      name="pr_name"
                      id="pr_name"
                      required
                      v-model="prName"
                      autocomplete="given-name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="bussinesspartner"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Business Partners</label
                    >
                    <select
                      id="ledgername"
                      required
                      name="ledgername"
                      autocomplete="ledgername"
                      v-model="ledgername"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option
                        v-for="ledger in ledgers"
                        :key="ledger.ledgerid"
                        >{{ ledger.ledger_name }}</option
                      >
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="itemName"
                      class="block text-sm font-medium text-gray-700"
                      >Items</label
                    >
                    <select
                      id="itemName"
                      required
                      name="itemname"
                      autocomplete="itemname"
                      v-model="itemname"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option v-for="item in items" :key="item.itemid">{{
                        item.itemname
                      }}</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="user_role"
                      class="block text-sm font-medium text-gray-700"
                      >Price</label
                    >
                    <label
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      Price
                    </label>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="user_name"
                      class="block text-sm font-medium text-gray-700"
                      >Quantity</label
                    >
                    <input
                      type="text"
                      name="pr_name"
                      id="pr_name"
                      required
                      v-model="prQuantity"
                      autocomplete="given-name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Issue
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Warning code starts here -->
    <!-- <div
      class="alert flex flex-row items-center bg-yellow-200 p-5 rounded border-b-2 border-yellow-300"
      v-if="showmodel"
    >
      <div
        class="alert-icon flex items-center bg-yellow-100 border-2 border-yellow-500 justify-center h-10 w-10 flex-shrink-0 rounded-full"
      >
        <span class="text-yellow-500">
          <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div class="alert-content ml-4">
        <div class="alert-title font-semibold text-lg text-yellow-800">
          Warning
        </div>
        <div class="alert-description text-sm text-yellow-600">
          You are about to change user information - Do you still want to
          proceed?
          <button
            class="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-yellow-900 rounded-lg focus:shadow-outline hover:bg-green-700"
            v-on:click="showModal()"
          >
            Proceed
          </button>
        </div>
      </div>
    </div> -->
    <!-- warning code ends here -->
    <div
      class="w-full px-4 py-8 mx-auto overflow-auto overflow-y-scroll h-96 w-80 rounded-lg "
    >
      <table
        class="w-full table-auto rounded-sm text-black-500 bg-gradient-to-l from-indigo-500 to-green-500 rounded-lg"
      >
        <thead>
          <tr>
            <th
              class="px-4 py-4 text-left  text-white text-sm font-medium rounded-lg"
            >
              Request ID
            </th>
            <th
              class="px-4 py-4 text-left  text-white text-sm font-medium rounded-lg"
            >
              Ledger ID
            </th>
            <th
              class="px-4 py-4 text-left  text-white text-sm font-medium rounded-lg"
            >
              User ID
            </th>
            <th
              class="px-4 py-4 text-left  text-white text-sm font-medium rounded-lg"
            >
              Inserted Date
            </th>
            <th
              class="px-4 py-4 text-left text-white text-sm font-medium rounded-lg"
            >
              Document Name
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-gray-300 rounded-lg"
            v-for="pr in prs"
            :key="pr.request_id"
          >
            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-base rounded-lg"
            >
              <label class="bg-white px-2 py-4 rounded-md ">
                {{ pr.request_id }}
              </label>
            </td>
            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-base rounded-lg"
            >
              <label class="bg-white px-2 py-4 rounded-md ">
                {{ pr.ledger_id }}
              </label>
            </td>

            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-base rounded-lg"
            >
              <label class="bg-white px-2 py-4 rounded-md ">
                {{ pr.requested_user }}
              </label>
            </td>
            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-base rounded-lg"
            >
              <label class="bg-white px-2 py-4 rounded-md ">
                {{ pr.inserted_date }}
              </label>
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <label class="bg-white px-2 py-4 rounded-md ">
                {{ pr.pr_name }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "PurchaseReq",
      items: [],
      ledgers: [],
      prs: [],
      ledgername: "",
      prName: "",
      itemname: "",
      ledgid: "",
      itemid: "",
      price: "",
      prQuantity: "",
      prid: "",
      status: "pending",
    };
  },
  mounted() {
    fetch("https://localhost:44359/api/items")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
      });

    fetch("https://localhost:44359/api/ledgers")
      .then((response) => response.json())
      .then((data) => {
        this.ledgers = data;
      });
    fetch("https://localhost:44359/api/purchasereq")
      .then((response) => response.json())
      .then((data) => {
        this.prs = data;
      });
  },
  methods: {
    authLedger() {
      fetch("https://localhost:44359/api/ledgerauth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ledger_name: this.ledgername,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          data.forEach((el) => (this.ledgid = el.ledgerid));
          this.$store.state.ledgerid = this.ledgid;
          console.log(this.ledgid);
        });
    },
    authItem() {
      fetch("https://localhost:44359/api/itemauth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemname: this.itemname,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          data.forEach((el) => (this.itemid = el.itemid));
          data.forEach((el) => (this.price = el.price));
          this.$store.state.itemid = this.itemid;
          this.$store.state.price = this.price;
          console.log(this.itemid, "this is itemid");
          console.log(this.price), "This is item price";
        });
    },
    insertPR() {
      var currentDate = new Date();

      fetch("https://localhost:44359/api/purchasereq/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ledger_id: this.$store.state.ledgerid,
          requested_user: this.$store.state.sessionid,
          inserted_date: currentDate,
          pr_name: this.prName,
        }),
      }).then((response) => response.json());
    },

    authPR() {
      fetch("https://localhost:44359/api/reqauth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pr_name: this.prName,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          data.forEach((el) => (this.prid = el.request_id));
          this.$store.state.prrequestid = this.prid;
          console.log(this.prid, "this is prid");
        });
    },

    insertPRD() {
      fetch("https://localhost:44359/api/purchasereqdetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_id: this.itemid,
          quantity: this.prQuantity,
          price: this.price,
          pr_request_id: this.prid,
          inserted_date: Date,
          status: "Pending",
        }),
      }).then((response) => response.json());
    },
    createPR() {
      setTimeout(() => this.authLedger(), 1000);
      setTimeout(() => this.authItem(), 1000);
      setTimeout(() => this.insertPR(), 1000);
      setTimeout(() => this.authPR(), 2000);
      setTimeout(() => this.insertPRD(), 3000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
