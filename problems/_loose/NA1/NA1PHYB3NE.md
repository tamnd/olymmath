---
tag: NA1PHYB3NE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will call a rectangular table filled with natural numbers *"good"*, if for each two rows, there exist a column for which its two cells that are also in these two rows, contain numbers of different parity. Prove that for $\forall$ $n>2$ we can erase a column from a *good* $n$ x $n$ table so that the remaining $n$ x $(n-1)$ table is also *good*.
