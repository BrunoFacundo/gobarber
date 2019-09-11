import fs from 'fs';
import { resolve } from 'path';
import File from '../models/File';
import User from '../models/User';

class FileController {
    async store(req, res) {
        const { originalname: name, filename: path } = req.file;

        const user = await User.findByPk(req.userId, {
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['id', 'path']
                }
            ]
        });
        if (!user) {
            return res.status(400).json({ error: 'User not found.' });
        }

        // Add new avatar
        const file = await File.create({
            name,
            path
        });
        user.setAvatar(file);
        await user.update();

        // Delete old avatar
        if (user.avatar) {
            await File.destroy({
                where: {
                    id: user.avatar.id
                }
            });
            fs.unlinkSync(resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', user.avatar.path));
        }

        return res.json(file);
    }
}

export default new FileController();
