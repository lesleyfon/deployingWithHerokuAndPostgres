const superTest = require('supertest');
const db  = require('./data//config')
const server = require('./index');

beforeEach(async ()=>{
    db.seed.run()
})
test('should say welcome or something', async () => {
    let response = await superTest(server).get('/');

    expect(response.status).toBe(200);

    expect(response.type).toBe('application/json');
    
    expect(response.body.message).toBe('Welcome')
})

test('Test endpoint for creating a new hobbit', async () => {
    let response = await superTest(server).post('/hobbits').send({name: 'Gaffer'});
    

    
    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
    expect(response.body).toEqual({ "id": 1, name: 'Gaffer'});

})