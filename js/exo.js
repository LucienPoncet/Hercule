console.log('test 1...2...1...2');



const Hercule = {
    name : "Hercule",
    job : "Demi-Dieu",
    age : 35,
    department : 75,
    arm : 60.5,
    inRelationship : true,
}

base.fillProfil(Hercule);



const friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];

base.printFriends(friends);

base.setBestFriend(friends[0]);



const title = document.createElement("h1");

title.classList.add("banner__title");

title.innerText = "Vous consultez le profil de Hercule";

const header = document.querySelector("#header-banner");

header.append(title);



for (let number = 0; number <= 11; number ++) {
    base.displayWork(number);
}



const availability = document.querySelector("#availability");

if (8 <= base.date <= 20) {
    availability.innerText = "Disponible";
} else {
    availability.innerText = "Non Disponible";
    availability.classList.add("off")
}



function generateUsername(name, department) {
    const valueUsername = (`${name}-du-${department}`);
    const idName = document.querySelector("#profil-name");
    idName.innerText = valueUsername;
}

generateUsername(Hercule.name, Hercule.department);



const toggler = document.getElementById("menu-toggler");

toggler.addEventListener("click", handleToggler);

function handleToggler() {
    header.classList.toggle("banner--open");
}



const contact = document.querySelector(".contact__button");

contact.addEventListener("click", handleContact);

function handleContact(event) {
    event.preventDefault();
    alert("Hercule ne souhaite pas être dérangé");
}



const percentageH = parseInt(base.vote.hercule / (base.vote.hercule + base.vote.cesar) * 100);

const percentageC = parseInt(base.vote.cesar / (base.vote.hercule + base.vote.cesar) * 100);

const idpercentageH = document.querySelector("#trends-hercule .people__popularity");

idpercentageH.append(percentageH);

idpercentageH.innerText = percentageH + "%";

const idpercentageC = document.querySelector("#trends-cesar .people__popularity");

idpercentageC.append(percentageC);

idpercentageC.innerText = percentageC + "%";



const linesH = document.querySelector("#trends-hercule .people__bar");

linesH.style.width = `${percentageH}%`;

const linesC = document.querySelector("#trends-cesar .people__bar");

linesC.style.width = `${percentageC}%`;



console.log(base.activities);

if (base.activities[0] === 'Hercule' && base.activites[1] === true ) {
    const act = document.querySelector("#activities");
    act.classList.remove("hidden");
    const tasks = document.createElement("li");
    const tasksElement = document.querySelector(".tasks");
    tasksElement.append(tasks);
    tasks = base.activities[2];
} else {

}

