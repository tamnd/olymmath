---
tag: F30H3CM3XN
kind: problem
type: answer
answer: k\in{-4,-3,-2,0,2,3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185997
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integers $k$ for which the equation

$$
\frac{x}{k-4}+\frac{k}{2(k-4)}+\frac{k+4}{x}=0
$$

is solvable (i.e., has at least one solution $x$), where all solutions $x$ are integers.
