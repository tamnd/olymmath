---
tag: G09ARDEYEF
kind: problem
type: answer
answer: \frac{(n+1)^2n}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138907
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{i} \in R^{+} \cup\{0\} . i=1,2, \cdots, n, x_{1}^{2}+x_{2}^{2}+\cdots+x_{n}^{2}=1$
Find the maximum and minimum values of $\left[n x_{1}+(n-1) x_{2}+\cdots+x_{n}\right]\left[x_{1}+2 x_{2}+\cdots+n x_{n}\right]$.
