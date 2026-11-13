---
tag: EM594JTNMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2986386
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60531
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252609
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2012
    source: hf-ai-mo-aops
    label: 2012 Switzerland - Final Round
---
There are 2012 chameleons sitting at a round table. At the beginning each has the color red or green. After every full minute, each chamaleon, which has two neighbors of the same color, changes its color from red to green or from green to red. All others keep their color. Show that after $2012$ minutes there are at least $2$ chameleons that have the same often changed color.
