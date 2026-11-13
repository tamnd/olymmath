---
tag: BB7NV3TR4D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a WORD game with the following rules. There are finite number of relations $U_{i}\longrightarrow V_{i}$($U_{i},V_{i}$ are words). There is are two words $A,B$. We start from $A$, and we want to reach to $B$. At each step we can change one subword $U_{i}$ to $V_{i}$. Prove that there does not exist an algorithm that picks up $A,B$ and $U_{i}$'s,$V_{i}$'s and decides whether we can reach from $A$ to $B$ or not.
