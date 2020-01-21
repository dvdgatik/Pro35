const express = require('express');

const router = express.Router();

const Encuesta = require('../Modelos/encuestas');

router.get('/', async (req, res) => {
	const encuestas = await Encuesta.find();
	console.log(encuestas);
	console.log('Encuestas Recibidas');
	res.json(encuestas);
});




router.get('/:id', async  (req, res) =>{
	const task = await Encuesta.findById(req.params.id);
	res.json(encuestas);
})

module.exports = router;

