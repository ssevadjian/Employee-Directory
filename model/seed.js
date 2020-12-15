const mongoose = require("mongoose");
// const { ObjectId } = require("mongodb");
const db = require('./');
const seedDb = async () => {
  //Creating and saving to database
  mongoose
    .connect(
      "mongodb+srv://mongoUser:mongopass@cluster0.ucuqo.mongodb.net/devUserDirectory?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Yee"))
    .catch((e) => console.log(e));
  mongoose.set("debug", true);
  try {
    await db.User.deleteMany({});
    // Way #1
    const stephanie = new db.User({
      username: "ssevadjian",
      password: "ayhusgdasuyidga",
      name: 'Stephanie',
      surname: 'Sevadjian',
      email: 'ssevadjian@ff.com',
      phone: '(415) 555-5555',
      jobTitle: 'Technical Account Manager'
    });
    // When the data is actually saved to the database
    await stephanie.save();
    //   Way #2
    //  Data is saved to the database right away
    let ashley = await db.User.create({
      username: "asevadjian",
      password: "ahbdpiauydghadas",
      name: 'Ashley',
      surname: 'Sevadjian',
      email: 'asevadjian@ff.com',
      phone: '(972) 555-5555',
      jobTitle: 'Global Support Manager'
    });
    
    stephanie.username = "Steph";
    await stephanie.save();
    const foundAshley = await db.User.findOneByUsername("asevadjian");
    foundAshley.sayMyUsername();
    // alice.hobbies.push('debugging');
    // alice.hobbies.push('coding');
    //
    // alice.hobbies = alice.hobbies.filter(hobby => hobby === 'coding');
    // await alice.save();
    // console.log(alice);
    // const deleted = await db.Chameleon.findByIdAndDelete(grilledCheese2._id);
    // console.log('grilled cheese 2', deleted);
    //
    // const otherGrilledCheese = await db.Chameleon.findOneAndDelete({ name: 'Grilled Cheese' }, {
    //   select: 'name'
    // });
    // console.log('all the other grilled', otherGrilledCheese);
    ashley = await db.User.findByIdAndUpdate(
      ashley._id,
      {
        username: "Wonderland",
        $pull: {
          hobbies: "debugging",
        },
        // $addToSet: {
        //   hobbies:['coding', 'swimming', 'nunchucking', 'coding'],
        //   chameleons: [grilledCheese._id, grilledCheese2._id, grilledCheese._id],
        // },
        // hobbies: {$push: ['coding', 'swimming', 'nunchucking']},
        // Add to set makes it so that if the data is already in the array, it doesn't add it
        //  Push makes it so that if the data is already in there, it still adds it
        // chameleons: {push: [ grilledCheese._id, grilledCheese2._id ]},
      },
      {
        new: true,
      }
    );
    console.log(ashley);
    // const manny = await db.User.find({ username: 'Manny' }, 'username hobbies chameleons createdAt').populate('chameleons');
    // console.log(JSON.stringify(manny, null, 2));
    // console.log(manny.chameleons);
    // grilledCheese = await db.Chameleon.findById(grilledCheese._id).populate({ path: 'owner', select: 'username'});
    // find all chameleons
    // const selectCham = await db.Chameleon.find({
    //   $ni: [{ name: 'Chamillionaire', }, { age: 1 }]
    // });
    // const ninChams = await db.Chameleon.find({
    //   age: { $in: [1, 2] }
    // });
    //
    // console.log(ninChams);
    // const allChams = await db.Chameleon.find({}, 'name age isHungry').populate('owner');
  } catch (e) {
    console.log(e);
  }
};
seedDb()
  .then(() => process.exit(0))
  .catch((e) => console.log(e));
