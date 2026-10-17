
function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Аргументи повинні бути числами!");
    }

    if (denominator === 0) {
        throw new Error("На нуль ділити не можна!");
    }

    return numerator / denominator;
}

try {
    console.log(divide(10, 2));
} catch (error) {
    console.log("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide("десять", 2));
} catch (error) {
    console.log("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}