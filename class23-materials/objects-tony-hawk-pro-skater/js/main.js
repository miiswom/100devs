//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkCharacter(chName, chStance, chSponsor, chMove) {
  this.characterName = chName,
  this.characterStance = chStance,
  this.characterSponsor = chSponsor,
  this.characterMove = chMove,
  
  this.flip = function() {
    console.log('Kickflip!');
  },
  this.taunt = function() {
    console.log(`Don't make me use my ${chMov}!`);
  },
  this.grab = function() {
    console.log('MELON GRABB');
  }
};

let kareemCampbell = new TonyHawkCharacter('Kareem', 'Goofy', 'Element', 'Ghetto Bird');
