module.exports = function(sequelize, DataTypes) {
 var burgers = sequelize.define("burgers", {
   burger: DataTypes.STRING,
   devour: DataTypes.BOOLEAN
 });
 return burgers;
};