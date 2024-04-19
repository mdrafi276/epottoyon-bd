export const convertToBengaliNumber = (number) => {
    const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

    const bengaliNumber = number?.toString()?.replace(/\d/g, (digit) => {
        return bengaliDigits[englishDigits?.indexOf(digit)];
    });

    return bengaliNumber;
};
