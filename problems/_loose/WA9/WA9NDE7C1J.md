---
tag: WA9NDE7C1J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h1602901
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40409
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2018
    source: hf-ai-mo-aops
    label: 2018 Greece Junior Math Olympiad
---
A $8\times 8$ board is given. Seven out of $64$ unit squares are painted black. Suppose that there exists a positive $k$ such that no matter which squares are black, there exists a rectangle (with sides parallel to the sides of the board) with area $k$ containing no black squares. Find the maximum value of $k$ .
