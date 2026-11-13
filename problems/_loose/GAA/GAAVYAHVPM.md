---
tag: GAAVYAHVPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146764
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given vectors $a_{1}, a_{2}, \cdots, a_{n}$ whose magnitudes are all no greater than 1. Prove: these $n$ vectors can be divided into two groups (one of the two groups may be empty), such that
$$
|| S|-| T|| \leqslant 1,
$$

where, $S$ and $T$ are the sums of the vectors in each of the two groups, respectively.
