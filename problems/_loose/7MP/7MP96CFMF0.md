---
tag: 7MP96CFMF0
kind: problem
type: answer
answer: \frac{n^2-1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85331
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an integer. In a row, there are $n$ boxes, and we have $n+1$ identical stones. A distribution is a way to distribute the stones over the boxes, with each stone being in exactly one box. We say that two such distributions are one stone's throw apart if we can obtain one distribution from the other by moving exactly one stone to a different box. The sociability of a distribution $a$ is defined as the number of distributions that are one stone's throw apart from $a$. Determine the average sociability over all possible distributions.

(Two distributions are the same if the $i$-th box in both rows contains the same number of stones, for all $i \in\{1,2, \ldots, n\}$.)
