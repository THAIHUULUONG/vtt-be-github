const Checking = require('../../models/checking/checkinginformation')

// create new checking => /api/v1/checking/new
exports.newChecking = async (req, res, next) => {
    const checking = await Checking.create(req.body);

    res.status(201).json({
        success: true,
        checking
    })
}

// get all checking => api/v1/products
exports.getChecking = async (req, res, next) => {
    const checking = await Checking.find();

    res.status(200).json({
        success: true,
        count: checking.length,
        checking    
    })
}

// get single checking => api/v1/checking/:id
exports.getSingleChecking = async (req, res, next) => {
    const checking = await Checking.findById(req.params.id);

    if(!checking) {
        return res.status(404).json({
            success: false,
            message: 'Checking not found'
        })
    }

    res.status(200).json({
        success: true,
        checking
    })
}
