---
tag: 5860MYXEYN
kind: problem
type: answer
answer: 5^{2n-1} + 4 \cdot 5^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Compute, in terms of $n$, the number of sequences $(x_1,\ldots,x_{2n})$ with each $x_i\in\{0,1,2,3,4\}$ such that $x_1^2+\dots+x_{2n}^2$ is divisible by $5$.

*2020 CCA Math Bonanza Individual Round #13*
