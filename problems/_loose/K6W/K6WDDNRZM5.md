---
tag: K6WDDNRZM5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \ldots$ be a sequence of independent identically distributed random variables taking values $0,1, \ldots, 9$ with probability $1 / 10$. Show that the series

$$
\sum_{n \geqslant 1} \frac{\xi_{n}}{10^{n}}
$$

converges almost surely to a random variable that has a uniform distribution on $[0,1]$.
