const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    medical_history: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    medications: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    personality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caution: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    vet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    other: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pet",
  }
);

module.exports = Pet;
