---
tag: ZPGDR2ZR2F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233808
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime. A degree $d$ polynomial $f$ with non-negative integer coefficients less than $p$ is called $p-floppy$ if the coefficients of $f(x)f(-x) - f(x^2)$ are all divisible by $p$ and if exactly $d$ entries in the sequence $(f(0), f(1), f(2), \dots , f(p-1))$ are divisible by $p$. How many non-constant $61$-floppy polynomials are there?
