const hobbits = require('./hobbits-model');
const db = require('./../data/config')

beforeEach( async () =>{
    // reseeds the db when ever we run the test
    await db.seed.run();
})

describe('Hobbits Models', () => {

    test('should Find by id', async () => {
        const response = await hobbits.findById(1);
        expect(response.name).toBe('sam')
    });

    test('should Insert new Hobbits', async () => {
        await hobbits.insert({ name: "Bilbo" })

        const newHobbit  = await db('hobbits').select();
        expect(newHobbit).toHaveLength(5)
    })
    test('should Return all the users in the db', async () => {
        const allHobbits = await hobbits.list();
        expect(allHobbits.length).toBeGreaterThan(0);
    })
    
    test('should Update a hobbit', async () => {
        const UpdateUpdate = await hobbits.update(1, {name: 'new Same'});
       
        expect(UpdateUpdate).toEqual({id: 1, name: 'new Same'})
    })
})
