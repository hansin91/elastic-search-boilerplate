const { City } = require('../models')
const { Op } = require('sequelize')
const { client } = require('../elastic')

class CityController {
  static searchCity (req, res, next) {
    City.findAll({
      where: {
        name: {
          [Op.iLike]: `%${req.query.q}%`
        }
      }
    })
      .then(cities => {
        res.status(200).json(cities)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = CityController