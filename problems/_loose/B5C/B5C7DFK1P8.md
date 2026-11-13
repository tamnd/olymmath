---
tag: B5C7DFK1P8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h62046
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40547
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2002
    source: hf-ai-mo-aops
    label: 2002 Greece National Olympiad
---
A student of the National Technical University was reading advanced mathematics last summer for 37 days according to the following rules :
(a) He was reading at least one hour every day.
(b) He was reading an integer number of hours, but not more than 12, each day.
(c) He had to read at most 60 hours in total.

Prove that there were some successive days during which the student was reading exactly 13 hours in total.
