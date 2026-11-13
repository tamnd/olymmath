---
tag: 4SAT5SXE6S
kind: problem
appearances:
  - at: pumac/2007/na5
    primary: true
  - at: pumac/2007/nb10
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2007 official paper
    url: https://pumac.princeton.edu/s/PUMaC2007_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h506076
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73103
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263025
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_n$ be the Fibonacci numbers, defined by $f_0 = 1$ , $f_1 = 1$ , and $f_n = f_{n-1}+f_{n-2}$ . For each $i$ , $1 \le i \le 200$ , we calculate the greatest common divisor $g_i$ of $f_i$ and $f_{2007}$ . What is the sum of the distinct values of $g_i$ ?
