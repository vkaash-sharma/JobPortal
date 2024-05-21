module.exports = (sequelize, DataTypes) => {
    const Jobs = sequelize.define('jobs', {
        job_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_startDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        job_endDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        job_skills : {
            type: DataTypes.INTEGER,
            allowNull : false
        } ,
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isInt: true,
            },
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isInt: true,
            },
        },
        deleted: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
            validate: {
                isInt: true,
            },
        },
    })


    return Jobs;
}