////////////////////////////////
//          CHARGERS          //
////////////////////////////////
setInterval(autogain, 1)


////////////////////////////////
//            VARS            //
////////////////////////////////
//basic
var legacy = 0;

//light auto
var baseClickerGain = 0.1;
var baseOrbGain = 1;
var baseFarmGain = 8;
var baseMineGain = 10;
var baseFactoryGain = 1;
var baseBankGain = 1;
var baseLabGain = 1;
var baseSageTowerGain = 1;
var basePrismGain = 1;

//medium auto

//heavy auto

//counts
var clickers = 0;
var orbs = 0;
var farm = 0;
var mine = 0;
var factory = 0;
var bank = 0;
var lab = 0;
var sageTower = 0;
var prism = 0;
var crysalizationBiosphere = 0;
var converterter = 0;
var summoner = 0;
var hatredCompressor = 0;
var universe = 0;
var empire = 0;

//numbers
const suffixes = [
  '',
  ' thousand',
  ' million',
  ' billion',
  ' trillion'
  ]
//upgrades

//skins

//achevments

//number stuff

//season stuff
////////////////////////////////
//           INSTAS           //
////////////////////////////////
console.log("Hello There!")


////////////////////////////////
//          FUNCTIONS         //
////////////////////////////////
function gain() {
  legacy++;
  let displayPoints = legacy;
  for (let i = suffixes.length - 1; i >= 1; i--) {
    const limit = Math.pow(10, i * 3);
    if (legacy >= limit) {
      displayPoints = (legacy / limit).toFixed(1) + suffixes[i];
      break;
    }
  }
  circle.innerText = "😈 - " + displayPoints;
  master.innerText = displayPoints + " Legacy Points - LoathsomeLegacy";
}

function clickerBuy() {

}

////////////////////////////////
//         AUTO POINTS        //
////////////////////////////////
function autogain() { 
  if (clickers>0) {
  legacy = legacy + baseClickerGain;
  }
}
