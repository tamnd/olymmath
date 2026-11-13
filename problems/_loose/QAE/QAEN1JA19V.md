---
tag: QAEN1JA19V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h3063850
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1206
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 3
---
Two squids are forced to participate in a game. Before it begins, they will be informed of all the rules, and can discuss their strategies freely. Then, they will be locked in separate rooms, and be given distinct positive integers no larger than $2023$ as their IDs respectively. The two squids then take turns alternatively; on one's turn, the squid chooses one of the following:

1. announce a positive integer, which will be heard by the other squid;
2. declare which squid has the larger ID. If correct, they win and are released together; otherwise, they lose and are fried together.

Find the smallest positive integer $N$ so that, no matter what IDs the squids have been given, they can always win in a finite number of turns, and the sum of the numbers announced during the game is no larger than $N$ .
