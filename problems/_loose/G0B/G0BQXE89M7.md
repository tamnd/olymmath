---
tag: G0BQXE89M7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Lucas numbers are defined as follows:

$$
L_{0}=2, L_{1}=1, L_{n+2}=L_{n+1}+L_{n} (n=0,1, \ldots)
$$

Show that if $n$ is even, then every prime divisor of $\left(L_{n}-2\right)$ is also a divisor of $\left(L_{n+1}-1\right)$.
