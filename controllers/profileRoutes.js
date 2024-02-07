const router = require('express').Router()
const { Project, User } = require('../models');

// GET all projects for homepage
router.get('/', async (req, res) => {
  console.log("homepage")
  try {
    const dbProjectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    console.log(dbProjectData)

    const projects = dbProjectData.map((project) =>
      project.get({ plain: true })
    );
    // TODO: Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      projects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one project
router.get('/project/:id', async (req, res) => {
  try {
    const dbProjectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'name',
          ],
        },
      ],
    });

    const project = dbProjectData.get({ plain: true });
    // TODO: Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('project', { project });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });
//     // TODO: Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render('painting', { painting });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;


module.exports = router;