
const verses = {
  hope: {
    0: {
      verse: "It is You we worship and You we ask for help --- (2:110).",
      image: "https://images.pexels.com/photos/67101/pexels-photo-67101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    1: {
      verse: "Those who say, when afflicted with a calamity, \"We belong to Allah and to Him we shall return\" --- (2:156)",
      image: "https://images.pexels.com/photos/45848/kumamoto-japan-aso-cloud-45848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    2: {
      verse: "Prophet, if My servants ask you about Me, I am near. I respond to those who call Me, so let them respond to Me, and believe in Me, so that they may be guided --- (2:186).",
      image: "https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  fear: {
    0: {
      verse: "Keep up the prayer and pay the prescribed charity. Whatever good you store up for yourselves, you will find it with God. He sees everything you do --- (2:110)", 
      image: "https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    1: {
      verse: "God is the ally of those who believe: He brings them out of the depths of darkness and into the light… --- (2:257)",
      image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    2: {
      verse: "You are sure to be tested through your possessions and persons. You are sure to hear much that is hurtful from those who were given the Scripture before you and from those who associate others with God. If you are steadfast and mindful of God, that is the best course (3:186).",
      image: "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  },
  love: {
    0: {
      verse: "…God is Most Compassionate and Most Merciful towards people",
      image: "https://images.pexels.com/photos/1249586/pexels-photo-1249586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    1: {
      verse: "So remember Me; I will remember you… --- (2:152)",
      image: "https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    2: {
      verse: "…It is God Who is your Protector; He is the Best of Helpers --- (3:150)",
      image: "https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  }
};

class Poster {
  constructor(verse, id, tag, source, img) {
    this.verse = verse,
    this.id = id,
    this.tag = tag,
    this.source = source,
    this.img = img
  };
};

// --- THE TAGS ---

const hopeTag = document.querySelector("#hope-tag");
const fearTag = document.querySelector("#fear-tag");
const loveTag = document.querySelector("#love-tag");

hopeTag.addEventListener("click", () => { 
  getAndDisplayRandomVerse(verses.hope)});
fearTag.addEventListener("click", () => { 
  getAndDisplayRandomVerse(verses.fear)} );
loveTag.addEventListener("click", () => { 
  getAndDisplayRandomVerse(verses.love)});

function getAndDisplayRandomVerse(tag) {
  //console.log(tag[( Math.floor(Math.random() * 3 ))].verse);
  let current = tag[( Math.floor(Math.random() * 3 ))]
verseQuote.textContent = `${current.verse}`;

document.querySelector("#background").style.backgroundImage = `url(${current.image})`;
document.querySelector("#background").style.backgroundSize = "100%";
document.querySelector("#background").style.backgroundRepeat = "fixed";


console.log(`${current.image}`)
}

// --- THE MODAL ---

const verseQuote = document.querySelector("#verse");
const verseImg = document.querySelector("#img");


