---
tag: 9KTS3M6DW1
kind: problem
type: answer
answer: C_{n,}=\sum_{j=1}^{n}(-1)^{n-j}\binom{n}{j}\binom{2^{j}-1}{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $C_{n, m}$ denote the number of $m$-covers of an $n$-element set $A$. Find the counting formula for $C_{n, n}$.
