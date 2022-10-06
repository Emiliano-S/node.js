import supertest from "supertest";
import app from './app';

const request = supertest(app);

test("GET /planets", async()=>{
    const response = await request
        .get("/planets")
        .expect(200)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual([
        {name: "Mercury"},
        {name: "Venus"}
    ])
})

test("POST /planets",async () => {
    const response = await request
        .post("/planets")
        .send({
            name: "Mercury",
            diameter: 1234,
            moons: 2
        })
        .expect(201)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual({
        name: "Mercury",
        diameter: 1234,
        moons: 2
    })
    
})