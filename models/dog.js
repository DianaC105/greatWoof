module.exports = function(sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
        pet_name: DataTypes.STRING,
        breed: DataTypes.STRING,
    });

    Dog.associate = function(models) {
        Dog.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Dog;
}