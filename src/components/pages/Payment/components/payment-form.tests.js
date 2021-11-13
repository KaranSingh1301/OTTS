import PaymentForm from "./payment-form";

describe("Testing payment Validations in <PaymentForm>", () => {
  const paymentComponent = new PaymentForm();
  it("should return true for valid name", () => {
    const validName = paymentComponent.validateName("Dhanuka");
    expect(validName).toEqual(true);
  });

  it("should return false for empty name,", () => {
    const validName = paymentComponent.validateName("");
    expect(validName).toEqual(false);
  });

  it("should return false for names start with numbers", () => {
    const validName = paymentComponent.validateName("43Dhauka");
    expect(validName).toEqual(false);
  });

  it("should return false for empty card numbers", () => {
    const validCard = paymentComponent.validateCreditCardNumber("");
    expect(validCard).toEqual(false);
  });

  it("should set the card type to credit-card.svg by default", () => {
    const cardType = paymentComponent.state.cardType;
    expect(cardType).toEqual("credit-card.svg");
  });

  it("should return true for Visa Card no", () => {
    const validCard = paymentComponent.validateCreditCardNumber(
      "4111111111111111"
    );
    expect(validCard).toEqual(true);
  });

  it("should return true for Master Card no", () => {
    const validCard = paymentComponent.validateCreditCardNumber(
      "5500000000000004"
    );
    expect(validCard).toEqual(true);
  });

  it("should return true for American Express Card no", () => {
    const validCard = paymentComponent.validateCreditCardNumber(
      "340000000000009"
    );
    expect(validCard).toEqual(true);
  });

  it("should return true for Discover Card no", () => {
    const validCard = paymentComponent.validateCreditCardNumber(
      "6011000000000004"
    );
    expect(validCard).toEqual(true);
  });
});