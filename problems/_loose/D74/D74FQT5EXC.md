---
tag: D74FQT5EXC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence defined by $a_1 = 2022$ and $a_{n+1} = a_n + e^{-a_n}$ for $n \geq 1$. Prove that there exists a positive real number $r$ for which the sequence $$\{ra_1\}, \{ra_{10}\}, \{ra_{100}\}, . . . $$converges.

*Note*: $\{x \} = x - \lfloor x \rfloor$ denotes the part of $x$ after the decimal point.

*Proposed by Ethan Tan*
