---
tag: T8D8YNZE8J
kind: problem
type: answer
answer: f(n)=[\frac{n+1}{2}]+[\frac{n+1}{3}]-[\frac{n+1}{6}]+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106851
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
20.3.5 ** For an integer $n \geqslant 4$, find the smallest integer $f(n)$, such that for any positive integer $m$, in any $f(n)$-element subset of the set $\{m, m+1, \cdots, m+n-1\}$, there are at least 3 pairwise coprime elements.
