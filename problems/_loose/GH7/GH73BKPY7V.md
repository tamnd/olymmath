---
tag: GH73BKPY7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1947 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1878568
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56608
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1947
    source: hf-ai-mo-aops
    label: 1947 Moscow Mathematical Olympiad
---
Find the remainder after division of the polynomial $x+x^3 +x^9 +x^{27} +x^{81} +x^{243}$ by $x-1$ .
