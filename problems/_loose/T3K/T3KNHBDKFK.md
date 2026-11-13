---
tag: T3KNHBDKFK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Grosman Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3152013
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45053
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: il-grossman/2023
    source: hf-ai-mo-aops
    label: 2023 Grosman Mathematical Olympiad
---
Consider the sequence of natural numbers $a_n$ defined as $a_0=4$ and $a_{n+1}=\frac{a_n(a_n-1)}{2}$ for each $n\geq 0$ .
Define a new sequence $b_n$ as follows: $b_n=0$ if $a_n$ is even, and $b_n=1$ if $a_n$ is odd. Prove that for each natural $m$ , the sequence
$$b_m, b_{m+1}, b_{m+2},b_{m+3}, \dots$$
is not periodic.
