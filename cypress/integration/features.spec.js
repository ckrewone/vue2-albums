describe('Basics feature tests', () => {

  const CARD_LENGTH = 10;

  it('should load valid list', () => {
    cy.visit('/')

    cy.get('.album-card')
      .should('have.length', CARD_LENGTH)
  });

  it('should update first card title', () => {
    const NEW_TITLE = 'Updated title';
    cy.visit('/')

    cy.get('.album-card')
      .find('.bx-edit')
      .first()
      .should('exist')
      .click();

    cy.get('.modal-edit')
      .should('be.visible')
      .find('input')
      .clear()
      .type(NEW_TITLE)

    cy.get('.modal-edit')
      .find('button')
      .contains('Zapisz')
      .should('exist')
      .click()

    cy.get('.album-card')
      .first()
      .find('.title')
      .contains(NEW_TITLE)
      .should('exist')

  })

  it('should like last card from list view', () => {
    cy.visit('/')

    cy.get('.album-card')
      .find('.bxs-heart')
      .should('not.exist')

    cy.get('.album-card')
      .find('.bx-heart')
      .last()
      .click()

    cy.get('.album-card')
      .find('.bxs-heart')
      .should('exist')
      .should('have.length', 1)
  });

  it('should open card details', () => {
    cy.visit('/')
    cy.wait(500)

    cy.get('.album-card')
      .first()
      .find('.title')
      .click()

    cy.get('.album-details-modal')
      .should('exist')
      .find('.photo-card')
      .should('have.length', CARD_LENGTH)
  });

  it('should like first card from album deatails', () => {
    cy.visit('/')
    cy.wait(500)

    cy.get('.album-card')
      .first()
      .find('.title')
      .click()

    cy.get('.album-details-modal')
      .find('.bx-heart')
      .last()
      .click()

    cy.get('.album-details-modal')
      .find('.bxs-heart')
      .should('exist')
      .should('have.length', 1)

    cy.get('.album-details-modal')
      .find('.vs-dialog__close')
      .click()

    cy.wait(500)
    cy.get('.album-card')
      .first()
      .find('.bxs-heart')
      .should('exist')
  });

  it('should test load more button', () => {
    cy.visit('/')
    cy.wait(500)

    cy.get('.more-card')
      .find('.bx-dots-horizontal-rounded')
      .should('exist')
      .click()

    cy.get('.album-card')
      .should('have.length', 2 * CARD_LENGTH)
  });

  it('should add new album', () => {
    const NEW_TITLE = 'New album title';
    cy.visit('/')

    cy.get('.add-card')
      .should('exist')
      .click();

    cy.get('.modal-add')
      .should('be.visible')
      .find('input')
      .type(NEW_TITLE)

    cy.get('.modal-add')
      .find('button')
      .contains('Zapisz')
      .should('exist')
      .click()

    cy.get('.album-card')
      .first()
      .find('.title')
      .contains(NEW_TITLE)
      .should('exist')
  });

  it('should test input validation add input', () => {
    cy.visit('/')

    cy.get('.add-card')
      .should('exist')
      .click();

    cy.get('.modal-add')
      .should('be.visible')
      .find('input')
      .type('Inva1i0 t1t13 -2123132')

    cy.get('.modal-add')
      .find('button')
      .contains('Zapisz')
      .should('exist')
      .click()

    cy.get('.modal-add')
      .should('be.visible')
      .find('.vs-input__message--danger')
      .should('not.be.empty')

    cy.get('.modal-add')
      .should('be.visible')
      .find('input')
      .clear()
      .type('!@#$')

    cy.get('.modal-add')
      .find('button')
      .contains('Zapisz')
      .should('exist')
      .click()

    cy.get('.modal-add')
      .should('be.visible')
      .find('.vs-input__message--danger')
      .should('not.be.empty')

    cy.get('.modal-add')
      .should('be.visible')
      .find('input')
      .clear()
      .type('Valid title')

    cy.get('.modal-add')
      .should('be.visible')
      .find('.vs-input__message--danger')
      .should('have.value', '')
  });

  it('should test input validation edit input', () => {
    cy.visit('/')
    cy.wait(500)

    cy.get('.album-card')
      .find('.bx-edit')
      .first()
      .should('exist')
      .click();

    cy.get('.modal-edit')
      .should('be.visible')
      .find('input')
      .type('Inva1i0 t1t13 -2123132')

    cy.get('.modal-edit')
      .find('button')
      .contains('Zapisz')
      .should('exist')
      .click()

    cy.get('.modal-edit')
      .should('be.visible')
      .find('.vs-input__message--danger')
      .should('not.be.empty')

    cy.get('.modal-edit')
      .should('be.visible')
      .find('input')
      .clear()
      .type('!@#$')

    cy.get('.modal-edit')
      .find('button')
      .contains('Zapisz')
      .should('exist')
      .click()

    cy.get('.modal-edit')
      .should('be.visible')
      .find('.vs-input__message--danger')
      .should('not.be.empty')

    cy.get('.modal-edit')
      .should('be.visible')
      .find('input')
      .clear()
      .type('Valid title')

    cy.get('.modal-edit')
      .should('be.visible')
      .find('.vs-input__message--danger')
      .should('have.value', '')
  });
})