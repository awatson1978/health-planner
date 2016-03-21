//--------------------------------------------------------------------------
// Server Side Helper Functions
//
// requires Meteor.call() from the client to initate
// used to validate data before inserting new tasks into the database

Meteor.methods({
  initializeDefaultTasks: function (options) {
    console.log('damn!  initializeDefaultTasks');

    var timestamp = (new Date()).getTime();
    var taskId = null;

    taskId = Todos.insert({
      text: 'Get annual flu shot.',
      timestamp: timestamp,
      tags: ["annual checkup", "vaccines"],
      image: "Syringe_and_Vial.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);


    taskId = Todos.insert({
      text: 'Register and donate blood.',
      timestamp: timestamp,
      tags: ["community", "blood"],
      image: "Blood_bag.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);


    taskId = Todos.insert({
      text: 'Keep below 1500 calories per day.',
      timestamp: timestamp,
      tags: ["nutrition"],
      image: "Medicine_Liquid.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);


    taskId = Todos.insert({
      text: 'Annual dental visit.',
      timestamp: timestamp,
      tags: ["annual checkup"],
      image: "Dentistry.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);

    taskId = Todos.insert({
      text: 'Replace milk with almond milk.',
      timestamp: timestamp,
      tags: ["nutrition", "allergies"],
      image: "Medicine_and_Water.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);


    taskId = Todos.insert({
      text: 'Make organ donation decision.',
      timestamp: timestamp,
      tags: ["community"],
      image: "Heart_Donor.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);


    taskId = Todos.insert({
      text: 'Increase heart rate by at least 30 minutes today.',
      timestamp: timestamp,
      tags: ["exercise", "cardio"],
      image: "Heart.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);


    taskId = Todos.insert({
      text: 'Take vitamin supplement once a day.',
      timestamp: timestamp,
      tags: ["allergies", "medication tracking"],
      image: "Allergy_Vials.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);


    taskId = Todos.insert({
      text: 'Yoga stretches for 30 minutes a day.',
      timestamp: timestamp,
      tags: ["yoga", "cardio"],
      image: "Pregnant.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);



    taskId = Todos.insert({
      text: 'Buy genetic testing kit from 23andme.',
      timestamp: timestamp,
      tags: ["genetics", "baseline"],
      image: "DNA.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);

    taskId = Todos.insert({
      text: 'Fill out family history worksheet for diabetes risks.',
      timestamp: timestamp,
      tags: ["baseline", "diabetes", "risk factors"],
      image: "Donar_List.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);


    taskId = Todos.insert({
      text: 'Get mammogram screening done.',
      timestamp: timestamp,
      tags: ["breast cancer", "radiology", "annual physical"],
      image: "Xray_Mamography.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);



    taskId = Todos.insert({
      text: 'Take hypertension medication once a day.',
      timestamp: timestamp,
      tags: ["hypertension", "medication tracking"],
      image: "Allergy_Vials.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);

    taskId = Todos.insert({
      text: 'Take vitamin supplement once a day.',
      timestamp: timestamp,
      tags: ["medication tracking", "nutrition"],
      image: "Allergy_Vials.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);

    taskId = Todos.insert({
      text: 'Get eye sight checked.',
      timestamp: timestamp,
      tags: ["annual checkup", "baseline"],
      image: "Eye_Chart.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);

    taskId = Todos.insert({
      text: 'Get blood type checked.',
      timestamp: timestamp,
      tags: ["blood"],
      image: "Transfusion.png",
      owner: Meteor.userId(),
      creator: Meteor.userId(),
      done: false,
      star: false
    });
    console.log('Task created: ' + taskId);


  }
});
