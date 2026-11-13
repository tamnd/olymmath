---
tag: DRFRZWPY2E
kind: problem
type: answer
answer: x_{1,2}=\frac{\\sqrt{^{2}-4}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89025
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Depending on the real parameter $a$, solve the equation

$$
(a-1)\left(1+x+x^{2}\right)^{2}=(a+1)\left(1+x^{2}+x^{4}\right)
$$

in the set of real numbers.
