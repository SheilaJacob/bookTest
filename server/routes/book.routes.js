const bookController = require('../controllers/book.controller');


module.exports = (app) => {

    //create
    app.post('/api/books', bookController.create);
    //show all
    app.get('/api/books', bookController.getAll);
    //one id
    app.get('/api/book/:id', bookController.getOne);
    //update
    app.put('/api/book/:id', bookController.updateOne);
    //delete one
    app.delete('/api/book/:id', bookController.deleteOne);
};  