---
tag: 9W1K1BTPJ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1977 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1869901
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55281
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248648
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1977
    source: hf-ai-mo-aops
    label: 1977 All Soviet Union Mathematical Olympiad
---
Given natural numbers $x_1,x_2,...,x_n,y_1,y_2,...,y_m$ . The following condition is valid: $$ (x_1+x_2+...+x_n)=(y_1+y_2+...+y_m)<mn \,\,\, (*) $$ Prove that it is possible to delete some terms from (*) (not all and at least one) and to obtain another valid condition.
