function indexOfIgnoreCase(str, subStr) {
    // Handle edge case: if subStr is an empty string, return 0 (standard behavior)
    if (subStr === "") {
        return 0;
    }

    // Convert both the input string and substring to lowercase to ignore case
    let lowerStr = str.toLowerCase();
    let lowerSubStr = subStr.toLowerCase();

    // Use the indexOf method to find the first occurrence of the substring
    let index = lowerStr.indexOf(lowerSubStr);

    // Return the index (or -1 if not found)
    return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
