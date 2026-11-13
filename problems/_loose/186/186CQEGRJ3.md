---
tag: 186CQEGRJ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h383059
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55725
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1999
    source: hf-ai-mo-aops
    label: 1999 All-Russian Olympiad
---
There are several cities in a country. Some pairs of the cities are connected by a two-way airline of one of the $N$ companies, so that each company serves exactly one airline from each city, and one can travel between any two cities, possibly with transfers. During a financial crisis, $N-1$ airlines have been canceled, all from different companies. Prove that it is still possible to travel between any two cities.
