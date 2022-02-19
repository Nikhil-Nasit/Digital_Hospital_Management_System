const multer = require('multer');

// const MIME_TYPE_MAP = {
//     'application/pdf':'pdf',
// };
const upload = multer({
    // limits: { fieldSize: 25 * 1024 * 1024 },
    storage: multer.diskStorage({
        destination: (req,file,cb) =>{
            cb(null,'public/');
        },
        filename: (req,file,cb) => {
            const ext = file.mimetype.split('/')[1];
            console.log(ext);
            cb(null,file.originalname);
        }
    }),
    fileFilter: (req,file,cb) => {
        if(file.mimetype.startsWith('application')){
            cb(null,true);
        }
        else{
            cb("Only pdf is allowed");
        }
    }
});

// const upload = multer({
//     dest:'public/'
// })

exports.uploadImage = upload.single('file');

exports.upload = (req,res,next) => {

    console.log(req.file.path);
    console.log(req.body.patient);
    res.status(200).json({
        success:'Success',
    });
};