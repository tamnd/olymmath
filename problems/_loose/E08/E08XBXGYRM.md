---
tag: E08XBXGYRM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1890561
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55469
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248836
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1986
    source: hf-ai-mo-aops
    label: 1986 All Soviet Union Mathematical Olympiad
---
Let us call a polynomial *admissible* if all it's coefficients are $0, 1, 2$ or $3$ . For given $n$ find the number of all the *admissible* polynomials $P$ such, that $P(2) = n$ .
