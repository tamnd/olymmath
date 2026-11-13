---
tag: 4DGR5WVR9B
kind: problem
type: answer
answer: \left\lfloor \frac{n(n+1)}{6} \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$. A triangular array $(a_{i,j})$ of zeros and ones, where $i$ and $j$ run through the positive integers such that $i+j\leqslant n+1$ is called a *binary anti-Pascal $n$-triangle* if $a_{i,j}+a_{i,j+1}+a_{i+1,j}\equiv 1\pmod{2}$ for all possible values $i$ and $j$ may take on. Determine the minimum number of ones a binary anti-Pascal $n$-triangle may contain.
