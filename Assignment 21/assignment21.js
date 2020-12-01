let tri_base = prompt("What is the base of your triangle?");
let tri_height = prompt("What is the height of your triangle?");
let area_tri = (tri_base*tri_height)/2;

alert(`Area of your rectangle = ${area_tri}`);

// ===========================================================================

let breadth = prompt("What is the breadth of your rectangle?") ;
let length = prompt("What is the length of your rectangle?");
let area_rect = (breadth*length);
let perimeter_rect = 2*(Number(length) + Number(breadth));

alert(`Area of your rectangle = ${area_rect} and perimeter of your rectangle = ${perimeter_rect}`);

// =============================================================================
let side = prompt("What is the length of side of your square?");
let area_sq = (side**2);
let perimeter_sq = (4 * side);

alert(`Area of your square = ${area_sq} and perimeter of your square = ${perimeter_sq}`);

// ==================================================================================

let radius = prompt("What is the radius of your circle?");
let area_circle = ((22/7) * (radius**2));
let circum = (2 * (22/7) * radius);

alert(`Area of your circle = ${area_circle} and circumference of your cicle = ${circum}`);
