---
tag: RVTQC54VBJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g(n)$ be defined as follows: $g(1)=0, g(2)=1, g(n+2)=g(n)+g(n+1) (n \geqslant 1)$, prove that if $n>5$ is a prime number, then $n$ divides $g(n)(g(n)+1)$.
