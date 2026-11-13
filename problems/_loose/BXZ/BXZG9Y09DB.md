---
tag: BXZG9Y09DB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220677
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n \ge 3$ we denote by $M(n)$ the minimum number of unit squares that must be coloured in a $6 \times n$ rectangle so that any possible $2 \times 3$ rectangle (it can be rotated, but it must be contained inside and cannot be cut) contains at least one coloured unit square. Is it true that for every natural $n \ge 3$ the number $M(n)$ can be expressed as $M(n)=p_n+k_n^3$, where $p_n$ is a prime and $k_n$ is a natural number?
