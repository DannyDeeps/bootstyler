const { src, dest } = require('gulp');

function createTheme(cb) {
    var nameIndex= process.argv.indexOf('--name');
    if (nameIndex > -1)
        var nameOption= process.argv[nameIndex + 1];

    if (!nameOption) {
        console.log('Missing theme name, please pass the --name option, followed by a string.');
        cb();
    }

    src(['node_modules/bootstrap/dist/css/bootstrap.css'])
        .pipe(dest('themes/' + nameOption + '/assets/css'));

    src(['node_modules/bootstrap/dist/js/bootstrap.bundle.js'])
        .pipe(dest('themes/' + nameOption + '/assets/js'));

    cb();
}

exports.createTheme = createTheme;