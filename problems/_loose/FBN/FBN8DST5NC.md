---
tag: FBN8DST5NC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Z \subset \mathbb{C}$ be a set of $n$ complex numbers, $n \geq 2$. Show that for any positive integer $m \leq \frac{n}{2}$, there exists a subset $U$ with $m$ elements of the set $Z$ such that

$$
\left|\sum_{z \in U} z\right| \leq\left|\sum_{z \in Z \backslash U} z\right|
$$
