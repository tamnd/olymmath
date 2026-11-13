---
tag: GWV400CGSD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h559161
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55668
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249035
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1995
    source: hf-ai-mo-aops
    label: 1995 All-Russian Olympiad
---
Numbers 1 and -1 are written in the cells of a board 2000×2000. It is known that the sum of all the numbers in the board is positive. Show that one can select 1000 rows and 1000 columns such that the sum of numbers written in their intersection cells is at least 1000.
*D. Karpov*
