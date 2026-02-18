/// <reference types="Cypress" />
//cypress - spec

describe('My Second test suite', function(){
    
    it('My Second test case',function(){
       
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
              
        // Parent child chaining
        cy.get('.products').as('productLocator') // alias, we can use this alias in place of .products
        
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')){    
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

        
    })
})