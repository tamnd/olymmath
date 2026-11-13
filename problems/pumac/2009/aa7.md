---
tag: FQ1NGZSNM3
kind: problem
appearances:
  - at: pumac/2009/aa7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2009 official paper
    url: https://pumac.princeton.edu/s/PUMaC2009_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h427919
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3971
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1,x_2,\dots,x_n$ be a sequence of integers, such that $-1\leq x_i\leq 2$ , for $i=1,2,\dots,n$ , $x_1+x_2+\dots+x_n = 7$ and $x_1^8+x_2^8+\dots x_n^8 =2009$ . Let $m$ and $M$ be the minimal and maximal possible value of $x_1^9+x_2^9+\dots x_n^9$ , respectively. Find the $\frac{M}{m}$ . Round your answer to nearest integer, if necessary.
