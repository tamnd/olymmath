---
tag: M7ZT0BCM2W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2933949
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34437
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Chile National Olympiad
---
Two players, Aurelio and Bernardo, play the following game. Aurelio begins by writing the number $1$ . Next it is Bernardo's turn, who writes number $2$ . From then on, each player chooses whether to add $1$ to the number just written by the previous player, or whether multiply that number by $2$ . Then write the result and it's the other player's turn. The first player to write a number greater than $ 2007$ loses the game. Determine if one of the players can ensure victory no matter what the other does.
