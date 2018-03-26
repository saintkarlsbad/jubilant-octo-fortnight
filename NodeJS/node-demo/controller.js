let people = [
    {
        name: 'Sally Jane',
        age:12,
        id: 1
    },
    {
        name: 'Bobby Brown',
        age:32,
        id: 3
    },
    {
        name: 'Jimmy Neutron',
        age:9,
        id: 5
    },
    {
        name: 'Betty Sue',
        age:56,
        id: 7
    },
    {
        name: 'Ozzie Ricardo',
        age:44,
        id: 9
    },
]

module.exports={
    getPeople: (req,res)=> {
        res.status(200).send(people)
    },
    getPeopleByID:(req, res)=>{
        console.log(req)
        let person = people.filter(e=> {
            return +req.params.id === e.id
        })
        res.status(200).send(person)
    },
    addPerson: (req, res)=> {
        // console.log(req.body)
        people.push(req.body)
    }
}


    