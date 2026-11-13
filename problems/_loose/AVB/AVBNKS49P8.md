---
tag: AVBNKS49P8
kind: problem
type: answer
answer: (x, y) = (q-1, \frac{(q-1)! - (q-1)}{q})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(x,y)$, $x,y\in \mathbb{N}$ for which
$gcd(n(x!-xy-x-y+2)+2,n(x!-xy-x-y+3)+3)>1$
for $\forall$ $n\in \mathbb{N}$.
