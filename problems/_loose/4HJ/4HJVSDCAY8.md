---
tag: 4HJVSDCAY8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h365208
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28897
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228907
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2008 Tournament Of Towns
---
There are $N$ piles each consisting of a single nut. Two players in turns play the following game. At each move, a player combines two piles that contain coprime numbers of nuts into a new pile. A player who can not make a move, loses. For every $N > 2$ determine which of the players, the first or the second, has a winning strategy.
