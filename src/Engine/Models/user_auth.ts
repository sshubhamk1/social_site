import { DataTypes, Model } from "sequelize";

import { sequelize } from "./index";

export interface User_authAttributes {
  user_id?: number;
  auth_key?: string;
}

export class User_auth extends Model {
  id!: bigint;
  createdAt!: Date;
  updatedAt!: Date;

  user_id!: bigint;
  auth_key!: string;
}

User_auth.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    auth_key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "user_auths",
  }
);
