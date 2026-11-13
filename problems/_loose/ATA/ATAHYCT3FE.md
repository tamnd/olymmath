---
tag: ATAHYCT3FE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2524246
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39116
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1996
    source: hf-ai-mo-aops
    label: 1996 French Mathematical Olympiad
---
Let $a$ be an odd natural number and $b$ be a positive integer. We define a sequence of reals $(u_n)$ as follows: $u_0=b$ and, for all $n\in\mathbb N_0$ , $u_{n+1}$ is $\frac{u_n}2$ if $u_n$ is even and $a+u_n$ otherwise.

(a) Prove that one can find an element of $u_n$ smaller than $a$ .
(b) Prove that the sequence is eventually periodic.
