---
tag: 4YRBJWY05P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be a finite set of functions $f: \Bbb{R}\to \Bbb{R.}$ It is known that:

- If $f, g\in A$ then $f (g (x)) \in A.$
- For all $f \in A$ there exists $g \in A$ such that $f (f (x) + y) = 2x + g (g (y) - x),$ for all $x, y\in \Bbb{R}.$
Let $i:\Bbb{R}\to \Bbb{R}$ be the identity function, ie, $i (x) = x$ for all $x\in \Bbb{R}.$ Prove that $i \in A.$
