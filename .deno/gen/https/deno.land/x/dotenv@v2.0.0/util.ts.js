// deno-lint-ignore no-explicit-any
export function removeEmptyValues(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, value]) => {
        if (value === null)
            return false;
        if (value === undefined)
            return false;
        if (value === "")
            return false;
        return true;
    }));
}
export function difference(arrA, arrB) {
    return arrA.filter((a) => arrB.indexOf(a) < 0);
}
//# sourceMappingURL=file:///home/runner/reprodbsample/.deno/gen/https/deno.land/x/dotenv@v2.0.0/util.ts.js.map