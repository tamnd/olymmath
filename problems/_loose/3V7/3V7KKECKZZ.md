---
tag: 3V7KKECKZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Branko writes down a sequence of quadratic polynomials with real coefficients. In each step, after the previously written polynomial $a x^{2}+b x+c$, he writes down the polynomial $c x^{2}+b x+a$ or the polynomial $a(x+d)^{2}+b(x+d)+c$ for some real number $d$.

If he starts with the polynomial $x^{2}-2 x-1$, can Branko obtain the polynomial:
a) $2 x^{2}-1$ ?
b) $2 x^{2}-x-1$ ?

using the described procedure after a certain number of steps?
