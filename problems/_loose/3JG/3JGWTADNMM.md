---
tag: 3JGWTADNMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221521
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all positive integers $n$ with the following property: for each triple $(a, b, c)$ of positive real numbers there is a triple $(k, \ell, m)$ of non-negative integer numbers so that $an^k$, $bn^{\ell}$ and $cn^m$ are the lengths of the sides of a (non-degenerate) triangle shapes.
