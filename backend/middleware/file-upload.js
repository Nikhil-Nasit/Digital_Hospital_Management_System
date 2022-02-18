const multer = require('multer');
const { v1 : uuidv1 } = require('uuid');
const MIME_TYPE_MAP = {
    'application/pdf':'pdf',
};
const fileUpload = multer({
    limits: 500000,
    storage: multer.diskStorage({
        destination: (req,file,cb) =>{
            cb(null,'uploads/pdfs');
        },
        filename: (req,file,cb) => {
            const ext = MIME_TYPE_MAP[file.mimetype];
            // console.log(ext);
            cb(null,uuidv1() + file.originalname);
        }
    }),
    fileFilter: (req,file,cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        let error = isValid ? null : console.log('Invalid mime type');
        cb(error,isValid);
    }
});

module.exports = fileUpload; 