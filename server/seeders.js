const dotenv = require("dotenv");
const Products = require("./data/products");
const PRODUCTS = require("./model/Products");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await PRODUCTS.deleteMany();

    const sampleProducts = Products.map((item) => {
      return { ...item };
    });

    await PRODUCTS.insertMany(sampleProducts);

    console.log(`Data Imported`);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await PRODUCTS.deleteMany();

    console.log(`Data Destroyed`);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
