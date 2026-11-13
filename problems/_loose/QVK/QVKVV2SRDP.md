---
tag: QVKVV2SRDP
kind: problem
type: answer
answer: '{2022,\frac{2021}{2023},-\frac{1}{2022},-\frac{2023}{2021}}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162967
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $a_{n}$ satisfy the recursive relation $a_{n+1}=\frac{1+a_{n}}{1-a_{n}}$ for all natural numbers $n$. Determine all possible values of the first term $a_{1}$, for which the sequence $a_{n}$ will contain a term $\mathrm{z}$ with the value 2022.
