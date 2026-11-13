---
tag: 8NH4BB2D4T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211835
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A pair of integers is special if it is of the form $(n, n-1)$ or $(n-1, n)$ for some positive integer $n$. Let $n$ and $m$ be positive integers such that pair $(n, m)$ is not special. Show $(n, m)$ can be expressed as a sum of two or more different special pairs if and only if $n$ and $m$ satisfy the inequality $ n+m\geq (n-m)^2 $.
Note: The sum of two pairs is defined as $ (a, b)+(c, d) = (a+c, b+d) $.
