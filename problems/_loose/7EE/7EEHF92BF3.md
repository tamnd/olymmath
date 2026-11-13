---
tag: 7EEHF92BF3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116345
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $a_{1}, a_{2}, a_{3}$. For $n \geqslant 3$, we have: $a_{n+1}=\left[a_{n}, a_{n-1}\right]-\left[a_{n-1}, a_{n-2}\right]$. Prove that there exists a positive integer $k \leqslant a_{3}+4$, such that $a_{k} \leqslant 0$.
