'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    rol: DataTypes.ENUM('adm', 'per', 'cli'),
    personnelNumber: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL//no se guarda en bd, solo sirve para comparar
  }, {});

  User.login = function(personnelNumber,password){
    return User.findOne({//busca uno en concreto.
      where: {
        personnelNumber //En campo personnelNumber bucar el personnelNumber dado. O "personnelNumber" por shorthand propertys.
      }
    }).then(user=>{
      if(!user) return null;//2- buscar el password en texto plano y hashearlo con el que viene en "user" para saber si son iguales
      return user.authenticatePassword(password).then(valid => {
        /* hasta aca vemos que hay 2 tipos de metodos:
        1- los metodos de clase "User.login"como el de la linea 16 y 2- los metodos de instancia que solo estan disponibles 
        para los objetos que fueron creados a partir de la clase User.
         */
        if(valid) return user;
        return null;
      })
    })
  }
  //proceso de creacion de metodo de una instancia para añadir un metodo al prototipo de una clase
  User.prototype.authenticatePassword = function(password){
    return new Promise((res,rej)=>{//devuelve promesa.
      //este metodo recibe el password original en texto plano, el password hash,  
      bcrypt.compare(password, this.password_hash, function(err, valid){ //el function(err, valid) es un callback. err tiene los posibles valores. si valid es true son iguales
        if(err) return rej(err);
        res(valid);
      })
    })
  }

  User.associate = function(models) {
    //forma 1 sin tabla intermedia
    /* User.hasMany(models.Order, {
      foreignKey: "userId",
      as: "orders"
    }) */
    User.hasMany(models.Order, {
      as: 'orders'
    })

  };

  //hook, ejecuta operaciones asincronas
  User.beforeCreate(function(user, options){
    return new Promise((res, rej)=>{
      if(user.password){//verifico si el campo virtual tiene un valor
        bcrypt.hash(user.password, 10, function(error, hash){//pass en texto plano, cant de rondas p hash seguro, callback
          user.password_hash = hash;//generamos el hash y se lo pasamos al atributo que se guarda en bd
          res();
        })
      }
    })
  });

  return User;
};