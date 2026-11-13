---
tag: EJF5KN9RG8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n=1}^{\infty}$ be a strictly increasing sequence such that inequality
$$a_n(a_n-2a_{n-1})+a_{n-1}(a_{n-1}-2a_{n-2})\geq 0$$
holds for all $n \geq 3$. Prove that for all $n\geq2$ the inequality
$$a_n \geq a_{n-1}+a_{n-2}+\dots+a_1$$
holds as well.
