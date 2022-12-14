/// <reference types="Cypress"/>

describe('test all the todos using the API', () => {
    let id;
    // spy

    it('should add a todo correctly using the api', () => {
        // comment
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/todos',
            body: {
                name: 'todo1',
                isComplete: false,
            },
        }).then(response => {
            id = response.body.id;
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eql('todo1');
        });
        // 201 Created
        // name
    });

    it('should get a specific todo correctly', () => {
        cy.request('GET', 'http://localhost:8080/todos/' + id).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eql('todo1');
        });
    });

    it('should update the status of a todo correctly', () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:8080/todos/' + id,
            body: {
                name: 'todo1',
                isComplete: true,
            },
        }).then(response => {
            expect(response.body.isComplete).to.eql(true);
        });
    });

    it('should delete a todo', () => {
        cy.request('DELETE', 'http://localhost:8080/todos/' + id).then(response => {
            expect(response.status).to.eq(200);
        });
    });
});
