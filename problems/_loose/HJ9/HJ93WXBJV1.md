---
tag: HJ93WXBJV1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be natural coprime numbers. Consider points on the plane with integer coordinates $(x, y)$ lying in the strip $0 \leq x \leq b-1$. Assign to each such point an integer $N(x, y)=a x+b y$.

a) Prove that for each natural number $c$ there is exactly one point $(x, y)$ ($0 \leq x \leq b-1$) for which $N(x, y)=c$.

b) Sylvester's Theorem. Prove that the largest $c$ for which the equation $a x+b y=c$ has no solutions in non-negative integers is given by

$c=a b-a-b$.
