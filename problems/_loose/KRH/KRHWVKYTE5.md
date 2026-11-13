---
tag: KRHWVKYTE5
kind: problem
type: answer
answer: 3+2\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89249
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=191
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
Let $a$ and $b$ be the lengths of the legs, and $c$ be the length of the hypotenuse of a right triangle.

Prove that

$$
\left(1+\frac{c}{a}\right)\left(1+\frac{c}{b}\right) \geqslant 3+2 \sqrt{2}
$$
