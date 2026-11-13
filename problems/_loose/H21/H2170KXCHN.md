---
tag: H2170KXCHN
kind: problem
type: answer
answer: 2^{2019}-2039191
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set of integers $T$ is orensan if there exist integers $a<b<c$ such that $a$ and $c$ belong to $T$ and $b$ does not belong to $T$. Find the number of subsets $T$ of $\{1,2, \ldots, 2019\}$ that are orensan.
