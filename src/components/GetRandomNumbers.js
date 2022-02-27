// draws 20 random numbers and returns them in a list
export const getRandomNumbers = (amount) => {
    if (amount !== 0) {
        let listOfNumbers = [];

        while (listOfNumbers.length < 20) {
            const no = Math.floor(Math.random() * amount + 1);

            if (!listOfNumbers.includes(no)) {
                listOfNumbers.push(no);
            }
        }
        return listOfNumbers;
    }
}