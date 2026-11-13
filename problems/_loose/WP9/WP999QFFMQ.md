---
tag: WP999QFFMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 India PRMO
    url: https://artofproblemsolving.com/community/c6h1893453
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17814
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2019
    source: hf-ai-mo-aops
    label: 2019 India PRMO
---
We will say that a rearrangement of the letters of a word has no *fixed letters* if, when the rearrangement is placed directly below the word, no column has the same letter repeated. For instance $HBRATA$ is a rearragnement with no fixed letter of $BHARAT$ . How many distinguishable rearrangements with no fixed letters does $BHARAT$ have? (The two $A$ s are considered identical.)
