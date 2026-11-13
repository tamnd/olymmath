---
tag: 2HH17JX8BE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Mexico National Olympiad
    url: https://artofproblemsolving.com/community/c6h598064
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5281
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mx-omm/2010
    source: hf-ai-mo-aops
    label: 2010 Mexico National Olympiad
---
In each cell of an $n\times n$ board is a lightbulb. Initially, all of the lights are off. Each move consists of changing the state of all of the lights in a row or of all of the lights in a column (off lights are turned on and on lights are turned off).

Show that if after a certain number of moves, at least one light is on, then at this moment at least $n$ lights are on.
