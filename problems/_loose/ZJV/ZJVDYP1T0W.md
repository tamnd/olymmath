---
tag: ZJVDYP1T0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2722167
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34315
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/1989
    source: hf-ai-mo-aops
    label: 1989 Chile National Olympiad
---
The function $f$ , with domain on the set of non-negative integers, is defined by the following : $\bullet$ $f (0) = 2$ $\bullet$ $(f (n + 1) -1)^2 + (f (n)-1) ^2 = 2f (n) f (n + 1) + 4$ , taking $f (n)$ the largest possible value.
Determine $f (n)$ .
