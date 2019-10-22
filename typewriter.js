const sentence = "hello there from lighthouse labs";
let timer = 0;

for(const letter of sentence) {
  setTimeout(() => process.stdout.write(letter), timer) 
  timer += 50;
}
setTimeout(() => process.stdout.write('\n'), timer)



