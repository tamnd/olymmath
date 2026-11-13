---
tag: Z28KGKJH1G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h416148
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28676
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2003 Tournament Of Towns
---
A $m \times n$ table is filled with signs $"+"$ and $"-"$ . A table is called irreducible if one cannot reduce it to the table filled with $"+"$ , applying the following operations (as many times as one wishes). $a)$ It is allowed to flip all the signs in a row or in a column. Prove that an irreducible table contains an irreducible $2\times 2$ sub table. $b)$ It is allowed to flip all the signs in a row or in a column or on a diagonal (corner cells are diagonals of length $1$ ). Prove that an irreducible table contains an irreducible $4\times 4$ sub table.
