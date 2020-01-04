const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Bootcamp = require('../models/BootcampModel');

//@desc Show all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
// No Async Handler
/* exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        })
    } catch (error) {
        return next(error)
    }
} */

//@desc Show all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
// Async Handler
exports.getBootcamps =  asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    })
}) 

//@desc Show single bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
// No Async Handler
/* exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) {
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
            )
        }

        return res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        return next(error)
    }
} */

//@desc Show single bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
// Async Handler
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if(!bootcamp) {
        return next(
            new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
        )
    }

    return res.status(200).json({
        success: true,
        data: bootcamp
    })
})

//@desc Create new bootcamp
//@route POST /api/v1/bootcamps
//@access Private
//No Async Handler
/* exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        next(error)
    }
} */

//@desc Create new bootcamp
//@route POST /api/v1/bootcamps
//@access Private
//Async Handler
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp
    })
})


//@desc Update a bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private
//No Async Handler
/* exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });

        console.log(bootcamp);

        if(!bootcamp) {
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
            )
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        next(error)
    }
} */

//@desc Update a bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private
//Async Handler
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true
    });

    console.log(bootcamp);

    if(!bootcamp) {
        return next(
            new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
        )
    }
    res.status(200).json({
        success: true,
        data: bootcamp
    })
})

//@desc Delete a bootcamp
//@route Delete /api/v1/bootcamps/:id
//@access Private
//No Async Handler
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamp) {
            return next(
                new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
            )
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        next(error)
    }
}

//@desc Delete a bootcamp
//@route Delete /api/v1/bootcamps/:id
//@access Private
//Async Handler
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if(!bootcamp) {
        return next(
            new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
        )
    }

    res.status(200).json({
        success: true,
        data: bootcamp
    })
})