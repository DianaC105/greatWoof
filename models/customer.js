var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            // allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        customer_password: {
            type: DataTypes.STRING
            // allowNull: false
        },
        phone: {
            type: DataTypes.STRING
            // allowNull: false
        },
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        customer_state: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        pet_name1: DataTypes.STRING,
        pet_name2: DataTypes.STRING,
        pet_name3: DataTypes.STRING,
        comments: DataTypes.STRING
    },
    {
        timestamps: false
    });

    Customer.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    Customer.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    Customer.associate = function(models) {
        Customer.hasMany(models.Dog, {
            onDelete: "cascade"
        });
    };
    return Customer;
};

