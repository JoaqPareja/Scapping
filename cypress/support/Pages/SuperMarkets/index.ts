


import DvtHomePage from "./Dvt/homepage"
export const dvtHomePage = new DvtHomePage();

import GntHomePage from "./Gnt/homepage";
export const gntHomePage = new GntHomePage();

import GntDeConstructCoffeePage from "./Gnt/coffeePage/1.getPostProducts"
export const gntDeConstructCoffePage = new GntDeConstructCoffeePage();

import GntReConstructProducts from "./Gnt/reCreateProducts/reCreateProducts"
export const gntReConstructCoffeProducts= new GntReConstructProducts(gntDeConstructCoffePage.gntRawJsonCoffee); 

import DvtDeConstructCoffeePage from "./Dvt/coffePage/1.getPostProducts"
export const dvtDeConstructCoffePage = new DvtDeConstructCoffeePage();

import GntStoreProducts from "./Gnt/GntStoreProducts/GntStoreProducts";
export const gntStoreProducts = new GntStoreProducts()