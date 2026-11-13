---
tag: M6KW8H8Y7H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Turkey MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h450643
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7388
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209505
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Turkey MO (2nd round)
---
Let $A$ and $B$ two countries which inlude exactly $2011$ cities.There is exactly one flight from a city of $A$ to a city of $B$ and there is no domestic flights (flights are bi-directional).For every city $X$ (doesn't matter from $A$ or from $B$ ), there exist at most $19$ different airline such that airline have a flight from $X$ to the another city.For an integer $k$ , (it doesn't matter how flights arranged ) we can say that there exists at least $k$ cities such that it is possible to trip from one of these $k$ cities to another with same airline.So find the maximum value of $k$ .
