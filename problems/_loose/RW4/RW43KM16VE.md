---
tag: RW43KM16VE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2040758
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38739
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2004
    source: hf-ai-mo-aops
    label: 2004 Estonia National Olympiad
---
In the beginning, number $1$ has been written to point $(0,0)$ and $0$ has been written to any other point of integral coordinates. After every second, all numbers are replaced with the sum of the numbers in four neighbouring points at the previous second. Find the sum of numbers in all points of integral coordinates after $n$ seconds.
