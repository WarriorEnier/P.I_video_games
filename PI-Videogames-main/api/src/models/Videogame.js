const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type:DataTypes.UUID,//Te genera un id aleatorio con numeros y letras
      defaultValue: DataTypes.UUIDV4,//Identificador universal segun la norma V4
      allowNull:false,//campo obligatorio
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description_raw:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    release_date:{
      type:DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    rating:{
      type:DataTypes.FLOAT,
      defaultValue: 1.0,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png'
    },
    platforms:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
    }
  });
};
