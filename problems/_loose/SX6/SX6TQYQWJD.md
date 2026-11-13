---
tag: SX6TQYQWJD
kind: problem
type: answer
answer: "27"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms
    source: hf-mathnet
    label: Greece 33rd Hellenic Mathematical Olympiad
---
The real numbers $x, y, z$, with $x \neq z$, are mutually different and nonzero and they satisfy the following equations:
$$
(x+y)^2 + (2-xy) = 9, \\
(y+z)^2 - (3+yz) = 4.
$$
Determine the value of the expression
$$
A = \left( \frac{x}{y} + \frac{y^2}{x^2} + \frac{z^3}{x^2y} \right) \left( \frac{y}{z} + \frac{z^2}{y^2} + \frac{x^3}{y^2z} \right) \left( \frac{z}{x} + \frac{x^2}{z^2} + \frac{y^3}{z^2x} \right).
$$
