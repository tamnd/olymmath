---
tag: YPFG99GB7A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h533677
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9578
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2013
    source: hf-ai-mo-aops
    label: 2013 India IMO Training Camp
---
A marker is placed at the origin of an integer lattice. Calvin and Hobbes play the following game. Calvin starts the game and each of them takes turns alternatively. At each turn, one can choose two (not necessarily distinct) integers $a, b$ , neither of which was chosen earlier by any player and move the marker by $a$ units in the horizontal direction and $b$ units in the vertical direction. Hobbes wins if the marker is back at the origin any time after the first turn. Prove or disprove that Calvin can prevent Hobbes from winning.

Note: A move in the horizontal direction by a positive quantity will be towards the right, and by a negative quantity will be towards the left (and similar directions in the vertical case as well).
