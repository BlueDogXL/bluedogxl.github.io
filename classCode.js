class Rocket {
    // make the properties
    constructor(
        fuelType,
        weight,
        power
    ){
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("Launch sequence started!");
        alert("Clear the launch area, launch is about to start!");
        alert("Launch sequence started!");
    }
    landing(){
        console.log("Landing sequence started!");
        alert("Landing sequence started!");
    }
    detachThruster(){
        console.log("Thruster detached!");
        alert("Thruster detached!");
    }
}
class Mission {
    constructor(
        objective,
        oxygenLevel,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spacecraft,
        numberOfAstronauts
    ){
        this.objective = objective
        this.oxygenLevel = oxygenLevel
        this.launchDateDay = launchDateDay
        this.launchDateMonth = launchDateMonth
        this.launchDateYear = launchDateYear
        this.spacecraft = spacecraft
        this.numberOfAstronauts = numberOfAstronauts
    }
    launchMission(){
        console.log("launch mission started!")
        alert("launch mission started! Best of luck, " + this.spacecraft + "!")
    }
    displayMissionParameters(){
        console.log("Paramter display started!")
        alert("the spacecraft " + this.spacecraft + " will launch on " + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear + " with an O2 level of " + this.oxygenLevel + " percent.")
    }
}
function runSpringDisplay(){
    console.log("Displaying Spring Mission!");
    springLaunch.displayMissionParameters();
}
function spLaunch(){
    console.log("Spring Launch started!");
    springLaunch.launchMission();
}
function runFallDisplay(){
    console.log("Displaying Fall Mission!");
    fallLaunch.displayMissionParameters();
}
function faLaunch(){
    console.log("Fall Launch started!");
    fallLaunch.launchMission();
}