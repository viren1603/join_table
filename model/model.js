const database = require("../config/db")
const sequlize = require("sequelize")



const deparment = database.define('deparment', {
    id: {
        type: sequlize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    department_name: {
        type: sequlize.DataTypes.STRING(250),
        allowNull: false,
    },
},
    {
        // freezeTableName: true,
        timestamps: true,
        paranoid: true,
        createdAt: "created_at", // alias createdAt as created_date
        updatedAt: "updated_at", // alias updatedAt as updated_at
        deletedAt: "deleted_at", // alias deletedAt as deleted_at
    }
)
deparment.sync()
const employe = database.define('employee', {
    id: {
        type: sequlize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequlize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequlize.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequlize.DataTypes.STRING,
        allowNull: false,
    },
    departnemt_id: {
        type: sequlize.DataTypes.INTEGER,
        references: {
            model: deparment,
            key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
        allowNull: false,
    }
}, {
    paranoid: true
})
employe.sync()


deparment.hasMany(employe, { foreignKey: 'departnemt_id' })
employe.belongsTo(deparment, { foreignKey: 'departnemt_id' })
module.exports = { employe, deparment };
