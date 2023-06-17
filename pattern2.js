// patttern 1 Code
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    document.write("*");
  }
  document.write("<br />");
}

// Pattern 2 code
document.write("<h3>Pattern 2</h3>");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br />");
}

// pattern 3 code
document.write("<h3>Pattern 3</h3>");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`${i}`);
  }
  document.write("<br />");
}

// PATTERN 4 Code
document.write("<h3>Pattern 4</h3>");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`${j}`);
  }
  document.write("<br />");
}

// Pattern 5 Code
document.write("<h3>Pattern 5</h3>");
let count = 1;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`${count}`);
    count++;
  }
  document.write("<br />");
}

// Pattern 6 Code

document.write("<h3>Pattern 6</h3>");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i + j <= 5) {
      document.write("&nbsp");
    } else {
      document.write("*");
    }
  }
  document.write("<br />");
}

// Pattern 7

document.write("<h3>Pattern 7 PYRAMID</h3>");
let row = 5;
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= row; j++) {
    if (i + j <= row - 1) {
      document.write("&nbsp");
    }
  }
  for (let k = 1; k <= i; k++) {
    document.write("&nbsp1");
  }
  document.write("<br />");
}
