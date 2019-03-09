module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        pet_name1: DataTypes.STRING,
        pet_name2: DataTypes.STRING,
        pet_name3: DataTypes.STRING,
        comments: DataTypes.STRING
    });

    Customer.associate = function(models) {
        Customer.hasMany(models.Dog, {
            onDelete: "cascade"
        });
    };
    return Customer;
}

