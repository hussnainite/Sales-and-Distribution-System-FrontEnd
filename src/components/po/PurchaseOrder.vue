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
              <h1 class="text-3xl mb-3">Create a Purchase Order</h1>
              <p class="text-lg">
                Here you can issue a Purchase Order by approving the Purchase
                Request
              </p>
            </div>
          </div>
          <!-- <div class="mx-5 min-h-screen grid place-content-center"></div> -->
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="inserUser()">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="user_name"
                      class="block text-sm font-medium text-gray-700"
                      >User Name</label
                    >
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      v-model="username"
                      autocomplete="given-name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="Password"
                      class="block text-sm font-medium text-gray-700"
                      >Password</label
                    >
                    <input
                      type="password"
                      name="last_name"
                      id="last_name"
                      v-model="password"
                      required
                      autocomplete="family-name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email_address"
                      class="block text-sm font-medium text-gray-700"
                      >Email address</label
                    >
                    <input
                      type="text"
                      name="email_address"
                      id="email_address"
                      required
                      autocomplete="email"
                      v-model="email"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="user_role"
                      class="block text-sm font-medium text-gray-700"
                      >User Role</label
                    >
                    <select
                      id="userrole"
                      required
                      name="userrole"
                      autocomplete="userrole"
                      v-model="userrole"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Admin</option>
                      <option>PR</option>
                      <option>PO</option>
                      <option>Sales</option>
                      <option>Delivery</option>
                      <option>GR</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                      >Phone</label
                    >
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      v-model="phone"
                      required
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      pattern="[\+]\d{2}\d{10}"
                      placeholder="+923350211268"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="Address"
                      class="block text-sm font-medium text-gray-700"
                      >Address</label
                    >
                    <input
                      type="text"
                      name="Address"
                      id="Address"
                      required
                      v-model="address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <label
                    for="Date"
                    class="block text-sm font-medium text-gray-700"
                    >{{ this.Date }}</label
                  >
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
              User ID
            </th>
            <th
              class="px-4 py-4 text-left  text-white text-sm font-medium rounded-lg"
            >
              User Name
            </th>
            <th
              class="px-4 py-4 text-left  text-white text-sm font-medium rounded-lg"
            >
              Email
            </th>
            <th
              class="px-4 py-4 text-left  text-white text-sm font-medium rounded-lg"
            >
              Role
            </th>
            <th
              class="px-4 py-4 text-left text-white text-sm font-medium rounded-lg"
            >
              Password
            </th>
            <th
              class="px-4 py-4 text-left  text-white text-sm font-medium rounded-lg"
            >
              Phone
            </th>
            <th
              class="px-4 py-4 text-left  text-white text-sm font-medium rounded-lg"
            >
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-gray-300 rounded-lg"
            v-for="(user, i) in users"
            :key="user.userid"
          >
            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-base rounded-lg"
            >
              <label class="bg-white px-2 py-4 rounded-md ">
                {{ user.userid }}
              </label>
            </td>
            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-base rounded-lg"
            >
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="user.username"
              />
            </td>

            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-base rounded-lg"
            >
              <input
                type="text"
                value=""
                class="bg-white rounded-md  "
                v-model="user.email"
              />
            </td>
            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-base rounded-lg"
            >
              <select class="bg-white" v-model="user.user_role">
                <option>{{ user.user_role }}</option>
                <option>PR</option>
                <option>Admin</option>
                <option>PO</option>
                <option>Sales</option>
                <option>Delivery</option>
                <option>GR</option>
              </select>
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="user.password"
              />
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="user.phone"
              />
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="user.address"
              />
            </td>
            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-sm justify-end"
            >
              <button
                type="button"
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                v-on:click="updateUser(user)"
              >
                Save</button
              ><button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                v-on:click="deleteUser(user.userid, i)"
              >
                Delete
              </button>
              <div></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurchaseOrder",

  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
