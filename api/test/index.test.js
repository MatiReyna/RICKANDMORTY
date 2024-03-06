const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades necesarias', async () => {
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('image')
        })
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/4656859').expect(500);
        })
    });

    describe('GET /rickandmorty/login', () => {
        it('La información de login es correcta', async () => {
            const response = await agent.get('/rickandmorty/login?email=matiireyna@hotmail.com&password=hola123');
            expect(response.body.access).toEqual(true)
        })
        it('La información de login es incorrecta', async () => {
            const response = (await agent.get('/rickandmorty/login?email=pepito@hotmail.com&password=hola22')).body;
            expect(response.access).toEqual(false)
        })
    });

    describe('POST /rickandmorty/fav', () => {
        afterEach(async () => {
            await agent.delete('/rickandmorty/fav/1');
            await agent.delete('/rickandmorty/fav/2');
        })
        const characterUno = { id: 1, name: 'nombreUno' }
        const characterDos = { id: 2, name: 'nombreDos' }
        it('Devuelve el elemento enviado por body', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(characterUno)).body;
            expect(response).toContainEqual(characterUno)
        })
        it('Devuelve el previo elemento enviado y el actual', async () => {
            await agent.post('/rickandmorty/fav').send(characterUno)
            const response = (await agent.post('/rickandmorty/fav').send(characterDos)).body;
            expect(response).toContainEqual(characterUno)
            expect(response).toContainEqual(characterDos)
        })
    });

    describe('DELETE /rickandmorty/fav/:id', () => {
        const characterUno = { id: 1, name: 'nombreUno' }
        const characterDos = { id: 2, name: 'nombreDos' }
        it('Devuelve el arreglo correspondiente si no se elimina ningún personaje', async () => {
            const response = (await agent.delete('/rickandmorty/fav/8456')).body;
            expect(response).toContainEqual(characterUno)
            expect(response).toContainEqual(characterDos)
        })
        it('Elimina correctamente al personaje que se especifica por ID', async () => {
            await agent.post('/rickandmorty/fav').send(characterUno)
            const response = (await agent.delete('/rickandmorty/fav/1')).body;
            expect(response).toContainEqual(characterUno)
        })
    });
});