'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Settings', [{
      name: 'node',
      icp: '鄂ICP备xxxxx号-xxxxx',
      copyright: '© 2013 xxxx. All Rights Reserved.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Settings', null, {});
  }

};
