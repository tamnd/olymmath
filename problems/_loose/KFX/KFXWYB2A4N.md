---
tag: KFXWYB2A4N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a polynomial$$P(x)=x^n+a_{n-1}x^{n-1}+...+a_1x+a_0\in \mathbb{Z}[x]$$
with degree $n\ge 2$ and $a_o\ne 0.$
Prove that if $|a_{n-1}|>1+|a_{n-2}|+...+|a_1|+|a_0|$, then $P(x)$ is irreducible in $\mathbb{Z}[x].$
