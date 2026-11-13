---
tag: STVFTP34YV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90941
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=91
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be two different hospitals that treat exactly the same number of patients during a year. Each patient suffers from one of two diseases, $X$ or $Y$. Hospital $A$ cures a greater percentage of its patients than hospital $B$. Is it possible that hospital $B$ cures both a greater percentage of $X$-patients than $A$, and a greater percentage of $Y$-patients than $A$ ?
