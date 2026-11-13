---
tag: R9AJQGMFK2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h53045
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42213
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238798
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2004
    source: hf-ai-mo-aops
    label: 2004 India IMO Training Camp
---
The game of $pebbles$ is played on an infinite board of lattice points $(i,j)$ . Initially there is a $pebble$ at $(0,0)$ . A move consists of removing a $pebble$ from point $(i,j)$ and placing a $pebble$ at each of the points $(i+1,j)$ and $(i,j+1)$ provided both are vacant. Show taht at any stage of the game there is a $pebble$ at some lattice point $(a,b)$ with $0 \leq a+b \leq 3$
