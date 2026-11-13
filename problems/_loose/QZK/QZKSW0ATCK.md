---
tag: QZKSW0ATCK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given integers $2 \leq k \leq n$. Theodore is playing the following game against an evil wizard: The wizard has $2 n$ cards, for each integer $i \in\{1,2, \ldots, n\}$, the wizard has exactly 2 cards numbered $i$. The evil wizard places the cards face down in a line indistinguishably. Theodore performs the following move: he chooses $k$ cards, the wizard turns them over, and if two cards are identical, Theodore wins. If not, the wizard takes the $k$ cards, shuffles them, and places them face down again (He permutes the cards that Theodore turned over without changing the other cards). We say the game is winning if there exists an integer $m$ such that Theodore can ensure a win in fewer than $m$ moves. For which pairs $(k, n)$ is the game winning?
