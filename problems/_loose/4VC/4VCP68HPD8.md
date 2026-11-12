---
tag: 4VCP68HPD8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1528950
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26000
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11136
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2009
    source: hf-ai-mo-aops
    label: 2009 JBMO Shortlist
  - at: jbmo-sl/2009
    source: hf-numina-olympiads
    label: JBMO-SL
---
A group of $n > 1$ pirates of different age owned total of $2009$ coins. Initially each pirate (except the youngest one) had one coin more than the next younger.
a) Find all possible values of $n$ .
b) Every day a pirate was chosen. The chosen pirate gave a coin to each of the other pirates. If $n = 7$ , find the largest possible number of coins a pirate can have after several days.
