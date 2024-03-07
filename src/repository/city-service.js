//const { response } = require('express');
const {cityRepository} = require('../repository/index')

class cityService{
    constructor() {
        this.cityRepository = new cityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something wwent wrong at service layer");
            throw {error}
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something wwent wrong at service layer");
            throw {error}
        }

    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something wwent wrong at service layer");
            throw {error}
        }

    }

    async getCity (cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something wwent wrong at service layer");
            throw {error}
        }
    }
}

module.exports = cityService;