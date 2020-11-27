import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
export interface UsersAttributes {
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  country?: string;
  gender?: string;
  password?: string;
  reset_token?: string;
}

export class Users extends Model {
  id!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date;

  username!: string;
  first_name!: string;
  last_name!: string;
  email!: string;
  phone!: string;
  country!: string;
  gender!: string;
  password!: string;
  reset_token!: string;
}

Users.init(
  {
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
  },
  {
    tableName: "users",
    sequelize,
    paranoid: true,
  }
);
