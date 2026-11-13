---
tag: HGA54YH75T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h2682590
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37052
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2015
    source: hf-ai-mo-aops
    label: 2015 Costa Rica - Final Round
---
Ana & Bruno decide to play a game with the following rules.:
a) Ana has cards $1, 3, 5,7,..., 2n-1$ b) Bruno has cards $2, 4,6, 8,...,2n$ During the first turn and all odd turns afterwards, Bruno chooses one of his cards first and reveals it to Ana, and Ana chooses one of her cards second. Whoever's card is higher gains a point. During the second turn and all even turns afterwards, Ana chooses one of her cards first and reveals it to Bruno, and Bruno chooses one of his cards second. Similarly, whoever's card is higher gains a point. During each turn, neither player can use a card they have already used on a previous turn. The game ends when all cards have been used after $n$ turns. Determine the highest number of points Ana can earn, and how she manages to do this.
