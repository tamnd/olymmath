---
tag: YYWDJPR9TN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022990
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29017
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229023
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2013 Tournament of Towns
---
On an initially colourless plane three points are chosen and marked in red, blue and yellow.
At each step two points marked in different colours are chosen. Then one more point is painted in the third colour so that these three points form a regular triangle with the vertices coloured clockwise in ''red, blue, yellow". A point already marked may be marked again so that it may have several colours. Prove that for any number of moves all the points containing the same colour lie on the same line.
