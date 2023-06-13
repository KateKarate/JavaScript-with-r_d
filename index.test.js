describe("Lesson 23", () => {
    const desc = "<p>Test for code from lesson 23</p>";
    const arr = [
        'three',
        10,
        34,
        6,
        67,
        1,
        78,
        892,
        9,
        56,
        11
    ];

    describe(desc, () => {
        it("Should return an array of only numbers", () => {
            let numbers = [];
            arr.forEach(element => {
                if (typeof (element) == "number") {
                    numbers.push(element);
                }
            })
            expect(numbers).toEqual([10, 34, 6, 67, 1, 78, 892, 9, 56, 11]);
        });

        it("Should return the sum of all numbers in the array", () => {
            let numbers = [10, 34, 6, 67, 1, 78, 892, 9, 56, 11];
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum = sum + numbers[i];
            }
            expect(sum).toEqual(1164);
        });

        it("Should return the max number in the array", () => {
            let maxNumber = findMaxNumber(arr);
            expect(maxNumber).toEqual(892);
        });

        it("Should return the min number in the array", () => {
            let minNumber = findMinNumber(arr);
            expect(minNumber).toEqual(1);
        });

        it("Should print a half of a Christmas tree", () => {
            let hashtag = "";
            for (let i = 1; i < 6; i++) {
                hashtag += "#";
            }
            expect(hashtag).toEqual("#####");
        });
    });
});


// ---------------------------------------------------- //


describe("Lesson 24", () => {
    const desc = "<p>Test for Cancelable Accumulator</p>";
    describe(desc, () => {
        let myCancelableAccumulator;

        beforeEach(() => {
            myCancelableAccumulator = new CancelableAccumulator(99);
        });

        it("should start with the provided starting value", () => {
            expect(myCancelableAccumulator.value).toEqual(99);
        });

        it("should increment the value by one", () => {
            myCancelableAccumulator.increment();
            expect(myCancelableAccumulator.value).toEqual(100);
        });

        it("should decrement the value by one", () => {
            myCancelableAccumulator.decrement();
            expect(myCancelableAccumulator.value).toEqual(98);
        });

        it("should clear return to the starting value", () => {
            myCancelableAccumulator.decrement();
            myCancelableAccumulator.clear();
            expect(myCancelableAccumulator.value).toEqual(99);
        });
    });
});


// ---------------------------------------------------- //


describe("Lesson 28", () => {
    const desc = "<p>Test for the code from lesson 28</p>";
    describe(desc, () => {
        it("Should toggle class 'inlarge' on clicking the profile picture", () => {
            const makeLarge = document.querySelector(".profile-picture");
            makeLarge.click();
            expect(makeLarge.classList.contains("inlarge")).toBe(true);
            makeLarge.click();
            expect(makeLarge.classList.contains("inlarge")).toBe(false);
        });

        it("Should call scrollIntoView method on keydown event", () => {
            const navA = document.createElement("div");
            const navB = document.createElement("div");
            const navC = document.createElement("div");
            const navD = document.createElement("div");

            spyOn(navA, "scrollIntoView");
            spyOn(navB, "scrollIntoView");
            spyOn(navC, "scrollIntoView");
            spyOn(navD, "scrollIntoView");

            document.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
            expect(navA.scrollIntoView).toHaveBeenCalled();

            document.dispatchEvent(new KeyboardEvent("keydown", { key: "b" }));
            expect(navB.scrollIntoView).toHaveBeenCalled();

            document.dispatchEvent(new KeyboardEvent("keydown", { key: "c" }));
            expect(navC.scrollIntoView).toHaveBeenCalled();

            document.dispatchEvent(new KeyboardEvent("keydown", { key: "d" }));
            expect(navD.scrollIntoView).toHaveBeenCalled();
        });
    });
});

