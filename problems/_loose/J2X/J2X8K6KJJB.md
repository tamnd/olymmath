---
tag: J2X8K6KJJB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h2842048
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44124
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2022
    source: hf-ai-mo-aops
    label: 2022 Iran MO (2nd round)
---
There is an $n*n$ table with some unit cells colored black and the others are white.
In each step , Amin takes a $row$ with exactly one black cell in it , and color all cells in that black cell's $column$ red.
While Ali , takes a $column$ with exactly one black cell in it , and color all cells in that black cell's $row$ red.
Prove that Amin can color all the cells red , iff Ali can do so.
