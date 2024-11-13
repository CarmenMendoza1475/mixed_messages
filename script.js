// This script will run a radomized message generator

// Returns a number from 0 to num - 1
const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
};

const workoutRoutine = {
    bodyToWorkout: ['arms', 'legs', 'back', 'chest'],
    duration: [30, 15, 45, 60],
    doCardio: ['yes run', 'yes walk', 'no']
};

// Store workout plan in an array
let personalWorkoutPlan = [];

// Loop through the object
for (let plan in workoutRoutine) {
    let planOption = generateRandomNumber(workoutRoutine[plan].length)

   // Use the object's properties to customize the message being added to personalWorkoutPlan
    switch(plan) {
        case 'bodyToWorkout':
            personalWorkoutPlan.push(`You should workout your: ${workoutRoutine[plan][planOption]}.`)
            break;
        case 'duration':
            personalWorkoutPlan.push(`Workout for ${workoutRoutine[plan][planOption]} minutes.`)
            break;
        case 'doCardio': 
            personalWorkoutPlan.push(`Should you do cardio: ${workoutRoutine[plan][planOption]}.`)
            break;
        default:
            personalWorkoutPlan.push('There is not enough info.')
        
    }
}

console.log(personalWorkoutPlan);
  
const formatWorkoutPlan = (workout) => {
    const formatted = personalWorkoutPlan.join(`\n`);
    console.log(formatted);
} 

formatWorkoutPlan(personalWorkoutPlan);