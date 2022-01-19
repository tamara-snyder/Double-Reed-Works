// Data to be displayed:
// Each key is a reed "problem" with corresponding solutions stored in a list of dictionaries.
// Each dictionary within contains a block of text to display and the necessary tools to perform that step.
const solutions = {
    "too-hard":
    [   
        {
            "problem": "Cane is too hard",
            "text": "Your reed might be too thick in the spine. Insert a plaque or guitar pick and try scraping evenly over the length of the spine (pictured below). The spine should be thicker than the sides of the reed and have an even taper to the back of the reed (no lumps or bumps).",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/spine.png"
        },   
        {
            "problem": "Cane is too hard",
            "text": "Insert a plaque or guitar pick and scrape evenly over the whole blade of your reed. It may be that your reed is already well-balanced, but is slightly too thick.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/entire-blade.png"
        },
        {
            "problem": "Cane is too hard",
            "text": "Proceed with caution: a last resort is to dip your reed in boiling water for ten seconds, but it's recommended that you try the previous two tips first.",
            "tools": "A cup of boiling water"
        }
    ],
    "too-soft": 
    [
        {
            "problem": "Cane is too soft",
            "text": "Check the tightness of your first and second wires. If the second wire wiggles, pull it tight. The first wire should not be as tight as the second fire and should have a very slight wiggle.",
            "tools": "Pliers",
            "image": "../static/reed-images/wires.png"
        },
        {
            "problem": "Cane is too soft",
            "text": "You can open the tip of the reed by squeezing the sides behind the first wire. Also check that the second wire is round (it should not be too flat or oblong).",
            "tools": "Pliers",
            "image": "../static/reed-images/behind-first-wire.png"
        }   
    ],
    "heavy-in-lows":
    [
        {
            "problem": "Reed is too heavy in the low register",
            "text": "With pliers, pinch over and under the second wire, ensuring that the second wire is round (it should not appear oblong or flat).",
            "tools": "Pliers",
            "image": "../static/reed-images/close-second-wire.png"
        },
        {
            "problem": "Reed is too heavy in the low register",
            "text": "Insert a plaque or guitar pick and scrape the back third of the reed. When in doubt, check your measurements often.",
            "tools": "File/sandpaper/reed knife, dial indicator (optional but recommended)",
            "image": "../static/reed-images/back-third.png"
        },
        {
            "problem": "Reed is too heavy in the low register",
            "text": "Insert a plaque or guitar pick and scrape the front of the reed in the \"delta wing\" area (the triangles in the corners of the tip).",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/delta-wings.png"
        },
        {
            "problem": "Reed is too heavy in the low register",
            "text": "Insert a plaque or guitar pick and scrape the rails in the back third of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/back-third-rails.png"
        }
    ],
    "heavy-in-highs": [
        {
            "problem": "Reed is too heavy in the high register",
            "text": "With pliers, check that the second wire is tight (no wiggle room). Pinch the sides of the reed at the second wire to ensure that it is round. This action will close the tip slightly and allow for easier response.",
            "tools": "Pliers",
            "image": "../static/reed-images/open-second-wire.png"
        },
        {
            "problem": "Reed is too heavy in the high register",
            "text": "Insert a plaque or guitar pick and scrape the rails at the front third of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/front-third-rails.png"
        },
        {
            "problem": "Reed is too heavy in the high register",
            "text": "Insert a plaque or guitar pick and scrape the channels at the very tip of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/channel-tips.png"
        },
        {
            "problem": "Reed is too heavy in the high register",
            "text": "Insert a plaque or guitar pick and scrape the corners and edges of the front third of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/front-third-edges.png"
        },
        {
            "problem": "Reed is too heavy in the high register",
            "text": "If you have a reamer, ream the reed. It is best to do this while your reed is completely dry. If you do not have a reamer, proceed to the next suggestion.",
            "tools": "Reamer",
        },
        {
            "problem": "Reed is too heavy in the high register",
            "text": "If your reed is over 55mm in length, you can try cutting the tip ever-so-slightly (less than 1mm). Note that you may need to thin the tip after doing this to achieve the same response as before.",
            "tools": "Tip-cutter or sharp single edge razor blade",
            "image": "../static/reed-images/tip.png"
        }
    ],
    "too-dark": [
        {
            "problem": "Reed sounds too dark",
            "text": "Pinch the sides of the reed at the second wire to ensure that it is round. This will close the tip slightly and allow for a brighter sound.",
            "tools": "Pliers",
            "image": "../static/reed-images/open-second-wire.png"
        },
        {
            "problem": "Reed sounds too dark",
            "text": "Insert a plaque or guitar pick and scrape evenly over the front third of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/front-third.png"
        },
        {
            "problem": "Reed sounds too dark",
            "text": "Insert a plaque or guitar pick and scrape over the heart of the reed. Be careful not to scrape too much, as this can cause the reed's depth of tone to suffer.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/heart.png"
        },
        {
            "problem": "Reed sounds too dark",
            "text": "Insert a plaque or guitar pick and scrape the channels at the very tip of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/channel-tips.png"
        },
        {
            "problem": "Reed sounds too dark",
            "text": "Carefully drag a reed knife along the channels of the reed. No need to do this more than once or twice.",
            "tools": "Reed knife",
            "image": "../static/reed-images/channels.png"
        }
    ],
    "too-bright": [
        {
            "problem": "Reed sounds too bright",
            "text": "With pliers, pinch the sides of the reed behind the first wire. If the tip is too open, you can squeeze it back closed with your fingers.",
            "tools": "Pliers",
            "image": "../static/reed-images/behind-first-wire.png"
        },
        {
            "problem": "Reed sounds too bright",
            "text": "With pliers, pinch over and under the second wire. This has the same effect as pinching the sides behind the first wire and will open up the tip to make the reed more resistant.",
            "tools": "Pliers",
            "image": "../static/reed-images/close-second-wire.png"
        },
        {
            "problem": "Reed sounds too bright",
            "text": "Insert a plaque or guitar pick and scrape the rails, being careful to check that there is an even downwards slope from the back of the reed to the front (no lumps or bumps).",
            "tools": "File/sandpaper/reed knife, dial indicator (optional but recommended)",
            "image": "../static/reed-images/rails.png"
        },
        {
            "problem": "Reed sounds too bright",
            "text": "Insert a plaque or guitar pick and scrape the rails at the back third of the reed.",
            "tools": "File/sandpaper/reed knife, dial indicator (optional but recommended)",
            "image": "../static/reed-images/back-third-rails.png"
        }
    ],
    "tonguing-too-hard": [
        {
            "problem": "Tonguing is too hard",
            "text": "Insert a plaque or guitar pick and scrape evenly over the tip of the reed. This will improve the initial response of the reed.",
            "tools": "File/sandpaper/reed knife, dial indicator (optional but recommended)",
            "image": "../static/reed-images/tip.png"
        },
        {
            "problem": "Tonguing is too hard",
            "text": "Insert a plaque or guitar pick and scrape the channel tips, as pictured below.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/channel-tips.png"
        },
        {
            "problem": "Tonguing is too hard",
            "text": "Insert a plaque or guitar pick and scrape evenly over the front third of the reed. This will lower the resistance of the reed but will also give your reed a brighter sound.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/front-third.png"
        },
        {
            "problem": "Tonguing is too hard",
            "text": "Insert a plaque or guitar pick and scrape the rails at the back third of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/back-third-rails.png"
        },
        {
            "problem": "Tonguing is too hard",
            "text": "Insert a plaque or guitar pick and scrape over the heart of the reed. Be careful not to scrape too much, as this can cause the reed's depth of tone to suffer",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/heart.png"
        }
    ],
    "tonguing-too-easy": [
        {
            "problem": "Tonguing is too easy",
            "text": "With pliers, tighten the first wire. This will make the reed more resistant",
            "tools": "Pliers",
            "image": "../static/reed-images/open-first-wire.png"
        },
        {
            "problem": "Tonguing is too easy",
            "text": "With pliers, pinch the sides of the reed behind the first wire. If the tip is too open, you can squeeze it back closed with your fingers.",
            "tools": "Pliers",
            "image": "../static/reed-images/behind-first-wire.png"
        }, 
        {
            "problem": "Tonguing is too easy",
            "text": "Insert a plaque or guitar pick and scrape the rails at the front third of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/front-third-rails.png"
        }
    ],
    "flat-in-highs": [
        {
            "problem": "Flat in the high register",
            "text": "If you have a reamer, ream the reed. It is best to do this while your reed is completely dry. If you do not have a reamer, proceed to the next suggestion.",
            "tools": "Reamer"
        },
        {
            "problem": "Flat in the high register",
            "text": "Pinch the sides of the reed at the second wire to ensure that it is round.",
            "tools": "Pliers",
            "image": "../static/reed-images/open-second-wire.png"
        },
        {
            "problem": "Flat in the high register",
            "text": "With pliers, close the tip of the reed by pinching over and under the first wire.",
            "tools": "Pliers",
            "image": "../static/reed-images/close-first-wire.png"
        }
    ],
    "sharp-in-lows": [
        {
            "problem": "Sharp in the low register",
            "text": "With pliers, pinch over and under the reed at the second wire.",
            "tools": "Pliers",
            "image": "../static/reed-images/close-second-wire.png"
        },
        {
            "problem": "Sharp in the low register",
            "text": "Insert a plaque or guitar pick and scrape the rails at the back third of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/back-third-rails.png"
        },
        {
            "problem": "Sharp in the low register",
            "text": "Insert a plaque or guitar pick and scrape evenly over the entire back third of the reed.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/back-third.png"
        },
        {
            "problem": "Sharp in the low register",
            "text": "Insert a plaque or guitar pick and scrape the \"eyes\" of the reed, as pictured below.",
            "tools": "File/sandpaper/reed knife, reed plaque or guitar pick, dial indicator (optional but recommended)",
            "image": "../static/reed-images/eyes.png"
        }
    ]
}

// Add each problem checked in the form to an array to determine what advice to display to the user
function getCheckboxValues() {
    const checkboxes = document.querySelectorAll('input[name="problems"]:checked');
    let reedProblems = [];
    checkboxes.forEach((checkbox) => {
        reedProblems.push(checkbox.value);
    });
    return reedProblems;
}

function getReedAdvice() {
    problems = getCheckboxValues();
    // Ensure that the user inputs something
    if (problems.length === 0) {
        return;
    }

    // userSolutions structure: [[[]]] Array of problems checked by user with nested arrays of data from the solutions dict
    let userSolutions = []    

    // Iterate through each problem and push to userSolutions
    problems.forEach(problem => {
        // Iterate through each solution for the current problem and push to userSolutions
        currentProblemSolutions = []
        for (let i = 0; i < solutions[problem].length; i++) {
            thisSolution = []
            // Index into solutions dict
            let prob = solutions[problem][i]["problem"];
            let text = solutions[problem][i]["text"];
            let tools = solutions[problem][i]["tools"];
            if (solutions[problem][i]["image"]) {
                let image = solutions[problem][i]["image"];
                thisSolution.push(prob, text, tools, image);
            } else {
                thisSolution.push(prob, text, tools);
            }
            currentProblemSolutions.push(thisSolution);
        }
        userSolutions.push(currentProblemSolutions);
    });
    return userSolutions;
}

const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

// Get and create elements for text input
const text = document.querySelector(".solution-text");
const tools = document.querySelector(".tools");
const image = document.querySelector(".image");
const prob = document.querySelector(".problem");
let img = document.createElement('img');
img.style.height="200px";
img.style.width="auto";

// Initialize counter variables for iterating through userSolutions
let currentProblem = 0,
    currentSolution = -1;

function displayReedAdvice(better=false) {
    if (better === false) {
        // To move to next solution in userSolutions
        currentSolution++;
        // Check that currentSolution exists
        if (userSolutions[currentProblem][currentSolution]) {
            // Assign HTML elements by indexing into userSolutions
            prob.innerHTML = "Problem: " + userSolutions[currentProblem][currentSolution][0];
            text.innerHTML = userSolutions[currentProblem][currentSolution][1];
            tools.innerHTML = "Tools required: " + userSolutions[currentProblem][currentSolution][2];
            if (userSolutions[currentProblem][currentSolution][3]) {
                img.src = userSolutions[currentProblem][currentSolution][3];
                image.appendChild(img);
            } else {
                img.src = "../static/reed-images/Reed_Template.png";
                image.appendChild(img);
            }
        }
        else if (userSolutions[currentProblem + 1]) {
            // To move to next problem in userSolutions
            currentProblem++;
            // Check that currentProblem exists
            if (userSolutions[currentProblem]) {
                currentSolution = 0;
                // Assign HTML elements by indexing into userSolutions
                prob.innerHTML = "Problem: " + userSolutions[currentProblem][currentSolution][0];
                text.innerHTML = userSolutions[currentProblem][currentSolution][1];
                tools.innerHTML = "Tools required: " + userSolutions[currentProblem][currentSolution][2];
                if (userSolutions[currentProblem][currentSolution][3]) {
                    img.src = userSolutions[currentProblem][currentSolution][3];
                    image.appendChild(img);
                } else {
                    // Display default reed image if no graphic was designated within the solutions dict
                    img.src = "../static/reed-images/Reed_Template.png";
                    image.appendChild(img);
                }
            } else {
                // Return to checkbox form if out of recommendations
                return returnToForm();
            }
        } else {
            // Return to checkbox form if out of recommendations
            return returnToForm();
        }
    } else {
        // To move to next solution in userSolutions
        currentProblem++;
        // Check that currentProblem exists
        if (userSolutions[currentProblem]) {
            currentSolution = 0;
            // Assign HTML elements by indexing into userSolutions
            prob.innerHTML = "Problem: " + userSolutions[currentProblem][currentSolution][0];
            text.innerHTML = userSolutions[currentProblem][currentSolution][1];
            tools.innerHTML = "Tools required: " + userSolutions[currentProblem][currentSolution][2];
            if (userSolutions[currentProblem][currentSolution][3]) {
                img.src = userSolutions[currentProblem][currentSolution][3];
                image.appendChild(img);
            } else {
                // Display default reed image if no graphic was designated within the solutions dict
                img.src = "../static/reed-images/Reed_Template.png";
                image.appendChild(img);
            }
        } else {
            // Return to checkbox form if out of recommendations
            return returnToForm();
        }
    }
}

// Display next solutions based on user response
yes.addEventListener('click', (e) => {
    e.preventDefault();
    displayReedAdvice(true);
});

no.addEventListener('click', (e) => {
    e.preventDefault();
    displayReedAdvice();
});

function returnToForm() {
    problemPicker.style.display="block";
    reedSolutions.style.display="none";
    document.getElementById("reed-problems").reset();
    currentProblem = 0,
    currentSolution = -1;
}

const problemPicker = document.getElementById("problem-picker");
const reedSolutions = document.getElementById("reed-solutions");

// Onclick for submit button in trouble-shooter.html
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    userSolutions = getReedAdvice();
    // Hide form
    problemPicker.style.display="none";
    reedSolutions.style.display="block";
    displayReedAdvice();
});
