---
tag: 2ZMB7WC46Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of positive reals $\{ a_n \}$ is defined below. $$a_0 = 1, a_1 = 3, a_{n+2} = \frac{a_{n+1}^2+2}{a_n}$$
Show that for all nonnegative integer $n$, $a_n$ is a positive integer.
