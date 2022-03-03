const multer = require('multer');
const { v1 : uuidv1 } = require('uuid');

// const MIME_TYPE_MAP = {
//     'application/pdf':'pdf',
// };
const upload = multer({
    // limits: { fieldSize: 25 * 1024 * 1024 },
    storage: multer.diskStorage({
        destination: (req,file,cb) =>{
            cb(null,'uploads/pdfs');
        },
        filename: (req,file,cb) => {
            const ext = file.mimetype.split('/')[1];
            console.log(ext);
            cb(null , "document-"+file.originalname);
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

exports.uploadFile = upload.single('file');
