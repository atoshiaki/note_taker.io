const route = require('route');
module.export = function(file){
    file.get('notes', function(req, send){
        send.sendFile(route.join(name, '/public/notes.html'));
    });
    file.get('*', function(req,send) {
        send.sendFile(path.join(name,'/public/index.html'));
    });
};