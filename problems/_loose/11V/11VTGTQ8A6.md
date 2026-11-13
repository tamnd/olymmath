---
tag: 11VTGTQ8A6
kind: problem
type: answer
answer: 2(p^2-p)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given prime number $p$, determine the number of (all) ordered triples $(a, b, c)$ of numbers $z$ from the set $\left\{1,2,3, \ldots, 2 p^{2}\right\}$, which satisfy the relation

$$
\frac{[a, c]+[b, c]}{a+b}=\frac{p^{2}+1}{p^{2}+2} \cdot c
$$

where $[x, y]$ denotes the least common multiple of numbers $x$ and $y$.
