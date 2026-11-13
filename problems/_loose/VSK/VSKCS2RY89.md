---
tag: VSKCS2RY89
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $\left\{a_{n}\right\}$:
(1) $a_{1}=p, a_{2}=q(p, q$ are prime numbers, and $p \neq q)$;
(2) For any $n \in \mathbf{Z}_{+}$, if there exists $m \in$ $\mathbf{Z}_{+}$, such that $a_{n}+a_{n+1}=2^{m}$, then $a_{n+2}=2$, otherwise, $a_{n+2}$ is the smallest odd prime factor of $a_{n}+a_{n+1}$.
Prove: There must exist a positive integer $k$, such that $a_{k}=2$.
