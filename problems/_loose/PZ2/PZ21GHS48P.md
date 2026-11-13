---
tag: PZ21GHS48P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146476
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $a, b$, where $a<b$. The sequence $\left\{F_{n}\right\}$ satisfies: $F_{1}=a, F_{2}=b, F_{n+2}=F_{n+1}+$ $F_{n}\left(n \in \mathbf{N}^{*}\right)$. If there do not exist infinitely many positive integers $k$ such that $1+m F_{k} F_{k+2}$ is a perfect square, then $m$ is said to have property $P$. Prove that there are infinitely many positive integers $m$ that have property $P$.
