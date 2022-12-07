import asyncHandler from 'express-async-handler'
import Workout from '../../models/workoutModel.js'

// @desc		Create new workouts
// @route		GET /api/users/workouts
// @access	Private
export const createNewWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body

	const workout = await Workout.create({
		name,
		exercises: exerciseIds,
	})

	res.json(workout)
})

// @desc		Get workout
// @route		GET /api/workout/:id
// @access	Private
export const getWorkout = asyncHandler(async (req, res) => {
	const workout = await Workout.findById(req.params.id)
		.populate('exercises')
		.lean()

	const minutes = Math.ceil(workout.exercises.length * 3.7)

	res.json({ ...workout, minutes })
})

/*
	[x] - Get workout with list exercises with calc minutes
	[] - Create exerciseLog by exercise in workout
	[] - Get exercise page with previous result 
	[] - Update exercise log times + completed
	[] - Update workoutLog completed
	[] - Update workout & exercise
	[] - Delete exercise & workout 
	[] - Get statistics for profile
*/
