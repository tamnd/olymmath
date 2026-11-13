---
tag: HCP8NRSVZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an arbitrary prime $p>2011$. Prove that there exist positive integers $a, b, c$ not all divisible by $p$ such that for all positive integers $n$ that $p\mid n^4- 2n^2+ 9$, we have $p\mid 24an^2 + 5bn + 2011c$.
