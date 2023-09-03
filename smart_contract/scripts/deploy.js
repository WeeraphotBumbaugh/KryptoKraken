const hre = require("hardhat");

const main = async () => {
  const Transactions = await hre.ethers.deployContract("Transactions");
  await Transactions.waitForDeployment();

  //await transactions.deployed();

  console.log("Transactions deployed to: ", await Transactions.getAddress());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
