export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING
      },
      socialId: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      userType: {
        type: DataTypes.STRING
      },
      imageUrl: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      dateOfBirth: {
        type: DataTypes.STRING
      },
      accountName: {
        type: DataTypes.STRING
      },
      accountNumber: {
        type: DataTypes.STRING
      },
      bankName: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  User.associate = (models) => {
    const { passwordManager, farmLand } = models;
    User.hasOne(passwordManager, { foreignKey: 'id' });
    User.hasMany(farmLand, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };
  return User;
};
