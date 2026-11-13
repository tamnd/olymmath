---
tag: EET1V30ZEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the cells of a rectangular table with $n$ rows and $m$ columns, real numbers are written. Suppose that for any row or column, the sum of the numbers written in that row or column is an integer. Show that it is possible to replace each real number $x$ by the integer $\lfloor x\rfloor$ or $\lceil x\rceil$ so that the sums of each column and each row remain unchanged.

Note: Recall that if $x$ is a real number, $\lfloor x\rfloor$ is the unique integer such that $\lfloor x\rfloor \leqslant x<\lfloor x\rfloor+1$, and $\lceil x\rceil$ is the unique integer such that $\lceil x\rceil-1<x \leqslant\lceil x\rceil$.
