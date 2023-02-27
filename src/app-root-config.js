import { registerApplication, start } from "single-spa";

registerApplication({
  name: "security",
  app: () => import("security/Security"),
  activeWhen: ["#/security", () => ["#/", ""].includes(location.hash)],
});
registerApplication({
  name: "agrodatai",
  app: () => import("agrodatai/Agrodatai"),
  activeWhen: "#/agrodatai",
});
registerApplication({
  name: "origin",
  app: () => import("origin/Origin"),
  activeWhen: "#/origin",
});
start({
  urlRerouteOnly: true,
});
