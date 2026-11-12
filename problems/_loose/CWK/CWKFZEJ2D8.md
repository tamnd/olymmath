---
tag: CWKFZEJ2D8
kind: problem
type: answer
answer: \frac{k(+n+1)}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41777
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
May Beetles. In a box sit May beetles. Among them, there are $n$ males and $m$ females. Mr. Entomologist takes beetles out of the box in random order, one by one, without replacement, until he has $k$ males, $1 \leqslant k \leqslant n$. Let $x_{k}$ be the total number of beetles he has taken out of the box. Find the probability that $x_{k}=x$, where $x=k, k+1, \ldots, k+m$, and determine the expected value of $x_{k}$.
