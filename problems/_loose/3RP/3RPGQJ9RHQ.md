---
tag: 3RPGQJ9RHQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248179
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n\ge 3 $ be a natural number and $ A_0A_1...A_{n-1} $ a regular polygon. Consider $ B_0 $ on the segment $ A_0A_1 $ such that $ A_0B_0<\frac{1}{2}A_0A_1; B_1 $ on $ A_1A_2 $ so that $ A_1B_1<\frac{1}{2} A_1A_2; $ etc.; $ B_{n-2} $ on $ A_{n-2}A_{n-1} $ so that $ A_{n-2}B_{n-2} <\frac{1}{2} A_{n-2}A_{n-1} , $ and $ B_{n-1} $ on $ A_{n-1}A_0 $ with $ A_{n-1}B_{n-1} <\frac{1}{2} A_{n-1}A_{0} . $

Show that the perimeter of any ploygon that has its vertices on the segments $ A_1B_1,A_2B_2,...,A_{n-1}B_{n-1}, $ is equal or greater than the perimeter of $ B_0B_1...B_{n-1} . $
