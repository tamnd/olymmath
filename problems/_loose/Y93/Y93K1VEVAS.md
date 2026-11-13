---
tag: Y93K1VEVAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $c: Q-\{0\} \to Q-\{0\}$ a function with the following properties (for all $x,y, a, b \in Q-\{0\}$ and $x \ne 1$):
a) $c (x, 1- x) = 1$
b) $c (ab,y) = c (a,y)c(b, y)$
c) $c (y,ab) = c (y, a)c(y,b)$
Show that then $c (a,b) c(b,a) = 1 = c(a,-a)$ also holds.
