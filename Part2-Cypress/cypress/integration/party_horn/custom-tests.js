describe("Party Horn Tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
  });

  it("First Test", () => {
    expect(true).to.equal(true);
  });

  it("Slider changes when volume input changes", () => {
    cy.get("#volume-number").clear().type("75");
    cy.get("#volume-slider").then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it("Volume changes when slider input changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it("Volume of audio changes when slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.prop("volume", 0.33);
    });
  });

  it("Image and sound sources change when selecting party horn radio button", () => {
    cy.get("#radio-party-horn").check();
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    });
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    });
  });

  it("Volume image changes when increasing volume. Volume: 100", () => {
    cy.get("#volume-number").clear().type("100");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-3.svg"
      );
    });
  });

  it("Volume image changes when increasing volume. Volume: 66", () => {
    cy.get("#volume-number").clear().type("66");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-2.svg"
      );
    });
  });

  it("Volume image changes when increasing volume. Volume: 33", () => {
    cy.get("#volume-number").clear().type("33");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-1.svg"
      );
    });
  });

  it("Volume image changes when increasing volume. Volume: 0", () => {
    cy.get("#volume-number").clear().type("0");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-0.svg"
      );
    });
  });

  it("Honk button disabled when textbox input is empty", () => {
    cy.get("#volume-number").clear().type("{enter}");
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.attr("disabled", "disabled");
    })
  });

  it("Honk button disabled when textbox input is non-number", () => {
    cy.get("#volume-number").clear().type("enter");
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.attr("disabled", "disabled");
    })
  });

  it("Error is thrown when textbox input is outside of given range", () => {
    cy.get("#volume-number").clear().type("110{enter}");
    cy.get("#volume-number").then(($el) => {
      expect($el[0].checkValidity()).to.equal(false);
    })
  });
});
