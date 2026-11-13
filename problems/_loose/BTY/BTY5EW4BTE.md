---
tag: BTY5EW4BTE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h2784241
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=451
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Taiwan Mathematics Olympiad
---
Two babies A and B are playing a game with $2022$ bottles of milk. Each bottle has a maximum capacity of $200$ ml, and initially each bottle holds $30$ ml of milk.
Starting from A, they take turns and do one of the following:
(1) Pick a bottle with at least $100$ ml of milk, and drink half of it.
(2) Pick two bottles with less than $100$ ml of milk, pour the milk of one bottle into the other one, and toss away the empty bottle.
Whoever cannot do any operations loses the game. Who has a winning strategy?
*Proposed by Chu-Lan Kao and usjl*
