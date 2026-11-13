---
tag: Y2H2F8K1TS
kind: problem
type: answer
answer: '|S_{1}-S_{2}-n\cdot\ln2|<\sqrt{n}+1'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_{1}$ and $S_{2}$ denote the sum of the number of odd and even divisors of the numbers $1,2, \ldots, n$, respectively. Prove that

$$
\left|S_{1}-S_{2}-n \cdot \ln 2\right|<\sqrt{n}+1
$$
