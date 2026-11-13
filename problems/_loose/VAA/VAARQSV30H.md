---
tag: VAARQSV30H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231763
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any natural numbers $0 \leq i_1 < i_2 < \cdots < i_k$ and $0 \leq j_1 < j_2 < \cdots < j_k$, the matrix $A = (a_{rs})_{1\leq r,s\leq k}$, $a_{rs} = {i_r + j_s\choose i_r} = {(i_r + j_s)!\over i_r! j_s!}$ ($1\leq r,s\leq k$) is nonsingular.
