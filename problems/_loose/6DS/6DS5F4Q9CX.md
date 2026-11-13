---
tag: 6DS5F4Q9CX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h375583
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55802
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2003
    source: hf-ai-mo-aops
    label: 2003 All-Russian Olympiad
---
There are $N$ cities in a country. Any two of them are connected either by a road or by an airway. A tourist wants to visit every city exactly once and return to the city at which he started the trip. Prove that he can choose a starting city and make a path, changing means of transportation at most once.
