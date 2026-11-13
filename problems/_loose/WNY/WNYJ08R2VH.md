---
tag: WNYJ08R2VH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a,b,c,d \in \mathbb R$ such that $ a>c>d>b>1$ and $ ab>cd$.

Prove that $ f : \left[ 0,\infty \right) \to \mathbb R$, defined through
$$ f(x) = a^x+b^x-c^x-d^x, \forall x \geq 0 , $$
is strictly increasing.
