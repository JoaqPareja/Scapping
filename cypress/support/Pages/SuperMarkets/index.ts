


import DvtHomePage from "./dvt/homepage"
export const dvtHomePage = new DvtHomePage();
import DvtDeConstructCoffeePage from "./dvt/coffeePage/1.getPostProducts"
export const dvtDeConstructCoffePage = new DvtDeConstructCoffeePage();

//Create Basic Global Elements
//Call Global Elements in test file with name of the page you want to visit
//Then Create specific object page from specific class page
//Then call the globalFunctions from the gntStoreProducts, to store the products and crete/update Json
//Then create the specific object page from the global recounstruictProducts 
//passing the argument needed From the class 

//Basic elements
import GntGlobalElements from "./gnt/001.pageElements/globalElements/004.gntGlobalElements";
export const gntGlobalElements = new GntGlobalElements();

//Creating specific object from Specific Atun elements class
import AtunPage from "./gnt/002.productsPages/atunPage/atunPage"
export const gntAtunPageElements = new AtunPage();

//Creating specific object from Specific Coffe elements class
import CoffePage from "./gnt/002.productsPages/coffeePage/coffePage"
export const gntCoffePageElements = new CoffePage();

//Creating specific object from Specific Wine elements class
import WinePage from "./gnt/002.productsPages/winePage/winePage"
export const gntWinePageElements = new WinePage();

import GntStoreProducts from "./gnt/003.gntStoreProducts/GntStoreProducts";
export const gntStoreProducts = new GntStoreProducts();

import GntReConstructProducts from "./gnt/004.reCreateProducts/reCreateProducts";
//Reconstruct Atun page object
export const gntReConstructAtunPage= new GntReConstructProducts(gntAtunPageElements.gntRawJson); 
//Reconstruct Coffe page object
export const gntReConstructCoffeProducts= new GntReConstructProducts(gntCoffePageElements.gntRawJson); 
//Reconstruct Wine page object
export const gntReConstructWinePage = new GntReConstructProducts(gntWinePageElements.gntRawJson); 


