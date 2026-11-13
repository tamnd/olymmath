---
tag: 6Z7GBPNFFK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h21842
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28697
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2004 Tournament Of Towns
---
We have a number of towns, with bus routes between some of them (each bus route goes from a town to another town without any stops). It is known that you can get from any town to any other by bus (possibly changing buses several times). Mr. Ivanov bought one ticket for each of the bus routes (a ticket allows single travel in either direction, but not returning on the same route). Mr. Petrov bought n tickets for each of the bus routes. Both Ivanov and Petrov started at town A. Ivanov used up all his tickets without buying any new ones and finished his travel at town B. Petrov, after using some of his tickets, got stuck at town X: he can not leave it without buying a new ticket. Prove that X is either A or B.
