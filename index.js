const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.post('/events', async (req, res) => {

    const { type, data } = req.body;

    if (type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        await axios.post('http://localhost:4005/events', {
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        });
    }
    res.send({});
});

app.listen(4003, () => console.log('Server Running on port 4003'));
