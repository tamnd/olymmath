---
tag: V8J73SJ5SS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2113757
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28949
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2011 Tournament of Towns
---
There are $n$ coins in a row. Two players take turns picking a coin and flipping it. The location of the heads and tails should not repeat. Loses the one who can not make a move. Which of player can always win, no matter how his opponent plays?
