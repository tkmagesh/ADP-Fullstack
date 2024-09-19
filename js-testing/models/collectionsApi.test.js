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
          { id: 7, name: "Mouse", cost: 100, units: 20, category: "electronics"},
        ];
    })
    describe("Sort", () => {
        it("should sort the given collection by id", () => {
            // arrange
            let firstProduct = {
                id: 1,
                name: "Ken",
                cost: 20,
                units: 80,
                category: "utencil",
              },
              lastProduct = {
                id: 9,
                name: "Ten",
                cost: 70,
                units: 70,
                category: "stationary",
              };
                
            // act
            collectionsApi.sort(products, "id");

            // assert
            expect(products[0]).toStrictEqual(firstProduct)
            expect(products[products.length-1]).toStrictEqual(lastProduct)
        });
        it("should sort the given collection by cost", () => {
          // arrange
          let firstProduct = {
              id: 1,
              name: "Ken",
              cost: 20,
              units: 80,
              category: "utencil",
            },
            lastProduct = {
              id: 7,
              name: "Mouse",
              cost: 100,
              units: 20,
              category: "electronics",
            };

          // act
          collectionsApi.sort(products, "cost");

          // assert
          expect(products[0]).toStrictEqual(firstProduct);
          expect(products[products.length - 1]).toStrictEqual(lastProduct);
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

        it("should sort the given collection by product value (cost * units) ", () => {
          // arrange
          let firstProduct = {
              id: 5,
              name: "Zen",
              cost: 30,
              units: 30,
              category: "grocery",
            },
            lastProduct = {
              id: 9,
              name: "Ten",
              cost: 70,
              units: 70,
              category: "stationary",
            };
          const productsComparerByValue = (p1, p2) => {
            const p1Value = p1.cost * p1.units,
                p2Value = p2.cost * p2.units;
            if (p1Value > p2Value) return 1;
            if (p1Value < p2Value) return -1;
            return 0
          }
          // act
          
          collectionsApi.sort(products, productsComparerByValue);

          // assert
          expect(products[0]).toStrictEqual(firstProduct); // for deep comparison
          expect(products[products.length - 1]).toStrictEqual(lastProduct);
        });

        it("should throw error for invalid argument", () => {
            expect(() => {
                collectionsApi.sort(products)
            }).toThrow()
        })
    });

    describe("Filter", () => {
        it("Should be able to filter stationary products (category == 'stationary')", () => {
            // act
            const isStationaryProduct = (product) => product.category === 'stationary';
            const stationaryProducts = collectionsApi.filter(
              products,
              isStationaryProduct
            );
          
            // assert
            expect(stationaryProducts).toHaveLength(2)
            expect(stationaryProducts[0].category).toBe('stationary')
        })

        it("Should be able to filter costly products (cost > 50)", () => {
          // act
          const isCostlyProduct = product => product.cost > 50;
          const costlyProducts = collectionsApi.filter(
            products,
            isCostlyProduct
          );

          // assert
          expect(costlyProducts).toHaveLength(3);
          expect(costlyProducts[0].cost).toBeGreaterThan(50);
        });

        it("Should be able to filter understocked products (units < 50)", () => {
          // act
          const isUnderstockedProduct = (product) => product.units < 50;
          const understockedProducts = collectionsApi.filter(
            products,
            isUnderstockedProduct
          );

          // assert
          expect(understockedProducts).toHaveLength(3);
          expect(understockedProducts[0].units).toBeLessThan(50);
        });
    });

    describe("Max", () => {
        it("Should return the costliest product", () => {

            const expected = {
              id: 7,
              name: "Mouse",
              cost: 100,
              units: 20,
              category: "electronics",
            };

            const isGreaterByCost = (p1, p2) => p1.cost > p2.cost;
            const costliest = collectionsApi.max(products, isGreaterByCost)

            expect(costliest).toStrictEqual(expected)


        })
    })

    describe("Min", () => {
      it("Should return the cheapest product", () => {
            const expected = { id: 1, name: "Ken", cost: 20, units: 80, category: "utencil" };

            const isCheaperByCost = (p1, p2) => p1.cost < p2.cost;
            const cheapest = collectionsApi.min(products, isCheaperByCost);

            expect(cheapest).toStrictEqual(expected);
      });
    });


})