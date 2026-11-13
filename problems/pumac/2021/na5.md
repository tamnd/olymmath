---
tag: TAD19Q6ZN7
kind: problem
appearances:
  - at: pumac/2021/na5
    primary: true
  - at: pumac/2021/nb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2021-1.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834929
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73323
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $f : Z\times Z \to R$ , satisfies the equation $f(x, y) = f(3x+y, 2x+ 2y)$ for all $x, y \in Z$ . Determine the maximal number of distinct values of $f(x, y)$ for $1 \le x, y \le 100$ .
