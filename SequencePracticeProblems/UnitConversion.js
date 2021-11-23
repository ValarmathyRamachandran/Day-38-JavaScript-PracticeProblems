// Unit Conversion
// a. Converting inch to feet 
let feet = 12; // 12 inches means 1 feet
let inch = 42;

let inchToFeet = inch / feet;
console.log("Unit Conversion of  inches To feet : " + inchToFeet);

// b.Rectangular Plot of 60 feet x 40 feet in meters
let length = 60;
let breadth = 40;
let oneMeterInFeet = 3.28084;

console.log("Rectangular Plot Length " + length + " Feet");
console.log("Rectangular Plot Breadth " + breadth + " Feet");

let areaInFeet = length * breadth;
console.log("Total Rectangular plot Area in Feet : " + areaInFeet);

let areaInMeters = (areaInFeet / oneMeterInFeet);
console.log("Total Rectangular plot area in meters : " + areaInMeters);

// c.Calculate area of 25 such plots in acres
let acreArea = 25 * areaInMeters;
console.log("Area of 25 plots in meters : " + acreArea);

// 1 acre = 4046.86 sq meters
let area = (acreArea / 4046.86);
console.log("Area of 25 plots in acers is : " + area);