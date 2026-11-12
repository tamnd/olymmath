---
tag: ZDA32CSV9D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1946 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1878537
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56602
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1946
    source: hf-ai-mo-aops
    label: 1946 Moscow Mathematical Olympiad
---
Prove that for any integers $x$ and $y$ we have $x^5 + 3x^4y - 5x^3y^2 - 15x^2y^3 + 4xy^4 + 12y^5 \ne 33$ .
