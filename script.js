function indexOfIgnoreCase(s1, s2) {
  // write your code here
	  lower_str = str.lower()
    lower_subStr = subStr.lower()

    // # Use the built-in find method which returns the index of the first occurrence
    index = lower_str.find(lower_subStr)

    // # Return the index (or -1 if not found)
    return index

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
