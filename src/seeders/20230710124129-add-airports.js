'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [

      {
        name: "Tiruchirappalli International Airport",
        cityId: 58,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Coimbatore International Airport",
        cityId: 58,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Chandigarh Airport ",
        cityId: 63,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "Madurai Airport",
        cityId: 58,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {})

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
