module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    uniqueId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phonenumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isGraduate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return User;
};
