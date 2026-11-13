---
tag: WMMPGK8ME0
kind: problem
type: answer
answer: "-2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of all natural numbers less than 1000 whose all digits in decimal notation are even. Let $\omega$ be a complex number such that $\omega^{2}+\omega+1=0$.

Calculate the sum $\sum_{k \in S} \omega^{k}$, i.e., the sum of the values $\omega^{k}$ for all $k$ in the set $S$.
