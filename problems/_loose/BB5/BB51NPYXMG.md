---
tag: BB51NPYXMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3580168
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Iran Team Selection Test
---
Suppose $ p $ is a prime number. We have a number of cards, each of which has a number written on it such that each of the numbers $1, \dots, p-1 $ appears at most once and $0$ exactly once. To design a game, for each pair of cards $ x $ and $ y $, we want to determine which card wins over the other. The following conditions must be satisfied: $a)$ If card $ x $ wins over card $ y $, and card $ y $ wins over card $ z $, then card $ x $ must also win over card $ z $.

$b)$ If card $ x $ does not win over card $ y $, and card $ y $ does not win over card $ z $, then for any card $ t $, card $ x + z $ must not win over card $ y + t $.

What is the maximum number of cards such that the game can be designed (i.e., one card does not defeat another unless the victory is symmetric or consistent)?

*Proposed by Ali Partofard*
