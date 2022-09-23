import supertest from "supertest";
import  { prismaMock } from "./lib/prisma/client.mock";

import app from './app';

const request = supertest(app);

test("GET /planets", async()=>{
    const planets = [
        {
            "id": 1,
            "name": "Mercury",
            "description": null,
            "diameter": 123,
            "moons": 12,
            "createdAt": "2022-09-22T14:02:37.229Z",
            "updateAt": "2022-09-22T14:03:03.460Z"
        },
        {
            "id": 2,
            "name": "Venus",
            "description": null,
            "diameter": 465,
            "moons": 6,
            "createdAt": "2022-09-22T14:03:55.317Z",
            "updateAt": "2022-09-22T14:03:33.425Z"
        }
    ]
    // @ts-ignore
    prismaMock.planet.findMany.mockResolvedValue(planets);

    const response = await request
        .get("/planets")
        .expect(200)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual(planets)
})

describe("POST /planets", ()=>{

    test("Valid request", async()=>{
        const planet = {
                name: "Mercury",
                diameter: 123,
                moons: 12
            }

        const response = await request
            .post("/planets")
            .send(planet)
            .expect(201)
            .expect("Content-Type", /application\/json/);

        expect(response.body).toEqual(planet)
    });

    test("Invalid request", async()=>{
        const planet = {
                diameter: 123,
                moons: 12
            }

        const response = await request
            .post("/planets")
            .send(planet)
            .expect(422)
            .expect("Content-Type", /application\/json/);

        expect(response.body).toEqual({
            errors: {
                body: expect.any(Array)
            }
        })
    })
});

