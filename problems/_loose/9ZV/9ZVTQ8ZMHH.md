---
tag: 9ZVTQ8ZMHH
kind: problem
type: answer
answer: \frac{n\mathrm{C}_{2n}^{n}}{2^{2n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a straight road, there are $2 n+1$ trees $T_{1}, T_{2}, \cdots, T_{2 n+1}$ (where $n$ is a given positive integer). A drunk man starts from the middle tree $T_{n+1}$ and randomly walks among these trees for $n$ minutes according to the following rules: When he is at tree $T_{i}(2 \leqslant i \leqslant 2 n)$ at the end of a minute, he has a $\frac{1}{4}, \frac{1}{2}, \frac{1}{4}$ probability of being at $T_{i-1}, T_{i}$, $T_{i+1}$ at the end of the next minute.
(1) Find the probability that the drunk man is at each tree $T_{i}(1 \leqslant i \leqslant 2 n+1)$ at the end of the $n$-th minute;
(2) Suppose the distance between adjacent trees is 1. Find the expected distance between the drunk man and his starting position (i.e., tree $T_{n+1}$) at the end of the $n$-th minute (express your answer in the simplest form involving $n$).
