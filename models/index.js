const Tutor = require('./Tutor');
const Student = require('./Student');
const Review = require('./Review');

Tutor.hasMany(Review, {
    foreignKey:( 'tutor_id')
});

Review.belongsTo(Tutor, {
    foreignKey:('tutor_id')
});

Student.hasMany(Review, {
    foreignKey:( 'student_id')
});

Review.belongsTo(Student, {
    foreignKey:('student_id')
});

module.exports = { Student, Tutor, Review};