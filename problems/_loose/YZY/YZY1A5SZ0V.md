---
tag: YZY1A5SZ0V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233783
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_1$ be a square of side length $3$. For $i=2,3,4,\dots$, inscribe a square $S_i$ inside $S_{i-1}$ such that the sides of the inner square form four $30^\circ-60^\circ-90^\circ$ triangles with the outer square. Compute the total sum
$$\sum_{i=1}^\infty\text{area}(S_i).$$
