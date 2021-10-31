
const {src,dest} = require('gulp')


const static = function(){
    return  src('src/data/*.*').pipe(dest('dist/data'))
}


exports.default = static
 