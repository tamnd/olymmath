---
tag: TGX3YY6XS6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h86775
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22954
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1994
    source: hf-ai-mo-aops
    label: 1994 IberoAmerican
---
In each square of an $n\times{n}$ grid there is a lamp. If the lamp is touched it changes its state every lamp in the same row and every lamp in the same column (the one that are on are turned off and viceversa). At the begin, all the lamps are off. Show that lways is possible, with an appropriated sequence of touches, that all the the lamps on the board end on and find, in function of $n$ the minimal number of touches that are necessary to turn on every lamp.
