---
tag: 30RPAE3STX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78530
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given a $7 \times 7$ checkerboard. Each square has a token on it, and the squares are identified by coordinates $(x, y)$ where $x$ and $y$ vary in $\{-3,-2, \ldots, 3\}$. Two players take turns playing according to the following rules:

- If the first player removes the token at position $(x, y)$, they must also remove the tokens at positions $(y, -x), (-x, -y)$, and $(-y, x)$.
- If the second player removes the token at position $(x, y)$, they must also remove the tokens at positions $(-x, y), (-x, -y)$, and $(x, -y)$.

If one of the two players reaches a situation where only one token remains at position $(0,1)$, then they win. Can one of the two players win?
