---
tag: Z43X7CYJQ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $r_{1}, r_{2}, \ldots, r_{n}$ be real numbers. Show that there exists a subset $S$ of $\{1,2, \ldots, n\}$, such that for all $1 \leq i \leq n-2,|S \cap\{i, i+1, i+2\}|$ is equal to 1 or 2, and such that

$$
\left|\sum_{i \in S} r_{i}\right| \geq \frac{1}{6} \sum_{i=1}^{n}\left|r_{i}\right|
$$
