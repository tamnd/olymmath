---
tag: AETQ7ZF4H0
kind: problem
type: answer
answer: n^2+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n $ be an odd natural number. A square with side $ n $ is divided into $ n^2 $ unit squares. The sides of these squares determine a total of $ 2n(n+1) $ unit segments. Some of these segments are painted red, with each unit square having at least two red sides. What is the minimum number of segments that can be painted red?
