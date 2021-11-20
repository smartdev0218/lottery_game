const LotteryGame = artifacts.require("LotteryGame");

module.exports =  async function(deployer) {
    await deployer.deploy(LotteryGame, "0x87Ffc48C9f89fc5dfA05836e083406D684FD6331", "0x8c6375aab6e5b26a30bf241ebbf29ad6e6c503c2");
}