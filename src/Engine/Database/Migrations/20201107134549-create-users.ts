import { QueryInterface, Sequelize, DataTypes } from "sequelize";

export = {
  up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
      },
      country: {
        type: DataTypes.STRING,
        defaultValue: "india",
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reset_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
