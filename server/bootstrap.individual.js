//--------------------------------------------------------------------------
// Server Side Helper Functions
//
// requires Meteor.call() from the client to initate
// used to validate data before inserting new tasks into the database

Meteor.methods({
    initializeDefaultTasks: function (options) {
        console.log('damn!  initializeDefaultTasks');


        var taskId = null;

        taskId = Todos.insert({
            text: 'Get annual flu shot.',
            timestamp: timestamp,
            tags: ["annual checkup", "vaccines"],
            image: "icons/Syringe_and_Vial.png",
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
            image: "icons/Blood_bag.png",
            owner: Meteor.userId(),
            creator: Meteor.userId(),
            done: false,
            star: false
        });

        console.log('Task created: ' + taskId);
        taskId = Todos.insert({
            text: 'Get blood type checked.',
            timestamp: timestamp,
            tags: ["baseline", "blood"],
            image: "icons/Blood_bag.png",
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
            image: "icons/Medicine_Liquid.png",
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
            image: "icons/Dentistry.png",
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
            image: "icons/Medicine_and_Water.png",
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
            image: "icons/Heart_Donor.png",
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
            image: "icons/Heart.png",
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
            image: "icons/Allergy_Vials.png",
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
            image: "icons/Pregnant.png",
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
            image: "icons/DNA.png",
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
            image: "icons/Donar_List.png",
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
            image: "icons/Xray_Mammography.png",
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
            image: "icons/Allergy_Vials.png",
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
            image: "icons/Allergy_Vials.png",
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
            image: "icons/Eye_Chart.png",
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
            image: "icons/Transfusion.png",
            owner: Meteor.userId(),
            creator: Meteor.userId(),
            done: false,
            star: false
        });
        console.log('Task created: ' + taskId);


    }
});

