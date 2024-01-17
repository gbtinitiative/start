// puzzle vars - MOVE THESE LATER
forestSolution = "llrlrrrl"
basementSolution = "20141027"

// -------------------------------
// big lookup tables
const stateObj = {
    // ---------------------------------------------------------
    // forest
    // ---------------------------------------------------------

    "start": {
        narration: "you make your way over to where you think the wind took the letter.%you find yourself in a dense pine forest, surrounded by trees in all directions.%every direction looks the same. there are no visible landmarks.%there's two different paths ahead: one that leads #left#, and another that leads #right#.%you realize that if you're to get anywhere, you need to choose the right direction, or you might just find yourself right back where you started.%there's a torn-up piece of paper nailed to a signpost. you can barely make out the words. #this might be important.#",
        actionSet: "forestPath",
        stage: "forestBG",
        sound: "none"
    },

    "forestObserve": {
        narration: "you're in a dense pine forest, surrounded by trees in all directions.%every direction looks the same. there are no visible landmarks.%there's two different paths ahead: one that leads #left#, and another that leads #right#.%you realize that if you're to get anywhere, you need to choose the right direction, or you might just find yourself right back where you started.%there's a torn-up piece of paper nailed to a signpost. you can barely make out the words. #this might be important.#",
        actionSet: "forestPath",
        stage: "forestBG",
        sound: "none"
    },

    "forestSignpost": {
        narration: "it reads:%^\"It appears you have gotten lost in the woods. Fear not, for you are neither the first nor the last traveller to end up here.%^You have been brought here by the wind, and the wind shall guide you back once it is time. For now, however, heed this warning:%^The forest is ever-changing. The terrain adapts to suit each visitor. To find what you seek, you must find the answer within yourself. Do not overthink it. You've known it for your entire life. #Listen to the trees# and #let the wind help you#.%^The left path is #short#, and the right path #long#. But the correct path runs through both. #Encode your identity# to find it.%^#Hint:# You must walk through 8 paths in total. The trees favor brevity. Keep it simple.\"",
        actionSet: "forestPath",
        stage: "forestBG",
        sound: "none"
    },

    "forestLeft": {
        narration: "you take the #left# path until you come across another fork in the road.%#left# or #right#?",
        actionSet: "forestMove",
        stage: "forestBG",
        sound: "none"
    },

    "forestRight": {
        narration: "you take the #right# path until you come across another fork in the road.%#left# or #right#?",
        actionSet: "forestMove",
        stage: "forestBG",
        sound: "none"
    },

    "forestCheckpoint1": {
        narration: "feels like you're on the right track.%#left# or #right#?",
        actionSet: "forestMove",
        stage: "forestBG",
        sound: "none"
    },

    "forestCheckpoint2": {
        narration: "you can almost make out the outline of a building in the distance.%#left# or #right#?",
        actionSet: "forestMove",
        stage: "forestBG",
        sound: "none"
    },

    "forestReturn": {
        narration: "you seem to have ended up right back where you started.%it doesn't make and geometrical sense, but you don't question it. you simply must have taken a wrong turn.%the trees whisper your name. #three gusts of wind reach your ears.#",
        actionSet: "forestPath",
        stage: "forestBG",
        sound: "none"
    },

    // ---------------------------------------------------------
    // cabin
    // ---------------------------------------------------------

    "kitchenStart": {
        narration: "as you walk down your last path, you approach a small wooden cabin. it seems to be abandoned, and looks as though it could collapse at any moment. oddly enough, this doesn't seem to concern you _ if anything, it seems to make you like it even more. you have a weird taste in houses.%you enter the cabin and the wind gently closes the door shut behind you.%the room you're in seems to be the kitchen. there's a small #fridge# in the corner. it doesn't seem to be working.%you silently appreciate the owner's taste in chairs.",
        actionSet: "kitchen",
        stage: "kitchen",
        sound: "none"
    },

    "kitchenObserve": {
        narration: "the room you're in seems to be the kitchen. there's a small #fridge# in the corner. it doesn't seem to be working.%you silently appreciate the owner's taste in chairs.",
        actionSet: "kitchen",
        stage: "kitchen",
        sound: "none"
    },

    "fridgeInitial": {
        narration: "there's no food inside. it's for the best, since the fridge isn't working anyway.%there's many $fridge magnets$ on the cover. you take one with a particularly nice leaf design.",
        actionSet: "kitchen",
        stage: "kitchen",
        sound: "metal"
    },

    "fridge": {
        narration: "there's no food inside. it's for the best, since the fridge isn't working anyway.%you've already taken a $magnet$ from here.",
        actionSet: "kitchen",
        stage: "kitchen",
        sound: "none"
    },

    "bedroom": {
        narration: "you enter what appears to be a bedroom.%the room consists of a small bed, a wooden wardrobe and a large wooden table. the table seems sturdy.%there's a painting on the wall beside the bed. it's not centered properly _ it leans a bit to the left. this makes you irrationally upset.",
        actionSet: "bedroom",
        stage: "bedroom",
        sound: "none"
    },

    "bedroomObserve": {
        narration: "you're standing in what appears to be a bedroom.%the room consists of a small bed, a wooden wardrobe and a large wooden table. the table seems sturdy.%there's a painting on the wall beside the bed. it's not centered properly _ it leans a bit to the left. this makes you irrationally upset.",
        actionSet: "bedroom",
        stage: "bedroom",
        sound: "none"
    },

    "bedroomBB": {
        narration: "you enter what appears to be a bedroom.%the room consists of a small bed, a wooden wardrobe and a large wooden table. the table seems sturdy.%an old painting leans against the wall underneath the breaker box you uncovered.",
        actionSet: "bedroomBB",
        stage: "bedroomBB",
        sound: "none"
    },

    "bedroomBBObserve": {
        narration: "you're standing in what appears to be a bedroom.%the room consists of a small bed, a wooden wardrobe and a large wooden table. the table seems sturdy.%an old painting leans against the wall underneath the breaker box you uncovered.",
        actionSet: "bedroomBB",
        stage: "bedroomBB",
        sound: "none"
    },

    "wardrobeInitial": {
        narration: "there aren't any clothes inside, but there's a thin metal $coathanger$ with nothing on it. #it looks very malleable.#%you take the $hanger$.",
        actionSet: "persist",
        stage: "persist",
        sound: "none"
    },

    "wardrobe": {
        narration: "there's nothing left inside.",
        actionSet: "persist",
        stage: "persist",
        sound: "none"
    },

    "painting": {
        narration: "you take a closer look at the painting. you can tell there's something behind it.%you take the painting off the wall.%there's a breaker box on the wall. the cover seems to be secured in place with screws.%you'll need to find a screwdriver #(or improvise)#.",
        actionSet: "BB",
        stage: "bedroomBB",
        sound: "none"
    },

    "paintingItem": {
        narration: "you take a closer look at the painting. you can tell there's something behind it.%you take the painting off the wall.%there's a breaker box on the wall. the cover seems to be secured in place with screws.%you'll need to find a screwdriver #(or improvise)#.",
        actionSet: "BBItem",
        stage: "bedroomBB",
        sound: "none"
    },

    "breakerBox": {
        narration: "there's a breaker box on the wall. the cover seems to be secured in place with screws.%you'll need to find a screwdriver #(or improvise)#.",
        actionSet: "BB",
        stage: "BB",
        sound: "none"
    },

    "breakerBoxItem": {
        narration: "there's a breaker box on the wall. the cover seems to be secured in place with screws.%you'll need to find a screwdriver #(or improvise)#.",
        actionSet: "BBItem",
        stage: "BB",
        sound: "none"
    },

    "breakerBoxOpenInitial": {
        narration: "you use your DIY screwdriver to open the cover.%you can see the breakers now _ but there are no switches to flip.%the breakers seem to be using some sort of #magnetic technology#.",
        actionSet: "BBOpen",
        stage: "BBOpen",
        sound: "screw"
    },

    "breakerBoxOpen": {
        narration: "you can see the breakers now _ but there are no switches to flip.%the breakers seem to be using some sort of #magnetic technology#.",
        actionSet: "BBOpen",
        stage: "BBOpen",
        sound: "none"
    },

    "breakerBoxOpenInitialItem": {
        narration: "you use your DIY screwdriver to open the cover.%you can see the breakers now _ but there are no switches to flip.%the breakers seem to be using some sort of #magnetic technology#.",
        actionSet: "BBOpenItem",
        stage: "BBOpen",
        sound: "screw"
    },

    "breakerBoxOpenItem": {
        narration: "you can see the breakers now _ but there are no switches to flip.%the breakers seem to be using some sort of #magnetic technology#.",
        actionSet: "BBOpenItem",
        stage: "BBOpen",
        sound: "none"
    },

    "breakerBoxMagnet": {
        narration: "you recklessly run the magnet over the breakers. miraculously, nothing catches fire.%#you can hear the bulb shatter in the other room.#",
        actionSet: "BBBroken",
        stage: "BBBroken",
        sound: "shatter"
    },

    "breakerBoxBroken": {
        narration: "it's completely broken.%...exactly the way you left it.",
        actionSet: "BBBroken",
        stage: "BBBroken",
        sound: "none"
    },

    "table": {
        narration: "you could do some work here.%...but you don't have any #tools#.",
        actionSet: "table",
        stage: "table",
        sound: "none"
    },

    "tableItem": {
        narration: "you could do some work here.",
        actionSet: "tableItem",
        stage: "table",
        sound: "none"
    },

    "hammer": {
        narration: "on what?",
        actionSet: "hammer",
        stage: "table",
        sound: "none"
    },

    "hammerItem": {
        narration: "on what?",
        actionSet: "hammerItem",
        stage: "table",
        sound: "none"
    },

    "hammerBB": {
        narration: "that's not a good idea.",
        actionSet: "tableItem",
        stage: "table",
        sound: "none"
    },

    "hammerHanger": {
        narration: "you flatten the hanger with the hammer to make a crude $screwdriver$.%you can't wait to share this on Pinterest!",
        actionSet: "table",
        stage: "table",
        sound: "hammer"
    },

    "bathroomInitial": {
        narration: "a very small bathroom. it leaves a lot to be desired.%there's a small bathtub next to a broken mirror. glass shards litter the floor beneath your feet.%not much else.%you notice a $hammer$ lying on the ground amidst the shards. someone must have been angry.%you take the $hammer$. #you'll need some place to use it.#",
        actionSet: "bathroom",
        stage: "bathroom",
        sound: "none"
    },

    "bathroom": {
        narration: "a very small bathroom. it leaves a lot to be desired.%there's a small bathtub next to a broken mirror. glass shards litter the floor beneath your feet.%not much else.",
        actionSet: "bathroom",
        stage: "bathroom",
        sound: "none"
    },

    "darkness": {
        narration: "you approach the living room, when suddenly...",
        actionSet: "darkness",
        stage: "darkness",
        sound: "none"
    },

    "spotlightInitial": {
        narration: "you approach the living room, when suddenly...%a +yellow light+ engulfs the room.%above you, a small light bulb has just been lit. the light seems unnaturally bright for a bulb of this size and age.%you recoil in fear. you can't enter the room.%the +yellow light+ paralyzes you. #you'll have to find a way to turn it off.#",
        actionSet: "spotlight",
        stage: "spotlight",
        sound: "enlightened"
    },

    "spotlight": {
        narration: "the +yellow light+ paralyzes you. #you'll have to find a way to turn it off.#",
        actionSet: "spotlight",
        stage: "spotlight",
        sound: "none"
    },

    "lightSwitch": {
        narration: "what light switch?",
        actionSet: "spotlight",
        stage: "spotlight",
        sound: "none"
    },

    "livingRoomObserve": {
        narration: "you approach the door. sparks fly from where the +bulb+ used to be.%the warm light coming from the windows paints the wooden floors a nice golden color.%there's a small, analog TV in the corner with two reclining chairs across it. this reminds you of something, but you're not quite sure what it is.%you see a large fireplace and two couches. the fireplace is empty, but there seems to be #something metal# gleaming inside it.",
        actionSet: "livingRoom",
        stage: "livingRoom",
        sound: "spark"
    },

    "tv": {
        narration: "an analog TV. it's been gathering dust for quite some time. you're almost afraid to touch it.%the TV won't turn on, but you can see a tape in its VHS player.%the label on the tape has worn off. despite this, you have a strange feeling you know what's on it.",
        actionSet: "livingRoom",
        stage: "livingRoom",
        sound: "none"
    },

    "fireplaceInitial": {
        narration: "you move over to the fireplace to get a closer look.%there's a #metal handle# attached to what seems to be a trapdoor on the ground.%you try to lift it. it's surprisingly light.%you can see what appears to be a #basement# underneath.%a fall from this height wouldn't be ideal. #you should find a way to break your fall.#",
        actionSet: "fireplace",
        stage: "livingRoom",
        sound: "none"
    },

    "fireplace": {
        narration: "you've managed to find a #trapdoor# inside the fireplace.%you can see what appears to be a #basement# underneath.%a fall from this height wouldn't be ideal. #you should find a way to break your fall.#",
        actionSet: "fireplace",
        stage: "livingRoom",
        sound: "none"
    },

    "fireplaceInitialItem": {
        narration: "you move over to the fireplace to get a closer look.%there's a #metal handle# attached to what seems to be a trapdoor on the ground.%you try to lift it. it's surprisingly light.%you can see what appears to be a #basement# underneath.%a fall from this height wouldn't be ideal. #you should find a way to break your fall.#",
        actionSet: "fireplaceItem",
        stage: "livingRoom",
        sound: "none"
    },

    "fireplaceItem": {
        narration: "you've managed to find a #trapdoor# inside the fireplace.%you can see what appears to be a #basement# underneath.%a fall from this height wouldn't be ideal. #you should find a way to break your fall.#",
        actionSet: "fireplaceItem",
        stage: "livingRoom",
        sound: "none"
    },

    "couchInitial": {
        narration: "it's an old, green couch.%looks very comfortable.%the striped texture of the pillows would leave a mark on your face if you were to sleep here, so you don't.%you take the $cushions$ in case you feel a sudden urge to sleep on the spot.",
        actionSet: "livingRoom",
        stage: "livingRoom",
        sound: "soft"
    },

    "couch": {
        narration: "it's an old, green couch.%you've taken its $cushions$ away, and yet it still looks just as comfortable.",
        actionSet: "livingRoom",
        stage: "livingRoom",
        sound: "none",
    },

    "prefall": {
        narration: "you throw the cushions down below.%you can't see much from up here.%only one thing left to do now. you brace yourself and...",
        actionSet: "jumpDown",
        stage: "livingRoom ",
        sound: "none"
    },

    // ---------------------------------------------------------
    // basement
    // ---------------------------------------------------------

    "postfall": {
        narration: "you jump down into the darkness, and land on the soft $cushions$. you barely feel the impact.%you find yourself standing in the basement of the cabin. it's mostly barren, apart from the #safe# in the corner.%wooden sticks litter the ground. you (correctly) guess that these are the fragments of a wooden ladder that would have been used to access the basement.%there's a small coffee table to your left. there's some empty wine bottles and a #framed picture of a woman# on it.%right next to the table is a #gramophone#. it looks ancient.%a #door# stands before you. you can feel an icy breeze flowing into the room through the keyhole.",
        actionSet: "basement",
        stage: "basement",
        sound: "none"
    },

    "picture": {
        narration: "the picture depicts a young woman singing on a stage.%the owner must have been a big fan.%the back of the frame has the date #'1989'# carved on it.",
        actionSet: "basementBack",
        stage: "basement",
        sound: "none"
    },

    "gramophone": {
        narration: "an old #gramophone#. it doesn't seem to be working.%there's a vinyl record in it. there seems to be some text engraved on it, but most of it is too damaged to be readable.%you think you can make out a few parts:%^• the total length reads #'48:41'#.%^• the eighth song's name seems to start with the letter #'b'#.",
        actionSet: "basementBack",
        stage: "basement",
        sound: "none"
    },

    "safe": {
        narration: "a safe with a digital lock.%the display shows eight empty slots.%there's a #post-it note# stuck on the top. it reads #'YYYYMMDD'#.",
        actionSet: "safe",
        stage: "basement",
        sound: "none"
    },

    "safe1": {
        narration: "you press #1# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safe2": {
        narration: "you press #2# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safe3": {
        narration: "you press #3# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safe4": {
        narration: "you press #4# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safe5": {
        narration: "you press #5# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safe6": {
        narration: "you press #6# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safe7": {
        narration: "you press #7# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safe8": {
        narration: "you press #8# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safe9": {
        narration: "you press #9# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safe0": {
        narration: "you press #0# on the keypad. a short digital beep rings throughout the room.",
        actionSet: "safe",
        stage: "basement",
        sound: "beep"
    },

    "safeReset": {
        narration: "you hit the #reset# button. you hear a short beep and the display goes blank again.",
        actionSet: "safe",
        stage: "basement",
        sound: "beepReset"
    },

    "safeIncorrect": {
        narration: "you dial in the last number and are disappointed to see the LED light flash red.%that wasn't the right password. try again?",
        actionSet: "safe",
        stage: "basement",
        sound: "beepFailure"
    },

    "safeOpenInitial": {
        narration: "the safe beeps happily, and the door opens.%inside you find a simple $metal key$.",
        actionSet: "basementBack",
        stage: "basement",
        sound: "beepSuccess"
    },

    "safeOpen": {
        narration: "the safe hasn't moved an inch.%this tracks with your previous experience with safes, namely the part where do not move.",
        actionSet: "basementBack",
        stage: "basement",
        sound: "none"
    },

    "door": {
        narration: "the air around you gets colder as you approach the door.",
        actionSet: "door",
        stage: "door",
        sound: "breeze"
    },

    "doorLocked": {
        narration: "no luck. it's locked.%the #keyhole# is cold to the touch.",
        actionSet: "door",
        stage: "door",
        sound: "locked"
    },

    "doorItem": {
        narration: "the air around you gets colder as you approach the door.",
        actionSet: "doorItem",
        stage: "door",
        sound: "breeze"
    },

    "doorUnlocked": {
        narration: "the door opens with a gentle click.%as soon as it opens, an icy chill fills the whole room.",
        actionSet: "calmBeforeTheStorm",
        stage: "calmBeforeTheStorm",
        sound: "click"
    },

    // ---------------------------------------------------------
    // mountain
    // ---------------------------------------------------------

    "trailInitial": {
        narration: "you go through the door to find yourself on a snowy mountain trail. snowflakes move not-so-gently through the air, courtesy of the harsh winds. the cold air feels sharp on your skin. the chill fills your lungs.%you question how you ended up here _ but when you turn back around, you find that the door is no longer there.%you can see a large #block of ice# nearby. #there seems to be something frozen inside it#.%there's an entrance to a #cave# further down the trail. you can see a faint light emanating from within.%there's nothing else you can see besides #trees#. the blizzard makes it impossible to see far ahead.",
        actionSet: "trail",
        stage: "trail",
        sound: "none"
    },

    "trailObserve": {
        narration: "you find yourself on a snowy mountain trail. snowflakes move not-so-gently through the air, courtesy of the harsh winds. the cold air feels sharp on your skin. the chill fills your lungs.%you can see a large #block of ice# nearby. #there seems to be something frozen inside it#.%there's an entrance to a #cave# further down the trail. you can see a faint light emanating from within.%there's nothing else you can see besides #trees#. the blizzard makes it impossible to see far ahead.",
        actionSet: "trail",
        stage: "trail",
        sound: "none"
    },

    "trees": {
        narration: "the trees have not a single leaf left on them. the branches are so dry that you're amazed the wind hasn't snapped them clean off.",
        actionSet: "trees",
        stage: "trees",
        sound: "none"
    },

    "treesPost": {
        narration: "the trees have not a single leaf left on them. the branches are so dry that you're amazed the wind hasn't snapped them clean off.%the trees aren't much for conversation.%not anymore, at least.",
        actionSet: "trailBack",
        stage: "trees",
        sound: "none"
    },

    "branch": {
        narration: "your strict moral code prevents you from harming plants. your own dire situation doesn't seem to factor into this.%thankfully, one of the trees offers you one of its fallen branches and saves you the trouble. you try not to think too hard about the interaction.%you take the $branch$. it's extremely dry and feels as though it could shatter at any second. #it would make for some excellent firewood#, though.",
        actionSet: "trailBack",
        stage: "trees",
        sound: "snap"
    },

    "caveItem": {
        narration: "you enter the cave. there's a very large campfire inside.%the fire casts some shadows from outside onto a wall down below. there seem to be people watching the shadows together. it seems like an allegory for something, but you can't put your finger on what it is. you decide not to disturb them.",
        actionSet: "caveItem",
        stage: "cave",
        sound: "none"
    },

    "cave": {
        narration: "you enter the cave. there's a very large campfire inside.%the fire casts some shadows from outside onto a wall down below. there seem to be people watching the shadows together. it seems like an allegory for something, but you can't put your finger on what it is. you decide not to disturb them.",
        actionSet: "cave",
        stage: "cave",
        sound: "none"
    },

    "torch": {
        narration: "you hold the branch up to the open flame and it lights on fire. you now have a $torch$.",
        actionSet: "cave",
        stage: "cave",
        sound: "fire"
    },

    "ice": {
        narration: "you take a closer look at the ice. it grips onto your skin. you're careful not to touch it.%you can see the #letter# inside!%#you'll need to find a way to melt it.#",
        actionSet: "trailBack",
        stage: "ice",
        sound: "none"
    },

    "iceItem": {
        narration: "you take a closer look at the ice. it grips onto your skin. you're careful not to touch it.%you can see the #letter# inside!%#you'll need to find a way to melt it.#",
        actionSet: "iceItem",
        stage: "ice",
        sound: "none"
    },

    "melted": {
        narration: "you hold the torch against the ice. it takes ages to melt, but you can finally take the letter.",
        actionSet: "takeIt",
        stage: "melted",
        sound: "melted"
    },

    "takeIt": {
        narration: "the letter sits impatiently in your hands.",
        actionSet: "read",
        stage: "read",
        sound: "paper"
    },
};

const actionSets = {
    // ---------------------------------------------------------
    // forest
    // ---------------------------------------------------------
    "forestPath": ["leftPath", "rightPath", "forestPaper", "observe"],
    "forestMove": ["leftPath", "rightPath"],
    // ---------------------------------------------------------
    // cabin
    // ---------------------------------------------------------
    "kitchen": ["fridge", "lRoom", "bedroom", "observe"],
    "bedroom": ["painting", "wardrobe", "table", "kitchen", "bathroom", "observe"],
    "bedroomBB": ["BB", "wardrobe", "table", "kitchen", "bathroom", "observe"],
    "bathroom": ["bedroom", "observe"],
    "BB": ["bedroomBack"],
    "BBItem": ["bedroomBack", "BBOpener"],
    "table": ["bedroomBack"],
    "tableItem": ["bedroomBack", "hammer"],
    "hammer": ["hammerBB"],
    "hammerItem": ["hammerBB", "hammerHanger"],
    "BBOpen": ["bedroomBack"],
    "BBOpenItem": ["bedroomBack", "BBMagnet"],
    "BBBroken": ["bedroomBack"],
    "darkness": ["question"],
    "spotlight": ["lightSwitch", "spotlightBack"],
    "livingRoom": ["fireplace", "couch", "tv", "kitchen", "observe"],
    "fireplace": ["lrBack"],
    "fireplaceItem": ["lrBack", "fireplaceItem"],
    "jumpDown": ["jumpDown"],
    // ---------------------------------------------------------
    // basement
    // ---------------------------------------------------------
    "basement": ["safe", "picture", "gramophone", "door"],
    "basementBack": ["basementBack"],
    "door": ["basementBack", "tryUnlock"],
    "doorItem": ["basementBack", "doorUnlock"],
    "safe": ["safe1", "safe2", "safe3", "safe4", "safe5", "safe6", "safe7", "safe8", "safe9", "safeBack", "safe0", "safeReset"],
    "calmBeforeTheStorm": ["stepThrough"],
    // ---------------------------------------------------------
    // mountain
    // ---------------------------------------------------------
    "trail": ["cave", "trees", "ice", "observe"],
    "trees": ["trailBack", "branch"],
    "trailBack": ["trailBack"],
    "cave": ["trailBack", "observe"],
    "caveItem": ["trailBack", "torch", "observe"],
    "iceItem": ["trailBack", "melt"],
    "takeIt": ["takeIt"],
    "read": ["read"],
};

const actionObj = {
    "observe": {
        name: "observe",
        function: () => {
            console.log(save);
            console.log(getStage());
            if (save.location == "forest") return "forestObserve";
            if (save.location == "cabin") {
                if (getStage() == "bathroom") return "bathroom";
                if (save.state == "wardrobe" || save.state == "wardrobeInitial") {
                    if (save.flags.includes("BB")) return "bedroomBBObserve";
                    return "bedroomObserve";
                }
            }
            if (save.location == "basement") return "postfall";
            if (getStage() == "cave") {
                if (!save.items.includes("branch")) return "cave";
                return "caveItem";
            }
            return `${getStage()}Observe`;
        }
    },
    // ---------------------------------------------------------
    // forest
    // ---------------------------------------------------------
    "leftPath": {
        name: "go left",
        // execute action function BEFORE getting state
        function: () => {
            console.log(save.progress);
            if (checkPass("l")) {
                incrementProgress();
                if (save.progress == 3) {
                    return "forestCheckpoint1";
                } else if (save.progress == 7) {
                    return "forestCheckpoint2";
                } else if (save.progress == 8) {
                    resetProgress();
                    // TODO: can't code redirector without a URL to code in
                    // just an alert dialog for now
                    redirect( {
                        location: "cabin",
                        state: "kitchenStart",
                        items: [],
                        flags: [],
                        pass: "",
                        progress: 0
                    }, "cabin");
                }
                return "forestLeft";
            } else {
                resetProgress();
                return "forestReturn";
            }
        },
    },
    "rightPath": {
        name: "go right",
        function: () => {
            console.log(save.progress);
            if (checkPass("r")) {
                incrementProgress();
                if (save.progress == 3) {
                    return "forestCheckpoint1";
                } else if (save.progress == 7) {
                    return "forestCheckpoint2";
                } else if (save.progress == 8) {
                    resetProgress();
                    // TODO: can't code redirector without a URL to code in
                    // pass save into it instead
                    redirect( {
                        location: "cabin",
                        state: "kitchenStart",
                        items: [],
                        flags: [],
                        pass: "",
                        progress: 0
                    }, "cabin");
                }
                return "forestRight";
            } else {
                resetProgress();
                return "forestReturn";
            }
        },
    },
    "forestPaper": {
        name: "read paper",
        state: "forestSignpost",
    },
    // ---------------------------------------------------------
    // cabin
    // ---------------------------------------------------------
    "fridge": {
        name: "inspect fridge",
        function: () => {
            if (!save.flags.includes("magnet")) {
                addItem("magnet");
                return "fridgeInitial";
            }
            return "fridge";
        }
    },
    "lRoom": {
        name: "move to living room",
        function: () => {
            if (save.flags.includes("bulbBroken")) {
                return "livingRoomObserve";
            }
            if (!save.flags.includes("spotlight")) {
                addFlag("spotlight");
                return "darkness";
            }
            return "spotlight";
        }
    },
    "bedroom": {
        name: "move to bedroom",
        function: () => {
            if (!save.flags.includes("BB")) {
                return "bedroom";
            }
            return "bedroomBB";
        }
    },
    "painting": {
        name: "inspect painting",
        function: () => {
            addFlag("BB");
            return save.items.includes("screwdriver") ? "paintingItem" : "painting";
        }
    },
    "BB": {
        name: "inspect breaker box",
        function: () => {
            if (save.flags.includes("bulbBroken")) return "breakerBoxBroken";
            if (save.flags.includes("BBOpen")) {
                return save.items.includes("magnet") ? "breakerBoxOpenItem" : "breakerBoxOpen"
            }
            return save.items.includes("screwdriver") ? "breakerBoxItem" : "breakerBox";
        }
    },
    "bedroomBack": {
        name: "go back",
        function: () => {
            if (!save.flags.includes("BB")) {
                return "bedroom";
            }
            return "bedroomBB";
        }
    },
    "wardrobe": {
        name: "inspect wardrobe",
        function: () => {
            if (!save.flags.includes("coathanger")) {
                addItem("coathanger");
                return "wardrobeInitial";
            }
            return "wardrobe";
        }
    },
    "kitchen": {
        name: "move to kitchen",
        state: "kitchenObserve",
    },
    "table": {
        name: "inspect table",
        function: () => {
            if (save.items.includes("hammer")) {
                return "tableItem";
            }
            return "table";
        }
    },
    "bathroom": {
        name: "move to bathroom",
        function: () => {
            if (!save.flags.includes("hammer")) {
                addItem("hammer");
                return "bathroomInitial";
            }
            return "bathroom";
        }
    },
    "hammer": {
        name: "use hammer",
        function: () => {
            return save.items.includes("coathanger") ? "hammerItem" : "hammer";
        }
    },
    "hammerBB": {
        name: "breaker box",
        state: "hammerBB"
    },
    "hammerHanger": {
        name: "coathanger",
        function: () => {
            removeItem("hammer");
            removeItem("coathanger");
            addItem("screwdriver");
            return "hammerHanger";
        }
    },
    "BBOpener": {
        name: "use screwdriver",
        function: () => {
            removeItem("screwdriver");
            addFlag("BBOpen");
            return save.flags.includes("magnet") ? "breakerBoxOpenInitialItem" : "breakerBoxOpenInitial";
        }
    },
    "BBMagnet": {
        name: "use magnet",
        function: () => {
            removeItem("magnet");
            addFlag("bulbBroken");
            return "breakerBoxMagnet";
        }
    },
    "question": {
        name: "?",
        state: "spotlightInitial",
    },
    "lightSwitch": {
        name: "use light switch",
        state: "lightSwitch"
    },
    "spotlightBack": {
        name: "turn back",
        state: "kitchenObserve"
    },
    "tv": {
        name: "inspect tv",
        state: "tv"
    },
    "couch": {
        name: "inspect couch",
        function: () => {
            if (!save.flags.includes("cushion")) {
                addItem("cushion");
                return "couchInitial";
            }
            return "couch";
        }
    },
    "lrBack": {
        name: "go back",
        state: "livingRoomObserve"
    },
    "fireplace": {
        name: "inspect fireplace",
        function: () => {
            if (!save.flags.includes("fireplaceInitial")) {
                addFlag("fireplaceInitial");
                return save.items.includes("cushion") ? "fireplaceInitialItem" : "fireplaceInitial";
            }
            return save.items.includes("cushion") ? "fireplaceItem" : "fireplace";
        }
    },
    "fireplaceItem": {
        name: "use cushions",
        function: () => {
            removeItem("cushion");
            return "prefall";
        }
    },
    "jumpDown": {
        name: "jump down",
        function: () => {
            // TODO: can't code redirector without a URL to code in
            // pass save into it instead
            redirect( {
                location: "basement",
                state: "postfall",
                items: [],
                flags: [],
                pass: "",
                progress: 0
            }, "basement");
        }
    },
    // ---------------------------------------------------------
    // basement
    // ---------------------------------------------------------
    "basementBack": {
        name: "go back",
        state: "postfall"
    },
    "picture": {
        name: "inspect picture",
        state: "picture"
    },
    "gramophone": {
        name: "inspect gramophone",
        state: "gramophone"
    },
    "picture": {
        name: "inspect picture",
        state: "picture"
    },
    "door": {
        name: "inspect door",
        function: () => {
            return save.items.includes("key") ? "doorItem" : "door";
        }
    },
    "tryUnlock": {
        name: "open the door",
        state: "doorLocked"
    },
    "doorUnlock": {
        name: "use key",
        function: () => {
            removeItem("key");
            addFlag("doorOpen");
            return "doorUnlocked";
        }
    },
    "safe": {
        name: "inspect safe",
        function: () => {
            return save.flags.includes("key") ? "safeOpen" : "safe";
        }
    },
    "safeBack": {
        name: "go back",
        function: () => {
            resetProgress();
            return "postfall";
        }
    },
    "safeReset": {
        name: "reset",
        function: () => {
            resetProgress();
            return "safeReset";
        }
    },
    "safe1": {
        name: "1",
        function: () => {
            typePass("1");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe1";
        }
    },
    "safe2": {
        name: "2",
        function: () => {
            typePass("2");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe2";
        }
    },
    "safe3": {
        name: "3",
        function: () => {
            typePass("3");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe3";
        }
    },
    "safe4": {
        name: "4",
        function: () => {
            typePass("4");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe4";
        }
    },
    "safe5": {
        name: "5",
        function: () => {
            typePass("5");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe5";
        }
    },
    "safe6": {
        name: "6",
        function: () => {
            typePass("6");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe6";
        }
    },
    "safe7": {
        name: "7",
        function: () => {
            typePass("7");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe7";
        }
    },
    "safe8": {
        name: "8",
        function: () => {
            typePass("8");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe8";
        }
    },
    "safe9": {
        name: "9",
        function: () => {
            typePass("9");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe9";
        }
    },
    "safe0": {
        name: "0",
        function: () => {
            typePass("0");
            if (save.pass.length == 8) {
                if (checkPass()) {
                    addItem("key");
                    return "safeOpenInitial";
                }
                resetProgress();
                return "safeIncorrect";
            }
            return "safe0";
        }
    },
    "stepThrough": {
        name: "step forward",
        function: () => {
            // TODO: can't code redirector without a URL to code in
            // pass save into it instead
            redirect( {
                location: "mountain",
                state: "trailInitial",
                items: [],
                flags: [],
                pass: "",
                progress: 0
            }, "mountain");
        }
    },
    // ---------------------------------------------------------
    // mountain
    // ---------------------------------------------------------
    "trailBack": {
        name: "back to trail",
        state: "trailObserve",
    },
    "trees": {
        name: "inspect the trees",
        function: () => {
            return save.flags.includes("branch") ? "treesPost" : "trees";
        }
    },
    "branch": {
        name: "snap a branch off",
        function: () => {
            addItem("branch");
            return "branch";
        }
    },
    "ice": {
        name: "inspect the ice",
        function: () => {
            return save.items.includes("torch") ? "iceItem" : "ice";
        }
    },
    "cave": {
        name: "move to cave",
        function: () => {
            if (!save.items.includes("branch")) return "cave";
            return "caveItem";
        }
    },
    "torch": {
        name: "use branch",
        function: () => {
            removeItem("branch");
            addItem("torch");
            return "torch";
        }
    },
    "melt": {
        name: "use the torch",
        function: () => {
            removeItem("torch");
            return "melted";
        }
    },
    "takeIt": {
        name: "take it",
        state: "takeIt",
    },
    "read": {
        name: "read",
        function: () => {
            finalAct();
        }
    },
}

const extenders = ["observe"];
const item_actions = ["hammer", "hammerHanger", "BBOpener", "BBMagnet", "fireplaceItem", "doorUnlock", "torch", "melt"];
const specials = ["question", "jumpDown", "safe1", "safe2", "safe3", "safe4", "safe5", "safe6", "safe7", "safe8", "safe9", "safeBack", "safe0", "safeBack", "safeReset", "stepThrough"];

// -------------------------------
// set up DOM manipulation
const narration = document.querySelector("#narration");
const actionContainer = document.querySelector("#action-container");
const actContainer = document.querySelector("#act-container");
const letterRead = document.querySelector("#letter-read");

const narrative = document.querySelector("#narration-text");
const buttons = document.querySelector("#button-container");
const items = document.querySelector("#item-display")
const body = document.querySelector("body");
const root = document.querySelector(":root");

// -------------------------------
// set up save system
function retrieveSave() {
    // TODO: necessary server-side stuff done here
    // for now it just returns the starting state with the proper keys
    return {
        location: "forest",
        state: "start",
        items: [],
        flags: [],
        pass: "",
        progress: 0
    };
}

// temporary solution until proper save system is up ----------
// TODO: remove -----------------------------------------------
function retrieveSaveFromParams() {
    const params = new URLSearchParams(window.location.search);
    sObj = {
        location: params.get("location"),
        state: params.get("state"),
        items: params.get("items"),
        flags: params.get("flags"),
        pass: params.get("pass"),
        progress: params.get("progress"),
    }

    if (!sObj.items) {
        sObj.items = [];
    }

    if (!sObj.flags) {
        sObj.flags = [];
    }

    if (!sObj.pass) {
        sObj.pass = "";
    }

    return sObj;
}
// ------------------------------------------------------------

function loadSave(save) {
    state = stateObj[save.state];
    setNarration(state.narration);
    setActions(state.actionSet);
    setStage(state.stage);
    playSound(state.sound);
}

let save = retrieveSave();
// TODO: remove --------------------
if (window.location.search) {
    save = retrieveSaveFromParams();
}
// ---------------------------------
loadSave(save);


// -------------------------------
// puzzle functions
function checkPass(input="basement") {
    let solution;
    if (input == "basement") {
        solution = basementSolution;
        if (save.pass == solution) {
            return true;
        }
        return false;
    }
    solution = forestSolution;
    if (input == solution[save.progress]) {
        return true;
    } else {
        return false;
    }
}

function incrementProgress() {
    save.progress += 1;
    // TODO: server logic yadda yadda
}

function resetProgress() {
    save.pass = "";
    save.progress = 0;
    // TODO: server logic goes here
}

function typePass(key) {
    save.pass += key;
    // TODO: server logic goes here
}

function addFlag(flag) {
    if (save.flags.includes(flag)) return;
    save.flags.push(flag);
    // TODO: server logic goes here
}

function addItem(item) {
    if (save.items.includes(item)) return;
    save.items.push(item);
    save.flags.push(item);
    renderItems();
    // TODO: server logic goes here
}

function removeItem(item) {
    if (!save.items.includes(item)) return;
    save.items.splice(save.items.indexOf(item), 1);
    renderItems();
    // TODO: server logic goes here
}

// -------------------------------
// DOM helpers and game logic
function narrationBuilder(raw) {
    const narrationArray = raw.split("%")
    const newNarration = [];
    for (sep of narrationArray) {
        let line = sep;
        let highlightCounter = 0;
        let itemCounter = 0;
        let yellowCounter = 0;

        while (line.includes("#")) {
            line = line.replace("#", highlightCounter % 2 == 0 ? "<span class='highlight'>" : "</span>");
            highlightCounter += 1;
        }

        while (line.includes("$")) {
            line = line.replace("$", itemCounter % 2 == 0 ? "<span class='item'>" : "</span>");
            itemCounter += 1;
        }

        while (line.includes("+")) {
            line = line.replace("+", yellowCounter % 2 == 0 ? "<span class='yellow'>" : "</span>");
            yellowCounter += 1;
        }

        while (line.includes("_")) {
            line = line.replace("_", "—");
        }

        newNarration.push(line.charAt(0) == "^" ? line.slice(1) : `❯ ${line}`);
    }
    return newNarration.join("<br><br>")
}

function changeNarrationText(narration) {
    narrative.innerHTML = narration;
}

function setNarration(raw) {
    changeNarrationText(narrationBuilder(raw));
}

function setStage(stage) {
    if (stage == "persist") return;
    root.style.setProperty("--stage-url", `url(../backgrounds/${stage}.png)`);
}

function getStage() {
    return stateObj[save.state].stage;
}

function playSound(sound) {
    if (sound == "none") { return }
    let tick = new Audio(`../shared/sounds/${sound}.wav`);
    tick.play();
}

function actionBuilder(action) {
    let button = document.createElement("button");
    if (extenders.includes(action)) {
        button.classList.add("extender");
    }
    // add .item_action class to item actions for styling purposes
    if (item_actions.includes(action)) {
        button.classList.add("item_action");
    }
    // add special case classes to certain actions for styling purposes
    if (specials.includes(action)) {
        switch (action) {
            case "question":
            case "jumpDown":
                button.classList.add("darkness");
                break;

            case "safeReset":
            case "safeBack":
            case "safe1":
            case "safe2":
            case "safe3":
            case "safe4":
            case "safe5":
            case "safe6":
            case "safe7":
            case "safe8":
            case "safe9":
            case "safe0":
                button.classList.add("keypad");
                break;

            case "stepThrough":
                button.classList.add("mountain-door");
        }
    }
    button.setAttribute("data-action-id", action);
    button.innerText = actionObj[action].name;
    return button;
}

function renderItems() {
    if (save.items.length == 0) {
        items.innerHTML = "<p>no items to show</p>";
        return;
    }

    items.innerHTML = "";

    for (item in save.items) {
        icon = document.createElement("img");
        icon.setAttribute("src", `../shared/items/${save.items[item]}.png`);
        icon.classList.add("item");
        items.appendChild(icon);
    }
}

function executeAction(action) {
    actionProps = actionObj[action];
    // if function is present, get state from the result; read state directly instead
    save.state = "function" in actionProps ? actionProps.function() : actionProps.state;
    state = stateObj[save.state];
    setNarration(state.narration);
    setActions(state.actionSet);
    setStage(state.stage)
    playSound(state.sound)

    // TODO: server logic and save setters go here
}

function addListeners() {
    buttonList = document.querySelectorAll("button:not(#letter-read)");
    for (button of buttonList) {
        button.addEventListener("click", e => {
            cssPulse();
            executeAction(e.currentTarget.getAttribute("data-action-id"));
        })
    }
}

function setActions(actionSet) {
    if (actionSet == "persist") return;
    // delete all children before appending new ones
    buttons.innerHTML = "";
    // retrieve action array
    actionArray = actionSets[actionSet];
    // create each action button and append them
    for (action of actionArray) {
        buttons.appendChild(actionBuilder(action));
    }
    // add event listeners
    addListeners();
}

function redirect(sObj, page) {
    // TODO: requires server setup
    // change state and save vars first
    save.location = sObj.location;
    save.state = sObj.state;
    save.items = sObj.items;
    save.flags = sObj.flags;
    save.pass = sObj.pass;
    save.progress = sObj.progress;
    // redirect - to be changed
    let urlParams = new URLSearchParams(sObj).toString();
    window.location.replace(`../${page}/h-${page}.html?${urlParams}`);
}

function cssPulse() {
    // TODO: add button feedback in the form of a small background vignette pulse
    // optional, not a priority
}

function finalActII() {
    let wind = new Audio("../shared/sounds/wind.mp3");
    wind.play();
    body.removeChild(actContainer);
    body.classList.add("final-act-2");
    let p1 = document.createElement("p");
    p1.innerText = "the wind sweeps you off of the ground.";
    let p2 = document.createElement("p");
    p2.innerText = "it seems your journey here is over.";
    let p3 = document.createElement("p");
    p3.innerText = "the warm embrace of the wind is unlike anything you've felt before. your eyelids begin to drop.";
    p1.classList.add("act-paragraph");
    p2.classList.add("act-paragraph");
    p3.classList.add("act-paragraph");

    body.appendChild(p1);
    body.appendChild(p2);
    body.appendChild(p3);

    console.log("a");
    setTimeout(() => {p1.classList.add("black-text-transition");}, 1);
    console.log("b");

    p1.addEventListener("transitionend", () => {
        p2.classList.add("black-text-transition");
        p2.addEventListener("transitionend", () => {
            p3.classList.add("black-text-transition");
            p3.addEventListener("transitionend", () => {
                setTimeout(() => {body.classList.add("body-bg-transition");}, 1);
                body.addEventListener("transitionend", e => {
                    console.log(e.target);
                    console.log(e.target.tagName);
                    if (e.target.tagName == "BODY") {
                        let p4 = document.createElement("p");
                        p4.innerText = "before you know it, you're back in your bed, sleeping safe and sound.";
                        p4.classList.add("act-paragraph-inverted");
                        body.removeChild(body.lastChild);
                        body.removeChild(body.lastChild);
                        body.removeChild(body.lastChild);
                        body.appendChild(p4);
                        setTimeout(() => {p4.classList.add("white-text-transition");}, 1);
                        p4.addEventListener("transitionend", () => {
                            p4.classList.remove("white-text-transition");
                            p4.classList.add("black-text-transition");
                        })
                    }
                })
            });
        });
    });
}

function finalAct() {
    body.removeChild(narration);
    body.removeChild(actionContainer);
    body.classList.add("final-act")
    actContainer.classList.add("final-act");
    letterRead.addEventListener("click", finalActII);
}
