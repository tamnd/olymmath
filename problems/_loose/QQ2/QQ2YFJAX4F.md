---
tag: QQ2YFJAX4F
kind: problem
type: answer
answer: a_{1n}a_{2n-1}\ldotsa_{n1}=n(2n-1)(3n-2)(4n-3)\ldots(n^2-(n-1))
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=549
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1971
    source: hf-numinamath-1-5
    label: XXII OM - I - Problem 10
---
Given is a table with $ n $ rows and $ n $ columns. The number located in the $ m $-th column and $ k $-th row is equal to $ n(k - 1) + m $. How should $ n $ numbers be chosen, one from each row and each column, so that the product of these numbers is the largest?
