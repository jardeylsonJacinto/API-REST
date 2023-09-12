import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Photo from '../models/Photo';
import Student from '../models/Student';
import User from '../models/User';

const models = [Photo, Student, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
