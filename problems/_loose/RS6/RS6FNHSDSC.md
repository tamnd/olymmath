---
tag: RS6FNHSDSC
kind: problem
type: answer
answer: S_{n}=\frac{n(n+1)(n+2)}{3}+\frac{(-1)^{n}-1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's determine the sum of the first $n$ terms of the following sequence:

$$
1+7+11+21+\cdots+\left[n(n+1)+(-1)^{n}\right]
$$
