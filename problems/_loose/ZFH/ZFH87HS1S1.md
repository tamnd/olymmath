---
tag: ZFH87HS1S1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3072239
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=803
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204455
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2023
    source: hf-ai-mo-aops
    label: 2023 Irish Math Olympiad
  - at: ie-irmo/2023
    source: hf-mathnet
    label: Ireland IRL_ABooklet_2023
---
Caitlin and Donal play a game called *Basketball Shoot-Out*. The game consists of $10$ rounds. In each round, Caitlin and Donal both throw a ball simultaneously at each other's basket. If a player's ball falls into the basket, that player scores one point; otherwise, they score zero points. The scoreboard shows the complete sequence of points scored by each player in each of the $10$ rounds of the game.

It turns out that Caitlin has scored at least as many points in total as Donal after every round of the game. Prove the number of possible scoreboards is divisible by $4$ but not by $8$ .
