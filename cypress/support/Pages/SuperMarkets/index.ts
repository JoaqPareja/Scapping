


import DvtHomePage from "./dvt/homepage"
export const dvtHomePage = new DvtHomePage();

import DvtDeConstructCoffeePage from "./dvt/coffePage/1.getPostProducts"
export const dvtDeConstructCoffePage = new DvtDeConstructCoffeePage();

//Basic elements
import GntGlobalElements from "./gnt/001.pageElements/005.gntGlobalElements";
export const gntGlobalElements = new GntGlobalElements();

//Creating specific object from Specific Coffe elements class
import CoffePage from "./gnt/002.productsPages/coffeePage/coffePage"
export const gntDeConstructCoffePage = new CoffePage();

//Creating specific object from Specific Atun elements class
import AtunPage from "./gnt/002.productsPages/atunPage/atunPage"
export const gntDeConstructAtunPage = new AtunPage();

//Creating specific object from Specific Wine elements class
import WinePage from "./gnt/002.productsPages/winePage/winePage"
export const gntDeConstructWinePage = new WinePage();

import GntStoreProducts from "../SuperMarkets/gnt/003.gntStoreProducts/GntStoreProducts";
export const gntStoreProducts = new GntStoreProducts();

import GntReConstructProducts from "../SuperMarkets/gnt/004.reCreateProducts/reCreateProducts"
export const gntReConstructCoffeProducts= new GntReConstructProducts(gntDeConstructCoffePage.gntRawJsonCoffee); 
