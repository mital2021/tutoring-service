const { Tutor } = require('../models');
//const { create, update } = require('../models/Tutor');

const tutordata = [
    {
        firstname: 'Mital',
        lastname: 'Goghari',
        subject: 'HTML',
        hourlyrate: 15,
        user_id: 1,
        created_at: Date.now(),
        updated_at: Date.now()
    },    
    {
        firstname: 'Edgar',
        lastname: 'Quintanilla',
        subject: 'Computer Science',
        hourlyrate: 25,
        user_id: 2,
        created_at: Date.now(),
        updated_at: Date.now()
    },
    {
        firstname: 'Ahmad',
        lastname: 'Saeed',
        subject: 'Javascript',
        hourlyrate: 18,
        user_id: 3,
        created_at: Date.now(),
        updated_at: Date.now()
    },
    {
        firstname: 'Erika',
        lastname: 'Goghari',
        subject: 'Database',
        hourlyrate: 15,
        user_id: 4,
        created_at: Date.now(),
        updated_at: Date.now()
    },
    {
        firstname: 'John',
        lastname: 'Quintanilla',
        subject: 'Javascript',
        hourlyrate: 25,
        user_id: 5,
        created_at: Date.now(),
        updated_at: Date.now()
    },

];

const seedTutors = () => Tutor.bulkCreate(tutordata, {individualHooks: true} );

module.exports = seedTutors;
