module.exports = function (sequelize, DataTypes) {
    var Burgers = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [2, 20]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burgers;
}