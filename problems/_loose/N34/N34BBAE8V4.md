---
tag: N34BBAE8V4
kind: problem
type: answer
answer: \frac{5^{1994}-1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P(x)=(2+3x)^{1994}$. Calculate the sum of all coefficients of the polynomial $P(x)$ that stand before the odd powers of $x$.

Note. The final results should be given in the shortest form, i.e., sums of a large number of addends should not appear.
