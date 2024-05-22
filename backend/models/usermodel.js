const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    createdOn: { type: Date, default: Date.now }
});

// Add a virtual property for initials
userSchema.virtual('initials').get(function() {
    const fullName = this.fullName || '';
    const names = fullName.split(' ');
    return names.reduce((initials, name) => initials + name[0], '');
});

module.exports = mongoose.model("User", userSchema);
