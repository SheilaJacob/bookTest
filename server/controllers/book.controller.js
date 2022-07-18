const Book = require('../models/book.model');


//create
// module.exports.createOne = (request, response) => {
//     Book.create(request.body)
//         .then((createOne) => {
//             // response.json(createOne)
//             response.status(201).json(createOne);
//         })
//         .catch((err) => {
//             response.status(400).json({err});
//         });
//     };


module.exports = {
    create: (request, response) => {
        const { title, pages } = request.body;
        Book.create({
            title: title,
            numberOfPages: pages
        })
            .then(book => response.json(book))
            .catch(err => response.status(400).json(err))
    }
}



//show all 
module.exports.getAll= (request, response) => {
    Book.find({})
        .then(getAll => {
            console.log(getAll); 
            response.json(getAll);
        })
        .catch(err => {
            console.log('ERROR IN Get all', err);
            response.status(400).json({  err });
        });
}

//show one
module.exports.getOne = (request, response) => {
    Book.findOne({_id: request.params.id})
        .then((findOne) => {response.json(findOne)})
        .catch((err) => {console.log('ERROR IN find one ', err);
        response.status(400).json({  err });
    });
}


//update
module.exports.updateOne = (request, response) => {
    Book.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
    //whats inside then is what showing up in postman the Book
        .then(( editOne) => {
        response.json(editOne);
        })
        .catch((err) => {
        console.log('ERROR IN update ', err);
        response.status(400).json({  err });
    });
}

// //delete
module.exports.deleteOne = (request, response) => {
    Book.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err) => {
            response.status(400).json(err)
        });
}