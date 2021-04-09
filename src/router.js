import Vue from "vue";
import Router from "vue-router";

import Admin from "./components/admin/Admin";
import BusinessPartner from "./components/admin/BusinessPartner";
import Users from "./components/admin/Users";
import Items from "./components/admin/Items";
import Login from "./components/login/Login.vue";
import Po from "./components/po/Po.vue";
import PurchaseOrder from "./components/po/PurchaseOrder.vue";
import PurchaseReq from "./components/po/PurchaseReq.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      mode: "history",
    },
    {
      path: "/po",
      name: "Po",
      component: Po,
      mode: "history",
      children: [
        {
          path: "purchaserequistion",
          name: "PurchaseReq",
          component: PurchaseReq,
        },
        {
          path: "purchaseorder",
          name: "PurchaseOrder",
          component: PurchaseOrder,
        },
      ],
    },

    {
      path: "/admin",
      name: "Admin",
      component: Admin,

      children: [
        {
          path: "businesspartner",
          name: "businesspartner",
          component: BusinessPartner,
        },
        {
          path: "users",
          name: "users",
          component: Users,
        },
        {
          path: "items",
          name: "items",
          component: Items,
        },
      ],
    },
  ],
});
