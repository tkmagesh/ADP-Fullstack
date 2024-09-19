/* sut */
const collectionsApi = require('./collectionsApi');

describe("Collection API", () => {
    let products;
    beforeEach(() => {
        products = [
          { id: 6, name: "Pen", cost: 50, units: 25, category: "stationary" },
          { id: 9, name: "Ten", cost: 70, units: 70, category: "stationary" },
          { id: 3, name: "Len", cost: 60, units: 60, category: "grocery" },
          { id: 5, name: "Zen", cost: 30, units: 30, category: "grocery" },
          { id: 1, name: "Ken", cost: 20, units: 80, category: "utencil" },
          { id: 7, name: "Mouse", cost: 100, units: 20, category: "electronics",},
        ];
    })
    describe("Sort", () => {
        it("should sort the given collection by id", () => {
            // arrange
            let firstProductId = 1,
                lastProductId = 9;
                
            // act
            collectionsApi.sort(products, "id");

            // assert
            expect(products[0].id).toBe(firstProductId)
            expect(products[products.length-1].id).toBe(lastProductId)
        });
        it("should sort the given collection by cost", () => {
          // arrange
          let firstProductId = 1,
            lastProductId = 7;

          // act
          collectionsApi.sort(products, "cost");

          // assert
          expect(products[0].id).toBe(firstProductId);
          expect(products[products.length - 1].id).toBe(lastProductId);
        });

        it("should sort the given collection by units", () => {
          // arrange
          let firstProductId = 7,
            lastProductId = 1;

          // act
          collectionsApi.sort(products, "units");

          // assert
          expect(products[0].id).toBe(firstProductId);
          expect(products[products.length - 1].id).toBe(lastProductId);
        });

        it.skip("should sort the given collection by product value (cost * units) ", () => {
          // arrange
          let firstProductId = 1,
            lastProductId = 9;

          // act
          collectionsApi.sort(products, /* ? */);

          // assert
          expect(products[0].id).toBe(firstProductId);
          expect(products[products.length - 1].id).toBe(lastProductId);
        });
    });

    describe.skip("Filter", () => {
        it("Should be able to filter stationary products (category == 'stationary')", () => {
            
        })

        it("Should be able to filter costly products (cost > 50)", () => {

        });

        it("Should be able to filter understocked products (units < 50)", () => {

        });
    });

    describe.skip("Max", () => {
        it("Should return the costliest product", () => {

        })
    })

    describe.skip("Min", () => {
      it("Should return the cheapest product", () => {

      });
    });


})