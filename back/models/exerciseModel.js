import mongoose from 'mongoose'

const exerciseSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		times: {
			type: String,
			required: true,
		},
		imageId: {
			type: String,
			required: true,
		},
	},
	{
		minimize: false,
		timestamps: true,
	}
)

const Exercise = mongoose.model('Exercise', exerciseSchema)

export default Exercise
