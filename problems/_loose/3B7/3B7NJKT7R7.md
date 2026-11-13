---
tag: 3B7NJKT7R7
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the All-Star basketball game, 27 players participate, each wearing a jersey with their favorite number, which is a non-negative integer. After the game, they line up in a 3-row, 9-column formation for fans to take photos. An eccentric fan only takes photos of the following type: the players in the frame form a rectangle of $a$ rows and $b$ columns $(1 \leqslant a \leqslant 3,1 \leqslant b \leqslant 9)$ (the row and column directions are consistent with the original formation), and the sum of the jersey numbers of the players in the frame (for a single player, it is the player's jersey number) is a multiple of 10. As a result, this fan only takes photos of $s$ players. Find the minimum possible value of $s$.
