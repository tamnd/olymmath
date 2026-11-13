---
tag: T2WVRRQFK7
kind: problem
type: answer
answer: "1006.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211813
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $R$ be the set of points $(x, y)$ such that $x$ and $y$ are positive, $x + y$ is at most 2013, and
$$
\lceil x \rceil \lfloor y \rfloor = \lfloor x \rfloor \lceil y \rceil.
$$
Compute the area of set $R$. Recall that $\lfloor a \rfloor$ is the greatest integer that is less than or equal to $a$, and $\lceil a \rceil$ is the least integer that is greater than or equal to $a$.
