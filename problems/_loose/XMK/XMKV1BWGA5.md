---
tag: XMKV1BWGA5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2933926
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34425
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Chile National Olympiad
---
A box contains $100$ tickets. Each ticket has a real number written on it. There are no restrictions on the type of number except that they are all different (they can be integers, rational, positive, negative, irrational, large or small). Of course there is one ticket that has the highest number and that is the winner.
The game consists of drawing a ticket at random, looking at it and deciding whether to keep it or not. If we choose to keep him, it is verified if he was the oldest, in which case we win a million pesos (if we don't win, the game is over). If we don't think it's the biggest, we can discard it and draw another one, repeating the process until we like one or we run out of tickets. Going back to choose a previously discarded ticket is prohibited.
Find a game strategy that gives at least a $25\%$ chance of winning.
