---
tag: RN92S8BV7C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 IMAC Arhimede
    url: https://artofproblemsolving.com/community/c6h199539
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53023
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imac/2007
    source: hf-ai-mo-aops
    label: 2007 IMAC Arhimede
---
Let $ x,y$ be reals s.t. $ x^2+y^2\leq1$ and $ n$ a natural number.Prove that:
$ (x^n+y)^2+y^2\geq\dfrac{1}{n+2}(x^2+y^2)^n$
