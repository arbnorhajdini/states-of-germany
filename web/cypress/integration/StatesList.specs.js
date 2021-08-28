/// <reference types="cypress" />

describe('StatesList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/')
  })

  it('displays StatesList by default', () => {
    cy.get('p.text-uppercase').first().should('have.text', 'bundesländer')

    cy.get('a#Baden-Württemberg > p').first().should('have.text', 'Baden-Württemberg')
    cy.get('a#Baden-Württemberg > p').last().should('have.text', '9594 Schulen')

    cy.get('a#Bayern > p').first().should('have.text', 'Bayern')
    cy.get('a#Bayern > p').last().should('have.text', '9020 Schulen')

    cy.get('a#Berlin > p').first().should('have.text', 'Berlin')
    cy.get('a#Berlin > p').last().should('have.text', '4215 Schulen')

    cy.get('a#Brandenburg > p').first().should('have.text', 'Brandenburg')
    cy.get('a#Brandenburg > p').last().should('have.text', '3505 Schulen')

    cy.get('a#Bremen > p').first().should('have.text', 'Bremen')
    cy.get('a#Bremen > p').last().should('have.text', '909 Schulen')

    cy.get('a#Hamburg > p').first().should('have.text', 'Hamburg')
    cy.get('a#Hamburg > p').last().should('have.text', '2333 Schulen')

    cy.get('a#Hessen > p').first().should('have.text', 'Hessen')
    cy.get('a#Hessen > p').last().should('have.text', '4763 Schulen')

    cy.get('a#Mecklenburg-Vorpommern > p').first().should('have.text', 'Mecklenburg-Vorpommern')
    cy.get('a#Mecklenburg-Vorpommern > p').last().should('have.text', '2908 Schulen')

    cy.get('a#Niedersachsen > p').first().should('have.text', 'Niedersachsen')
    cy.get('a#Niedersachsen > p').last().should('have.text', '8687 Schulen')

    cy.get('a#Nordrhein-Westfalen > p').first().should('have.text', 'Nordrhein-Westfalen')
    cy.get('a#Nordrhein-Westfalen > p').last().should('have.text', '17477 Schulen')

    cy.get('a#Rheinland-Pfalz > p').first().should('have.text', 'Rheinland-Pfalz')
    cy.get('a#Rheinland-Pfalz > p').last().should('have.text', '3812 Schulen')

    cy.get('a#Sachsen > p').first().should('have.text', 'Sachsen')
    cy.get('a#Sachsen > p').last().should('have.text', '6189 Schulen')

    cy.get('a#Sachsen-Anhalt > p').first().should('have.text', 'Sachsen-Anhalt')
    cy.get('a#Sachsen-Anhalt > p').last().should('have.text', '3865 Schulen')

    cy.get('a#Schleswig-Holstein > p').first().should('have.text', 'Schleswig-Holstein')
    cy.get('a#Schleswig-Holstein > p').last().should('have.text', '2826 Schulen')

    cy.get('a#Thüringen > p').first().should('have.text', 'Thüringen')
    cy.get('a#Thüringen > p').last().should('have.text', '3095 Schulen')
  })

  it('should displays Baden-Württemberg', () => {
    cy.get('a#Baden-Württemberg').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Baden-Wuerttemberg')
  })

  it('should displays Bayern', () => {
    cy.get('a#Bayern').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Bayern')
  })

  it('should displays Berlin', () => {
    cy.get('a#Berlin').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Berlin')
  })

  it('should displays Brandenburg', () => {
    cy.get('a#Brandenburg').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Brandenburg')
  })

  it('should displays Bremen', () => {
    cy.get('a#Bremen').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Bremen')
  })

  it('should displays Hamburg', () => {
    cy.get('a#Hamburg').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Hamburg')
  })

  it('should displays Hessen', () => {
    cy.get('a#Hessen').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Hessen')
  })

  it('should displays Mecklenburg-Vorpommern', () => {
    cy.get('a#Mecklenburg-Vorpommern').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Mecklenburg-Vorpommern')
  })

  it('should displays Niedersachsen', () => {
    cy.get('a#Niedersachsen').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Niedersachsen')
  })

  it('should displays Nordrhein-Westfalen', () => {
    cy.get('a#Nordrhein-Westfalen').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Nordrhein-Westfalen')
  })

  it('should displays Rheinland-Pfalz', () => {
    cy.get('a#Rheinland-Pfalz').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Rheinland-Pfalz')
  })

  it('should displays Sachsen', () => {
    cy.get('a#Sachsen').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Sachsen')
  })

  it('should displays Sachsen-Anhalt', () => {
    cy.get('a#Sachsen-Anhalt').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Sachsen-Anhalt')
  })

  it('should displays Schleswig-Holstein', () => {
    cy.get('a#Schleswig-Holstein').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Schleswig-Holstein')
  })

  it('should displays Thüringen', () => {
    cy.get('a#Thüringen').click()
    cy.url().should('include', 'http://localhost:8000/Bundesland/Thueringen')
  })

  it('should handle letter button clicks', () => {
    cy.get('button').eq(0).should('have.text', 'a ')
    cy.get('button').eq(0).click()
    cy.get('button').eq(0).should('have.text', 'a  : 1')
    cy.get('button').eq(0).click()
    cy.get('button').eq(0).should('have.text', 'a ')

    cy.get('button').eq(1).should('have.text', 'b ')
    cy.get('button').eq(1).click()
    cy.get('button').eq(1).should('have.text', 'b  : 2')
    cy.get('button').eq(1).click()
    cy.get('button').eq(1).should('have.text', 'b ')

    cy.get('button').eq(2).should('have.text', 'd ')
    cy.get('button').eq(2).click()
    cy.get('button').eq(2).should('have.text', 'd  : 2')
    cy.get('button').eq(2).click()
    cy.get('button').eq(2).should('have.text', 'd ')

    cy.get('button').eq(3).should('have.text', 'e ')
    cy.get('button').eq(3).click()
    cy.get('button').eq(3).should('have.text', 'e  : 1')
    cy.get('button').eq(3).click()
    cy.get('button').eq(3).should('have.text', 'e ')

    cy.get('button').eq(4).should('have.text', 'g ')
    cy.get('button').eq(4).click()
    cy.get('button').eq(4).should('have.text', 'g  : 1')
    cy.get('button').eq(4).click()
    cy.get('button').eq(4).should('have.text', 'g ')

    cy.get('button').eq(5).should('have.text', 'l ')
    cy.get('button').eq(5).click()
    cy.get('button').eq(5).should('have.text', 'l  : 9')
    cy.get('button').eq(5).click()
    cy.get('button').eq(5).should('have.text', 'l ')

    cy.get('button').eq(6).should('have.text', 'm ')
    cy.get('button').eq(6).click()
    cy.get('button').eq(6).should('have.text', 'm  : 18')
    cy.get('button').eq(6).click()
    cy.get('button').eq(6).should('have.text', 'm ')


    cy.get('button').eq(7).should('have.text', 'n ')
    cy.get('button').eq(7).click()
    cy.get('button').eq(7).should('have.text', 'n  : 2')
    cy.get('button').eq(7).click()
    cy.get('button').eq(7).should('have.text', 'n ')


    cy.get('button').eq(8).should('have.text', 'r ')
    cy.get('button').eq(8).click()
    cy.get('button').eq(8).should('have.text', 'r  : 1')
    cy.get('button').eq(8).click()
    cy.get('button').eq(8).should('have.text', 'r ')

    cy.get('button').eq(9).should('have.text', 's ')
    cy.get('button').eq(9).click()
    cy.get('button').eq(9).should('have.text', 's  : 4')
    cy.get('button').eq(9).click()
    cy.get('button').eq(9).should('have.text', 's ')

    cy.get('button').eq(10).should('have.text', 't ')
    cy.get('button').eq(10).click()
    cy.get('button').eq(10).should('have.text', 't  : 2')
    cy.get('button').eq(10).click()
    cy.get('button').eq(10).should('have.text', 't ')

    cy.get('button').eq(11).should('have.text', 'v ')
    cy.get('button').eq(11).click()
    cy.get('button').eq(11).should('have.text', 'v  : 1')
    cy.get('button').eq(11).click()
    cy.get('button').eq(11).should('have.text', 'v ')

    cy.get('button').eq(12).should('have.text', 'w ')
    cy.get('button').eq(12).click()
    cy.get('button').eq(12).should('have.text', 'w  : 2')
    cy.get('button').eq(12).click()
    cy.get('button').eq(12).should('have.text', 'w ')
  })
})
