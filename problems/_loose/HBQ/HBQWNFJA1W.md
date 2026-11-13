---
tag: HBQWNFJA1W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k, n, p \in \mathbb{N}$. Show that

$$
\sum_{j=n}^{p}\binom{k}{j}=\binom{p+1}{k+1}-\binom{n}{k+1}
$$

(We sum over an "upward diagonal" of Pascal's triangle)
