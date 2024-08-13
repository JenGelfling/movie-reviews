const sequelize = require('../config/connection');
const { User, Movie } = require("../models");
const { userdata, moviedata } = require("./seeds");


const seedDatabase = async () => {
  try {
    // Sync database and clear existing data
    await sequelize.sync({ force: true });

    // Seed Users
    const seededUsers = await User.bulkCreate(userdata, {
      individualHooks: true,
      returning: true
    });
    console.log(`${seededUsers.length} users have been created.`);

    // Seed Movies
    const seededMovies = await Movie.bulkCreate(moviedata, {
      returning: true
    });
    console.log(`${seededMovies.length} movies have been created.`);

    console.log("Seeding complete!");
  } catch (err) {
    console.error(`Seeding failed: ${err.message}`);
  } finally {
    process.exit(0);
  }
};


//   await sequelize.sync({ force: true });

//   let seededUsers = []
//   try {
//     seededUsers = await User.bulkCreate(userdata, {
//       individualHooks: true,
//       returning: true
//     })
//   } catch(err) {
//     console.log(`Seeding failed: ${err.message}`)
//   }

//   console.log(`${seededUsers.length} users have been created.`)

//   /* ===== any more seed operations go here ==================== */

//   let seededMovies = []
//   try {
//     seededMovies = await Movie.bulkCreate(moviedata, {
//       individualHooks: true,
//       returning: true
//     })
//   } catch(err) {
//     console.log(`Seeding failed: ${err.message}`)
//   }

//   console.log(`${seededMovies.length} users have been created.`)

//   console.log("Seeding complete!")
//   process.exit(0);
// }

seedDatabase();