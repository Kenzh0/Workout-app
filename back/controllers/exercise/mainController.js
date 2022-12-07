import asyncHandler from 'express-async-handler'
import Exercise from '../../models/exerciseModel.js'

// @desc		Create new exercises
// @route		GET /api/users/exercises
// @access	Private
export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, imageId } = req.body

	const exercise = await Exercise.create({
		name,
		times,
		imageId,
	})

	res.json(exercise)
})

// @desc		Get exercise
// @route		GET /api/users/exercises/:id
// @access	Private
// export const getExercise = asyncHandler(async (req, res) => {
// 	const { name, times, image } = req.body

// 	const exercise = await Exercise.create({
// 		name,
// 		times,
// 		image,
// 	})

// 	res.json(exercise)
// })
