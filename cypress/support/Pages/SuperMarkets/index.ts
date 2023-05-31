


import DvtHomePage from "../SuperMarkets/dvt/homepage"
export const dvtHomePage = new DvtHomePage();
// dvt/ /dvt/coffePage/1.getPostProducts
import DvtDeConstructCoffeePage from "../SuperMarkets/dvt/coffePage/1.getPostProducts"
export const dvtDeConstructCoffePage = new DvtDeConstructCoffeePage();

//Create Basic Global Elements
//Call Global Elements in test file with name of the page you want to visit
//Then Create specific object page from specific class page
//Then call the globalFunctions from the gntStoreProducts, to store the products and crete/update Json
//Then create the specific object page from the global recounstruictProducts 
//passing the argument needed From the class 

//Basic elements
///gnt/001.pageElements/005.gntGlobalElements";
import GntGlobalElements from "../SuperMarkets/gnt/001.pageElements/005.gntGlobalElements";
export const gntGlobalElements = new GntGlobalElements();

//Creating specific object from Specific Coffe elements class
//./gnt/002.productsPages/coffeePage/coffePage"
import CoffePage from "../SuperMarkets/gnt/002.productsPages/coffeePage/coffePage"
export const gntDeConstructCoffePage = new CoffePage();

//Creating specific object from Specific Atun elements class
//gnt/002.productsPages/atunPage/atunPage"
import AtunPage from "../SuperMarkets/gnt/002.productsPages/atunPage/atunPage"
export const gntDeConstructAtunPage = new AtunPage();

//Creating specific object from Specific Wine elements class
//./gnt/002.productsPages/winePage/winePage
import WinePage from "../SuperMarkets/gnt/002.productsPages/winePage/winePage"
export const gntDeConstructWinePage = new WinePage();

import GntStoreProducts from "../SuperMarkets/gnt/003.gntStoreProducts/GntStoreProducts";
export const gntStoreProducts = new GntStoreProducts();


import GntReConstructProducts from "../SuperMarkets/gnt/004.reCreateProducts/reCreateProducts";
//Reconstruct Coffe page
export const gntReConstructCoffeProducts= new GntReConstructProducts(gntDeConstructCoffePage.gntRawJson); 
//Reconstruct Atun page
export const gntReConstructAtunPage= new GntReConstructProducts(gntDeConstructAtunPage.gntRawJson); 
//Reconstruct Wine page
export const gntReConstructWinePage = new GntReConstructProducts(gntDeConstructWinePage.gntRawJson); 


