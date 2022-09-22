import { calculateTax } from "../src/index";

describe("Test the calculate taxes", () => {
  it("Should be 0 given less than 2500", () => {
    const salary = 2000;
    const tax = calculateTax(salary);

    expect(tax).toBe(salary * 0);
  });
  it("Should be 7.5% tax given its less than 3200 and more than 2500", () => {
    const salary = 3000;
    const tax = calculateTax(salary);

    expect(tax).toBe(salary * 0.075);
  });
  it("Should be 15% tax given its less than 4250 and more than 3200", () => {
    const salary = 4000;
    const tax = calculateTax(salary);

    expect(tax).toBe(salary * 0.15);
  });
  it("Should be 22.5% tax given its less than 5300 and more than 4250", () => {
    const salary = 5000;
    const tax = calculateTax(salary);

    expect(tax).toBe(salary * 0.225);
  });
  it("should be 27.5% tax given its more than 5300", () => {
    const salary = 6000;
    const tax = calculateTax(salary);

    expect(tax).toBe(salary * 0.275);
  });
});
