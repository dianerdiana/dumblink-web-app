"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_user_links extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_user_links.hasMany(models.tb_links, {
        as: "links",
        foreignKey: {
          name: "ulink_id",
        },
      });
    }
  }
  tb_user_links.init(
    {
      user_id: DataTypes.INTEGER,
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      unique_link: DataTypes.STRING,
      view_count: DataTypes.INTEGER,
      template: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_user_links",
    }
  );
  return tb_user_links;
};
