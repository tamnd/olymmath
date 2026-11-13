---
tag: WWHM2DR834
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ satisfies:
$$
a_{1} \in[0,2], a_{n+1}=a_{n}+\frac{a_{n}^{2}}{n^{3}}\left(n \in \mathbf{Z}_{+}\right) \text {. }
$$

Prove: there exists a positive real number $M$, such that for any positive integer $n$, we have $a_{n}<M$.
