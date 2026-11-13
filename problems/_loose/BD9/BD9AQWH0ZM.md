---
tag: BD9AQWH0ZM
kind: problem
type: answer
answer: 2^{2n}-(n+1)2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the set $A=\{1,2, \cdots, n\}, X, Y$ be non-empty subsets of $A$ (allowing $X=Y$), the maximum element of $X$ and the minimum element of $Y$ are denoted as $\max X, \min Y$, respectively. Find the number of ordered pairs of sets $(X, Y)$ that satisfy $\max X>\min Y$.
