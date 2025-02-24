import File from "../models/File"
class FilesController {
    async create(req, res){
        const { originalname: name, filename: path} = req.file;

    
        const file = await File.create({
            name, 
            path
        });

        return  res.status(200).json(file)
    }


}

export default new FilesController();