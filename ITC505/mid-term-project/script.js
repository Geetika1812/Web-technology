const story = {
    start: {
        text: "Which Pokémon will be your lifelong partner?",
        choices: [
            { text: "Bulbasaur 🌱 ", consequence: "bulbasaur_start" },
            { text: "Charmander 🔥 ", consequence: "charmander_start" },
            { text: "Squirtle 💧 ", consequence: "squirtle_start" }
        ],
        image: "images/oak-lab.jpg"
    },

    // ===== BULBASAUR vs MISTY =====
    bulbasaur_start: {
        text: "Misty immediately challenges you! 'A grass-type? This will be easy!'",
        choices: [
            { text: "Battle Misty now", consequence: "bulbasaur_win_quick" },
            { text: "Request practice first", consequence: "bulbasaur_train" }
        ],
        image: "images/bulbasaur.jpg"
    },
    bulbasaur_train: {
        text: "You find a Sun Stone! Bulbasaur's Solar Beam charges faster in sunlight.",
        choices: [
            { text: "Now battle Misty", consequence: "bulbasaur_win_solar" }
        ],
        image: "images/viridian-forest.jpg"
    },
    bulbasaur_win_quick: {
        text: "Bulbasaur's Vine Whip defeats Staryu! Misty pouts: 'Lucky shot...'",
        choices: [
            { text: "Claim Championship", consequence: "champion" }
        ],
        image: "images/gym-battle.jpg"
    },
    bulbasaur_win_solar: {
        text: "SOLAR BEAM hits Starmie! Misty screams: 'NO! My perfect record!'",
        choices: [
            { text: "Become Champion", consequence: "champion" }
        ],
        image: "images/gym-battle.jpg"
    },

    // ===== CHARMANDER vs TEAM ROCKET =====
    charmander_start: {
        text: "TEAM ROCKET appears! 'Hand over that rare fire-type, twerp!'",
        choices: [
            { text: "Fight them now", consequence: "charmander_win" },
            { text: "Find Officer Jenny", consequence: "charmander_jenny" }
        ],
        image: "images/charmander.png"
    },
    charmander_jenny: {
        text: "Jenny gives you a Charcoal item! 'This will boost fire attacks!'",
        choices: [
            { text: "Now fight Team Rocket", consequence: "charmander_win_bonus" }
        ],
        image: "images/team-rocket.jpg"
    },
    charmander_win: {
        text: "Charmander's Ember burns their balloons! 'We're blasting off again!'",
        choices: [
            { text: "Claim Championship", consequence: "champion" }
        ],
        image: "images/team-rocket.jpg"
    },
    charmander_win_bonus: {
        text: "FIRE BLAST destroys Team Rocket's machine! They flee screaming!",
        choices: [
            { text: "Become Champion", consequence: "champion" }
        ],
        image: "images/team-rocket.jpg"
    },

    // ===== SQUIRTLE TRY HARDER PATH =====
    squirtle_start: {
        text: "Squirtle looks determined! The 'Try Harder' challenge begins!",
        choices: [
            { text: "100 Pushups", consequence: "squirtle_pushups" },
            { text: "Water Target Practice", consequence: "squirtle_targets" }
        ],
        image: "images/squirtle.jpg"
    },
    squirtle_pushups: {
        text: "Squirtle's defense increases! 'Again!' it pants excitedly.",
        choices: [
            { text: "500 More", consequence: "squirtle_evolve" }
        ],
        image: "images/gym-battle.jpg"
    },
    squirtle_targets: {
        text: "Bullseye! Squirtle can now hit moving targets perfectly!",
        choices: [
            { text: "Practice Rapid Spin", consequence: "squirtle_evolve" }
        ],
        image: "images/viridian-forest.jpg"
    },
    squirtle_evolve: {
        text: "After grueling training, Squirtle evolves into WAR-TORTLE!",
        choices: [
            { text: "Final Challenge", consequence: "squirtle_challenge" }
        ],
        image: "images/gym-battle.jpg"
    },
    squirtle_challenge: {
        text: "WAR-TORTLE defeats an entire enemy team single-handedly!",
        choices: [
            { text: "Claim Championship", consequence: "champion" }
        ],
        image: "images/gym-battle.jpg"
    },

    // ===== CHAMPIONSHIP =====
    champion: {
        text: "🏆 YOU WON! Your unique journey proves there are many paths to victory!",
        choices: [
            { text: "Play Again", consequence: "start" }
        ],
        image: "images/champion.jpg"
    }
};

let currentStage = "start";

function updatePage() {
    const stage = story[currentStage];
    document.getElementById("story-text").textContent = stage.text;
    document.getElementById("story-image").src = stage.image;
    
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    
    stage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.addEventListener("click", () => {
            currentStage = choice.consequence;
            updatePage();
            window.scrollTo(0, 0);
        });
        choicesDiv.appendChild(button);
    });
}

document.addEventListener("DOMContentLoaded", updatePage);