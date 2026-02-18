/// <reference types="Cypress" />
//cypress - spec

describe('My first test suite', function(){
    
    it('My first test case',function(){
       
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        
        // selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        
        // Parent child chaining
        cy.get('.products').as('productLocator') // alias, we can use this alias in place of .products
        cy.get('@productLocator').find('.product').should('have.length',4)       
        cy.get(':nth-child(3) > .product-action > button').click()
        
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')){    
                cy.wrap($el).find('button').click()
            }
        })

        //Cypress is not like jQuery, it does not allow us to work with the text directly, we have to use .then() method to work with the text
        /*  const logo=cy.get('.brand')
            cy.log(logo.text())
        */

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART') // assertion

        //this is to print the logs
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        // const logo=cy.get('.brand') - this will not work because cypress commands are asynchronous, we have to use .then() method to work with the text
        // cy.log(logo.text()) - this will not work because cypress commands are asynchronous, we have to use .then() method to work with the text
        // cy.log(logo.text()) - this will not work because cypress commands are asynchronous, we have to use .then() method to work with the text





        // fixture
    })
})