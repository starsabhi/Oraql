'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Answers",
      [
        {content: "I absolutely do not. Every bit of 'evidence' I've seen has a perfectly natural explanation, is the result of people seeing what they want to see or hear what they want to hear, or outright fakery and manipulation. As with 'exorcists' and 'demon experts,' the 'ghosthunters' are deluded at best and after your money at worst.", userId: 1, questionId: 1, createdAt: '2019-11-07', updatedAt: '2019-11-07'},
        {content: "Because I have had encounters with ghosts. Plural. I know what I experienced and cannot explain them as anything else.", userId: 2, questionId: 1, createdAt: '2021-03-31', updatedAt: '2021-03-31'},
        {content: "I don't believe in them as such, but I have seen one. Or perhaps it was just a reflection of the past? Let me explain. About ten years ago I was on looking round a grand country estate called Castle Ward in Northern Ireland.  You may have seen it on Game of Thrones as Winterfell Castle. It was a very bright sunny day, early afternoon. I was with my wife and mother in law and we were up near an odd little building in the grounds, a type of old tower. The wind coming off the shore was quite cold, so we sat down in the lee of this building and rested for a bit. My wife and her mother were chatting about gardening or something, and as I turned to look at them to join in the conversation a figure walked between me and them and quickly disappeared. I can' describe it only as a figure, possibly male, wearing a great coat with large buttons down the sides. There was little of it, like a very badly faded old photograph. I could not make out a head, and the image was faded below the knees. It was only there for a few moments in bright sunlight, passing between me and my wife who were perhaps eighteen inches apart. It was so unexpected that I inadvertently blurted out I think I have just seen a ghost.", userId: 3, questionId: 1, createdAt: '2021-02-20', updatedAt: '2021-02-20'},
        {content: "I didn't actually see the Angel, only experienced the effects of their presence. I was 6 or 7 at the time and doing something incredibly stupid (as most young boys do at one time or another) I was playing around on a railroad track. I happened to look up and saw a train coming straight for me and it was very close ( think across your living room close) I started to run and all the sudden just felt a rush of wind and I was now about 1/4 of a mile away. I know I was unable to run that fast as I saw the train going past where I was only moments before. This situation has been permanently embedded in my mind since then (over 50 years ago) and I see it as clear now as I did then. I know some will say it was my imagination, or the train wasn't that close, or something like that, but I clearly remember moving but my feet were not on the ground. Now either I learned to fly or something picked me up and quickly rushed me to safety. Since I cannot fly right now I can dismiss that thought. People can tell me otherwise, but I will not change my mind of what happened. I was saved by an Angel of God for some reason that thus far eludes me. Say what you will, but I will believe this to my dying day.", userId: 4, questionId: 2, createdAt: '2021-07-16', updatedAt: '2021-07-16'},
        {content: "You don't, because not all spirits are going to be friendly towards you. The spirit you should connect with is the spirit of God, as he will minister to you.", userId: 5, questionId: 3, createdAt: '2022-03-16', updatedAt: '2022-03-16'},
        {content: "Get to know yourself. Seriously, remember that old teaching about omnipresence? Spirit is everywhere, and it is you.", userId: 6, questionId: 3, createdAt: '2022-03-17', updatedAt: '2022-03-17'},
        {content: "Occasionally some prankster will fool some scientists with basic tricks - until they contact a stage magician and get it sorted out. Then there's a long period of whining about how it's not fair to expect the paranormal to face actual scrutiny.", userId: 7, questionId: 4, createdAt: '2022-02-12', updatedAt: '2022-02-12'},
        {content: "The closest thing to proving abilities and paranormal phenomena is parapsychology. The only way to 'verify' it is for you to see it yourself… Reading legit reviews from a reputable source.I am verified legit when it comes to my psychic abilities ( I have a link to the website on my FB page) I have numerous people that can attest to my abilitiesIt is all word of mouth. There is no legit scientific way you could explain what I knew/know except for Reviews and speaking to the source to which I was involved with.", userId: 8, questionId: 4, createdAt: '2022-02-02', updatedAt: '2022-02-02'},
        {content: "No, because you have to be a U.S. citizen to be able to be employed into Area 51, and nobody can enter unless they work there. Oh, you meant extraterrestrial aliens? Sorry, there aren't any of those at Area 51 either. And there never will be.", userId: 1, questionId: 5, createdAt: '2022-04-01', updatedAt: '2022-04-01'},
        {content: "Only one live one left. They autopsied one of the Roswell survivors who didn't survive that long on earth anyway after crashing in Roswell, NM in 1947. The survivor was taken to an air force base and held and interrogated for 7 years and then transferred to area 51 where he was ingrained into the service person division there. Retired in 1988 and still resides in senior housing there on the base. So technically there is an alien there but although only 5' tall he looks the same as us.", userId: 2, questionId: 5, createdAt: '2021-11-30', updatedAt: '2021-11-30'},
        {content: "They can not but an evil Human can act an be evil like one", userId: 5, questionId: 6, createdAt: '2021-09-30', updatedAt: '2021-09-30'},
        {content: "Well, depending on your beliefs, Lilith became a demon. Lilith was Adam's first wife. But she didn't like the whole subservient thing, and revolted. She became a demon, or at least a succubus (maybe both). As punishment. So, assuming any of that happened, then yes, a human can become a demon. Assuming you're really, truly evil. as in, god sees you as that evil for defying him, and turning on him. Or maybe Satan recruits you. I'm assuming he's powerful enough to turn people into demons. But again, you need a high level of anti-god evil. Just killing a bunch of people and eating them isn't going to cut it. This is why we don't have too many stories of people becoming demons. It's just a rare possibility that you're so evil enough to be “worthy” of being a demon. anybody less and demons just become apathetic joke. Oh look, it's the Litterbug Demon.", userId: 4, questionId: 6, createdAt: '2021-10-03', updatedAt: '2021-10-03'},
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Answers", null, {});
  }
};
