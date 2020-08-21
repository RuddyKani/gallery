var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<ruddy>:<ruddy123>@clustergallery.37gwb.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<ruddy>:<ruddy123>@clustergallery.37gwb.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<ruddy>:<ruddy123>@clustergallery.37gwb.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
