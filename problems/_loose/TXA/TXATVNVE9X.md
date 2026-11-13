---
tag: TXATVNVE9X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's denote the number of digits of a number $n$ in decimal notation by $\operatorname{brc}(n)$. Does there exist a real constant $c$ such that for every natural number $n$ the following holds:

$$
\operatorname{brc}(1)+\operatorname{brc}(2)+\cdots+\operatorname{brc}(n)<c n ?
$$
