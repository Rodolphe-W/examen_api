const sequelize = require('../db/dbConnect');
const Blague = require("../models/Blague");

const getRandomBlague = (array) =>{
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const controllerBlague = {
    random: async (req,res) => {
        const data = await Blague.findAll();
        const randomBlague = getRandomBlague(data);
        res.status(200).json({result: randomBlague});
    },

    /* create: async (req,res) => {
        if(!req.body.question || !req.body.answer) {
            return res.status(400).json({error: `One or more param are not found (${(!req.body.question) ? 'question,' : ''} ${(!req.body.answer) ? 'answer' : ''})`})
        }
        const blagueAdd = await Blague.create(
            {
            question: req.body.question,
            answer: req.body.answer
            }
        );
        res.status(201).json({message: "Blague ajoutée", result: blagueAdd});
    }, */

    findAll: async (req,res) => {
        const data = await Blague.findAll();
        res.status(200).json({result: data});
    },

    findById: async (req,res) => {
        const id = req.params.id;
        const data = await Blague.findAll();
        const finderBlagues = data.filter((blague) => blague.id == id);
        
        if(isNaN(id)){
            res.status(405).json({error: "Param is not a number"});
        }
        if(finderBlagues.length == 0){
            res.status(404).json({error: "Joke not found"});
        }
        res.status(200).json({result: finderBlagues[0]});
    }

}

module.exports = controllerBlague;