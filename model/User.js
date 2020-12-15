const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
  name: String,
  surname: String,
  email: String,
  phone: String,
  jobTitle: {
    type: String,
    required: true,
    enum: ['Support Analyst', 'Receptionist', 'Support Engineer', 'Product Engineer', 'Technical Account Manager', 'Technical Customer Success Manager', 'Customer Success Manager', 'Support Manager', 'Global Support Manager', 'Account Executive', 'Accountant']
  },
  hobbies: Array,
  
}, {timestamps: true});

UserSchema.static({
  findOneByUsername: function(username) {
    try {
      return this.findOne({username});
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
});


UserSchema.method({
  sayMyUsername: function() {
    console.log(`I AM ${this.username}`);
  },
  comparePassword: async function(candidatePassword) {
    console.log('this in compare password',this);
    try {
      return await bcrypt.compare(candidatePassword, this.password);
    } catch (e) {
      throw new Error(e);
    }
  },
});

UserSchema.pre('save', async function(next) {
  console.log('I am the this in pre hook', this);
  const user = this;
  if (user.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    } catch (e) {
      next(e);
    }
  }
  next();
});

const User = model('User', UserSchema);

module.exports = User;