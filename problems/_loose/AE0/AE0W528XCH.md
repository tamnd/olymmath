---
tag: AE0W528XCH
kind: problem
type: answer
answer: "1112"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a real number $x$ with $0 < x < 1$ *interesting* if $x$ is irrational and if in its decimal writing the first four decimals are equal. Determine the least positive integer $n$ with the property that every real number $t$ with $0 < t < 1$ can be written as the sum of $n$ pairwise distinct interesting numbers.
