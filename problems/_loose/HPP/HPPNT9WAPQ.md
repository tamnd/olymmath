---
tag: HPPNT9WAPQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2487627
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19892
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2021
    source: hf-ai-mo-aops
    label: 2021 Caucasus Mathematical Olympiad
---
An infinite table whose rows and columns are numbered with positive integers, is given. For a sequence of functions $f_1(x), f_2(x), \ldots $ let us place the number $f_i(j)$ into the cell $(i,j)$ of the table (for all $i, j\in \mathbb{N}$ ).
A sequence $f_1(x), f_2(x), \ldots $ is said to be {\it nice}, if all the numbers in the table are positive integers, and each positive integer appears exactly once. Determine if there exists a nice sequence of functions $f_1(x), f_2(x), \ldots $ , such that each $f_i(x)$ is a polynomial of degree 101 with integer coefficients and its leading coefficient equals to 1.
