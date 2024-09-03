'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Notes', [
      {
        title: 'Computer Vision - Chapter 1.1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Python - Chapter 1.1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Wireless Communication - Chapter 1.1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
