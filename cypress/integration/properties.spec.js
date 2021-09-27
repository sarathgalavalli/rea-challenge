describe('On Save/Remove The property is displayed in correspondence list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    it("On Add Property is rendered in Saved", () => {
        cy.get('[data-test-id="price-$526,500-Saved"]').click().then(() => {
            cy.get('[data-test-id="Remove"]').click().then(() => {
                cy.get('[data-test-id="price-$526,500-Result"]').should('exist')
                cy.get('[data-test-id="price-$526,500-Saved"]').should('not.exist')
            })
        })
    })

    it("On remove The property is rendered in Results", () => {
        cy.get('[data-test-id="price-$726,500-Result"]').click().then(() => {
            cy.get('[data-test-id="Add"]').click().then(() => {
                cy.get('[data-test-id="price-$726,500-Saved"]').should('exist')
                cy.get('[data-test-id="price-$726,500-Result"]').should('not.exist')
            })
        })
    })
})