let c = document.getElementById("cel");
let f = document.getElementById("fh");
c.addEventListener("input", function () {
  let a = parseInt(this.value);
  let b = a + 273;
  f.value = b;
});
f.addEventListener("input", function () {
  let v = parseInt(this.value);
  let i = v - 273.15;
  c.value = i;
});
//
let cell = document.getElementById("celc");
let kel = document.getElementById("kelv");
cell.addEventListener("input", function () {
  let b = parseInt(this.value);
  let c = b + 273.15;
  kel.value = c;
});
kel.addEventListener("input", function () {
  let d = parseInt(this.value);
  let e = d - 26;
  cell.value = e;
});

let cel = document.getElementById("c");
let feh = document.getElementById("f");

cel.addEventListener("input", function () {
  let ce = this.value;
  let fh = ce + 273.15;
  feh.value = fh;
});
feh.addEventListener("input", function () {
  let fa = this.value;
  let ce = ((fa - 32) * 5) / 9;
  cel.value = ce;
});
