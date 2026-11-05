// Fleet data for Pune.CarRentals.
//
// HOW TO ADD REAL PHOTOS:
// 1. Drop your car photo into /public/cars/  (e.g. public/cars/thar.jpg)
// 2. Set that car's `image` field below to '/cars/thar.jpg'
// Until an image is set, the site shows a colored icon placeholder instead —

export const fleet = [
  {
    id: "thar",
    name: "Mahindra Thar",
    note: "2 units available — Black",
    accent: "#1A1A1A",
    price: 5000,
    tags: ["4x4", "Adventure"],
    tagline: "Adventure awaits",
    image: "/cars/Thar1.jpeg",
    cut: "/cars/cut/Thar1.png",
  },
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    note: "White",
    accent: "#E7E2D6",
    price: 12000,
    tags: ["Premium SUV", "Long trips"],
    tagline: "The icon of SUVs",
    image: "/cars/Fortuner.jpeg",
    cut: "/cars/cut/Fortuner.png",
  },
  {
    id: "verna",
    name: "Hyundai Verna",
    note: "White",
    accent: "#E7E2D6",
    price: 3000, // TODO: confirm your real daily rate
    tags: ["Sedan", "Comfort"],
    tagline: "Smooth, stylish sedan",
    image: "/cars/Verna.jpeg",
    cut: "/cars/cut/Verna.png",
  },
  {
    id: "creta",
    name: "Hyundai Creta",
    note: "White",
    accent: "#E7E2D6",
    price: 3500,
    tags: ["SUV", "Comfort"],
    tagline: "Smooth city & highway comfort",
    image: "/cars/Creta.jpeg",
    cut: "/cars/cut/Creta.png",
  },
  {
    id: "carens",
    name: "Kia Carens",
    note: "White",
    accent: "#E7E2D6",
    price: 4000,
    tags: ["7-seater", "Family"],
    tagline: "Room for the whole family",
    image: "/cars/Carens.jpeg",
    cut: "/cars/cut/Carens.png",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    note: "White",
    accent: "#E7E2D6",
    price: 3500,
    tags: ["7-seater", "Family"],
    tagline: "Practical and spacious",
    image: "/cars/Ertiga.jpeg",
    cut: "/cars/cut/Ertiga.png",
  },
];
