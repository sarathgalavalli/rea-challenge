describe('Hover Button Adds/Removes Property', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    it("remove button property removes property", () => {
        cy.contains('$526,500').click().then(() => {
            cy.get('[data-test-id="Remove"]').click().then(() => {
                cy.contains("No Data")
            })
        })
    })
    it("Add button Saves property", () => {
        cy.get('[data-test-id="price-$726,500"]').click().then(() => {
            cy.get('[data-test-id="Add"]').click()
        })
        cy.get('[data-test-id="price-$560,520"]').click().then(() => {
            cy.get('[data-test-id="Add"]').click()
        })
        cy.get('[data-test-id="price-$826,500"]').click().then(() => {
            cy.get('[data-test-id="Add"]').click().then(() => {
                cy.contains("No Data")
            })
        })
    })
})
