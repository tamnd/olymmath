---
tag: AMRMR0SXGH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $C$, a sequence of positive real numbers $\left\{a_{n}\right\}(n \geqslant 1)$ satisfies $a_{n+1}=\frac{n}{a_{n}}+C$. Prove: There exists a positive integer $k$, such that for any positive integer $n \geqslant k$, we have
$$
a_{n+2}>a_{n} \text {. }
$$
