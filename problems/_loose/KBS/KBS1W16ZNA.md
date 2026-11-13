---
tag: KBS1W16ZNA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h478173
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4069
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2009
    source: hf-ai-mo-aops
    label: 2009 Romania Team Selection Test
---
Some $n>2$ lamps are cyclically connected: lamp $1$ with lamp $2$ , ..., lamp $k$ with lamp $k+1$ ,..., lamp $n-1$ with lamp $n$ , lamp $n$ with lamp $1$ . At the beginning all lamps are off. When one pushes the switch of a lamp, that lamp and the two ones connected to it change status (from off to on, or vice versa). Determine the number of configurations of lamps reachable from the initial one, through some set of switches being pushed.
