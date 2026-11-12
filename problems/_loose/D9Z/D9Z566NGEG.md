---
tag: D9Z566NGEG
kind: problem
type: answer
answer: x_{1}=\frac{(n-2)}{(n-1)^{2}},x_{2}=\frac{(n^{2}-2n+2)}{(n-1)^{2}},x_{3}=\ldots=x_{n}=
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ measuring cylinders with liquid. From the first cylinder, $1 / n$ of the liquid in it was poured into the second cylinder, then $1 / n$ of the liquid that ended up in the second cylinder after the transfer from the first cylinder was poured into the third cylinder, and so on. Finally, $1 / n$ of the liquid that ended up in the $n$-th cylinder after the transfer from the previous cylinder was poured back into the first cylinder. After this, each cylinder contained $a$ cm $^{3}$ of liquid. How much liquid was originally in each cylinder?
