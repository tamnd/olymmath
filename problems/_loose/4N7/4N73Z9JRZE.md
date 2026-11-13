---
tag: 4N73Z9JRZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231689
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $(L_n)$ is given by $L_0=2$, $L_1=1$, and $L_{n+1}=L_n+L_{n-1}$ for $n\ge1$. Prove that if a prime number $p$ divides $L_{2k}-2$ for $k\in\mathbb N$, then $p$ also divides $L_{2k+1}-1$.
