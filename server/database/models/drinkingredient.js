module.exports = (sequelize, DataTypes) => {
  var DrinkIngredient = sequelize.define('DrinkIngredient', {
    measure: DataTypes.STRING
  });
  DrinkIngredient.associate = models => {
    DrinkIngredient.belongsTo(models.Drink, {
      foreignKey: 'drinkId'
    });
    DrinkIngredient.belongsTo(models.Ingredient, {
      foreignKey: 'ingredientId'
    });
  };
  return DrinkIngredient;
};
