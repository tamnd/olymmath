---
tag: 7RJGY1W1N2
kind: problem
type: answer
answer: n^2-n+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each side of an equilateral triangle is divided into n equal parts. Lines are drawn through the division points, parallel to the sides. As a result, the triangle is divided into $n^{2}$ small triangles. We will call a chain a sequence of small triangles in which no triangle appears more than once and each subsequent triangle shares a side with the previous one. What is the maximum possible number of triangles in a chain?
