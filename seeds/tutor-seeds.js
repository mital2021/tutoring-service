const { Tutor } = require('../models');

const tutordata = [
    {
        firstname: 'Mital',
        lastname: 'Goghari',
        subject: 'HTML',
        hourlyrate: 15,
        user_id: 10
    },    
    {
        firstname: 'Edgar',
        lastname: 'Quintanilla',
        subject: 'Computer Science',
        hourlyrate: 25,
        user_id: 8
    },
    {
        firstname: 'Ahmad',
        lastname: 'Saeed',
        subject: 'Javascript',
        hourlyrate: 18,
        user_id: 1
    },
    {
        firstname: 'Erika',
        lastname: 'Goghari',
        subject: 'Database',
        hourlyrate: 15,
        user_id: 4
    },
    {
        firstname: 'John',
        lastname: 'Quintanilla',
        subject: 'Javascript',
        hourlyrate: 25,
        user_id: 7
    },

];

const seedTutors = () => Tutor.bulkCreate(tutordata);

module.exports = seedTutors;
