let { people } = require('../../data/exampleData');

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPeople = (req, res) => {
    console.log('Daneeee', req.body);
    const { name } = req.body;

    if (name) {
        const newPeople = [...people, {
            id: 6,
            name
        }]
        return res.status(200).json({
            status: "success",
            newPeople
        });
    } else {
        res.status(404).send('Please provide credentials')
    }
}

const updatePeople =  (req, res) => {
    const {id} = req.params;
    const { name } = req.body;
    
    console.log('id', id);
    console.log('name', name);
    if (!name) {
        res
            .status(404)
            .json({
                status: 'error',
                message: "Wprowadź prawidłowe imie"
            })
    } else {
        const person = people.find((p) => {
            if (p.id === Number(id)) {
                return {...p, name}
            }
        })
    
        if (!person) {
            res.status(404).send(`Nie ma urzytkownika o ID: ${id}`)
        } else {
            const newPeople = people.map(p => {
                if (p.id === Number(id)) {
                    return {...p, name}
                } else {
                    return p;
                }
            })
            
            res.status(200).json(newPeople);  
        }
    }
}

const deletePeople = (req, res) => {
    const { id } = req.params;
    // const { name } = req.body;
    const person = people.find((p) => p.id === Number(id))

    if (!person) {
        res.status(404).send(`Nie ma urzytkownika o ID: ${id}`)
    } else {
        const newPeople = people.filter(p => {
            if (p.id !== Number(id)) {
                return p
            }
        })

        res.status(200).json(newPeople);  
    }
    
}

module.exports = {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
}