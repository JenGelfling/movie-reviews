const sequelize = require('../config/connection');
const { User } = require("../models");
const userdata = require("./seeds");
const moviedata = require("./seeds");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  let seededUsers = []
  try {
    seededUsers = await User.bulkCreate(userdata, {
      individualHooks: true,
      returning: true
    })
  } catch(err) {
    console.log(`Seeding failed: ${err.message}`)
  }

  console.log(`${seededUsers.length} users have been created.`)

  /* ===== any more seed operations go here ==================== */

  let seededMovies = []
  try {
    seededMovies = await Movie.bulkCreate(moviedata, {
      individualHooks: true,
      returning: true
    })
  } catch(err) {
    console.log(`Seeding failed: ${err.message}`)
  }

  console.log(`${seededMovies.length} users have been created.`)

  console.log("Seeding complete!")
  process.exit(0);
}

seedDatabase();