---
tag: B212PGFGZT
kind: problem
type: answer
answer: "256"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{i} \equiv 1(\bmod 3), 1 \leqslant i \leqslant m, b_{i} \equiv 2(\bmod 3), 1 \leqslant i \leqslant n, c_{i} \equiv 0(\bmod 3), 1 \leqslant i \leqslant$ $k$, and $a_{i}, b_{i}, c_{i}$ these $m+n+k$ numbers are all distinct. If $\sum_{i=1}^{m} a_{i}+\sum_{i=1}^{n} b_{i}+\sum_{i=1}^{k} c_{i}=2007$, find the maximum value of $4 m+3 n+5 k$.
