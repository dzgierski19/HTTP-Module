import { HttpService } from "./HTTPService";

export type userData = Record<string, any>;

export const customConfig = {
  baseURL: "https://ethereum.org/",
};

const https = new HttpService(customConfig);
// console.log(https);
// Promise.all([
//   https.get("/en/wallets/find-wallet/"),
//   https.get("/en/wallets/find-wallet/"),
//   https.get("/en/wallets/find-wallet/"),
// ]);

console.log(1);

(async () => {
  console.log(3);
  await https.get("/en/wallets/find-wallet/");
  console.log(5);
  await https.get("/en/wallets/find-wallet/");
  await https.get("/en/wallets/find-wallet/");
  console.log(6);
})();

(async () => {
  await https.get("/en/wallets/find-wallet/");
  console.log(4);
  await https.get("/en/wallets/find-wallet/");
})();

console.log(2);

// https.get("/en/wallets/find-wallet/").then((result) => {
//   https.get("/en/wallets/find-wallet/").then((result) => {
//     https.get("/en/wallets/find-wallet/").then((result) => {});
//   });
// });
