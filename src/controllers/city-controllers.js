const {CityService} = require('../services/index');

const cityService = new CityService();

/***
 * post
 * data -> req.body
 */

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            massage:'successfully created a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false, 
            massage:'Not able to create a city',
            err: error 
        })
    }

} 
//DELETE. -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            massage:'successfully deleted a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false, 
            massage:'Not able to delete the city',
            err: error 
        })
    }
} 
// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            massage:'successfully Fetched  a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false, 
            massage:'Not able to get the city',
            err: error 
        })
        
    }
} 

// patch -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            massage:'successfully Fetched  a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false, 
            massage:'Not able to update the city',
            err: error 
        })
    }
} 

module.exports = {
    create,
    destroy,
    get,
    update
}