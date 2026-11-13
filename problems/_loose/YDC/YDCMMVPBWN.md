---
tag: YDCMMVPBWN
kind: problem
type: answer
answer: T < 2n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $2n$ numbers in a row, Bob could perform the following operation:
$$S_i=(a_1,a_2,\ldots,a_{2n})\mapsto S_{i+1}=(a_1,a_3,\ldots,a_{2n-1},a_2,a_4,\ldots,a_{2n}).$$
Let $T$ be the order of this operation. In other words, $T$ is the smallest positive integer such that $S_i=S_{i+T}$. Prove that $T<2n$.
