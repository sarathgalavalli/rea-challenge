describe('dashboard is rendered', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })


    it('displays the project name', () => {
        cy.get('.ProjectHeading').contains('Project.')
    })

    it('displays the Avatar Text', () => {
        cy.get('.avatarText').contains('Anonymous')
    })

    it('displays Results', () => {
        cy.contains('Results')
    })

    it('displays Saved', () => {
        cy.contains('Saved')
    })
})

