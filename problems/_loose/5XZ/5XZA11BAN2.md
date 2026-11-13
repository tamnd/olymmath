---
tag: 5XZA11BAN2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h530266
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55681
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1996
    source: hf-ai-mo-aops
    label: 1996 All-Russian Olympiad
---
On a coordinate plane are placed four counters, each of whose centers has integer coordinates. One can displace any counter by the vector joining the centers of two of the other counters. Prove that any two preselected counters can be made to coincide by a finite sequence of moves.

*Р. Sadykov*
