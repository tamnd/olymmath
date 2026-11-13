---
tag: F4DMCDV5M6
kind: problem
type: answer
answer: "76"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a non-empty subset of the set $1.2, \cdots, 108$, satisfying:
(i) For any two numbers $a, b$ in $S$ (which can be the same), there exists $c \in S$ such that $(a \cdot c)=(b \cdot c)=1$;
(ii) For any two numbers $a, b$ in $S$ (which can be the same), there exists $c' \in S, c'$ not equal to $f'(a, b)$, such that $(a \cdot c')>1, (b \cdot c')>1$.
Find the maximum possible number of elements in $S$.
