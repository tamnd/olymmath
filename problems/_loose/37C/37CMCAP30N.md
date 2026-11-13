---
tag: 37CMCAP30N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2016
    url: https://artofproblemsolving.com/community/c6h3056868
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57189
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250008
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2016
    source: hf-ai-mo-aops
    label: Russian TST 2016
---
In a class, there are $n{}$ children of different heights. Denote by $A{}$ the number of ways to arrange them all in a row, numbered $1,2,\ldots,n$ from left to right, so that each person with an odd number is shorter than each of his neighbors. Let $B{}$ be the number of ways to organize $n-1$ badminton games between these children so that everyone plays at most two games with children shorter than himself and at most one game with children taller than himself (the order of the games is not important). Prove that $A = B$ .
