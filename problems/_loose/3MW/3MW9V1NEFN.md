---
tag: 3MW9V1NEFN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269318
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be two $n\times n$ matrices with integer entries such that all of the matrices
$$A,\enspace A+B,\enspace A+2B,\enspace A+3B,\enspace\ldots,\enspace A+(2n)B$$are invertible and their inverses have integer entries, too. Show that $A+(2n+1)B$ is also invertible and that its inverse has integer entries.
