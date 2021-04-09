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
              <h1 class="text-3xl mb-3">Add Item</h1>
              <p class="text-lg">
                Here you can Add new Items and update information of the
                existing Items in the database.
              </p>
            </div>
          </div>
          <!-- <div class="mx-5 min-h-screen grid place-content-center"></div> -->
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form @submit.prevent="inserItem()">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="user_name"
                      class="block text-sm font-medium text-gray-700"
                      >Item Name</label
                    >
                    <input
                      type="text"
                      name="itemname"
                      id="itemname"
                      v-model="itemname"
                      autocomplete="given-name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="units"
                      class="block text-sm font-medium text-gray-700"
                      >Units</label
                    >
                    <input
                      type="text"
                      name="units"
                      id="units"
                      v-model="units"
                      autocomplete="units"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="opquantity"
                      class="block text-sm font-medium text-gray-700"
                      >OP Quantity</label
                    >
                    <input
                      type="text"
                      name="opquantity"
                      id="opquantity"
                      v-model="opquantity"
                      autocomplete="opquantity"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="price"
                      class="block text-sm font-medium text-gray-700"
                      >Price</label
                    >
                    <input
                      type="text"
                      name="price"
                      id="price"
                      autocomplete="price"
                      v-model="price"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="itemgroup"
                      class="block text-sm font-medium text-gray-700"
                      >Item Group</label
                    >
                    <select
                      id="itemgroup"
                      name="itemgroup"
                      autocomplete="itemgroup"
                      v-model="itemgroup"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Computer Hardware</option>
                      <option>Laptop</option>
                      <option>Accessories</option>
                      <option>Security</option>
                      <option>Hazard Prevention</option>
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
      class="w-full px-4 py-8 mx-auto overflow-auto overflow-y-scroll h-96 w-80 rounded-lg "
    >
      <table
        class="w-full table-auto rounded-sm text-black-500 bg-gradient-to-l from-indigo-500 to-green-500 "
      >
        <thead>
          <tr>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Item ID
            </th>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Item Name
            </th>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Units
            </th>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Item Group
            </th>
            <th class="px-4 py-4 text-left text-white text-sm font-medium">
              OP Quantity
            </th>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Price
            </th>
            <th class="px-4 py-4 text-left  text-white text-sm font-medium">
              Inserted Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-gray-300 "
            v-for="(item, i) in items"
            :key="item.itemid"
          >
            <label class="bg-white px-3 py-1 m-2 my-2 rounded-md  text-base ">
              {{ item.itemid }}
            </label>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="item.itemname"
              />
            </td>

            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md  "
                v-model="item.units"
              />
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <select class="bg-white">
                <option>{{ item.item_group }}</option>
                <option>Computer Hardware</option>
                <option>Laptop</option>
                <option>Accessories</option>
                <option>Security</option>
                <option>Hazard Prevention</option>
              </select>
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="item.op_quantity"
              />
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="item.price"
              />
            </td>
            <td class="px-2 py-4 border-t border-b border-gray-300 text-base">
              <input
                type="text"
                value=""
                class="bg-white rounded-md "
                v-model="item.inserted_date"
              />
            </td>
            <td
              class="px-2 py-4 border-t border-b border-gray-300 text-sm justify-end"
            >
              <button
                type="button"
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                v-on:click="updateItem(item)"
              >
                Save</button
              ><button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                v-on:click="deleteItem(item.itemid, i)"
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
  name: "Items",

  data() {
    return {
      items: [],
      name: "Items",
      itemname: "",
      units: "",
      opquantity: "",
      price: "",
      itemgroup: "",
    };
  },
  mounted() {
    fetch("https://localhost:44359/api/items")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
      });
  },
  methods: {
    reset() {
      this.itemnamee = "";
      this.price = "";
      this.units = "";
      this.opquantity = "";
      this.itemgroup = "";
    },
    updateItem(item) {
      fetch("https://localhost:44359/api/items/" + item.itemid, {
        body: JSON.stringify(item),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        this.fetchData();
      });
      alert("Item Updated Succesfully");
    },
    deleteItem(itemid, i) {
      fetch("https://localhost:44359/api/items/" + itemid, {
        method: "DELETE",
      }).then(() => {
        this.items.splice(i, 1);
      });
      alert("Item Deleted Successfully");
    },
    fetchData() {
      fetch("https://localhost:44359/api/items")
        .then((response) => response.json())
        .then((data) => {
          this.items = data;
        });
    },
    async inserItem() {
      var currentDate = new Date();
      if (
        this.itemnamee === "" ||
        this.price === "" ||
        this.units === "" ||
        this.opquantity === "" ||
        this.itemgroup === ""
      ) {
        alert("Kindly fill all the fields");
      } else if (/^.{0,3}$/.test(this.itemname)) {
        alert("kindly choose a name with 3 or more alphabets");
      } else {
        await fetch("https://localhost:44359/api/items/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemname: this.itemname,
            units: this.units,
            inserted_date: currentDate,
            price: this.price,
            item_group: this.itemgroup,
            op_quantity: this.opquantity,
          }),
        }).then((response) => response.json()),
          this.fetchData();
        alert("Item successfully added");
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
