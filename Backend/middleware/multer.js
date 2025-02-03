// import multer from 'multer';
// const storage=multer.diskStorage({
//     filename:function(req,file,callback){
//         callback(null,file.originalname)
//     }
// })

// const upload=multer({storage})

// export default upload;

import multer from 'multer';
import path from 'path';

// Configure Storage
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'react2\E-Commerce App\FrontEnd\src\assets\assets'); // Ensure this folder exists
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

// Multer Upload Middleware
const upload = multer({ storage: storage });

export default upload;