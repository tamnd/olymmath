---
tag: PGZDMR4WWS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Philippine MO
    url: https://artofproblemsolving.com/community/c6h3523831
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2827
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo/2025
    source: hf-ai-mo-aops
    label: 2025 Philippine MO
---
Let $d$ be a positive integer. Define the sequence $a_1, a_2, a_3, \dots$ such that $$\begin{cases} a_1 = 1 a_{n+1} = n\left\lfloor\frac{a_n}{n}\right\rfloor + d, n \ge 1.\end{cases}$$ Prove that there exists a positive integer $M$ such that $a_M, a_{M+1}, a_{M+2}, \dots$ is an arithmetic sequence.
