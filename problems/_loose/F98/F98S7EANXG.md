---
tag: F98S7EANXG
kind: problem
type: answer
answer: \lfloor\frac{k}{2}\rfloor!\lceil\frac{k}{2}\rceil!+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each $k \in \mathbf{N}^{*}, k>1$, find the smallest positive integer $m>1$, such that there exists $f(x) \in \mathbf{Z}[x]$, for which $f(x)-1$ has at least one integer root, and $f(x)-m$ has $k$ distinct integer roots.
