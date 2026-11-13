---
tag: WXF2ZMANTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1890568
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55472
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248839
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1987
    source: hf-ai-mo-aops
    label: 1987 All Soviet Union Mathematical Olympiad
---
Ten sportsmen have taken part in a table-tennis tournament (each pair has met once only, no draws). Let $xi$ be the number of $i$ -th player victories, $yi$ -- losses. Prove that $$ x_1^2 + ... + x_{10}^2 = y_1^2 + ... + y_{10}^2 $$
