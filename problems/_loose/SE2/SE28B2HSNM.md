---
tag: SE28B2HSNM
kind: problem
type: answer
answer: 2\cdot3^{n}-2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. Find the number of sequences $a_{1} a_{2} \ldots a_{2 n}$, where $a_{i}=+1$ or $a_{i}=-1$ for $i=1,2 \ldots, 2 n$, such that

$$
\left|\sum_{i=2 k-1}^{2 l} a_{i}\right| \leq 2
$$

for all $k$ and $l$ for which $1 \leq k \leq l \leq n$.
