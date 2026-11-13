---
tag: D45ZRH1JJY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h592213
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11941
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213887
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2014
    source: hf-ai-mo-aops
    label: 2014 Singapore Senior Math Olympiad
---
Find the number of ways that $7$ different guests can be seated at a round table with exactly 10 seats, without removing any empty seats. Here two seatings are considered to be the same if they can be obtained from each other by a rotation.
