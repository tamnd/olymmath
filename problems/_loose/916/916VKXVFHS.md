---
tag: 916VKXVFHS
kind: problem
type: answer
answer: Exactly those starting arrangements with an odd number of coins initially showing black.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
There are $2014$ coins each of which is black on one side and white on the other side. A $2014 \times 1$ board is given. One coin is placed on each square. In each move we can remove one coin with black side up and, at the same time, flip the coins on the neighbouring squares (if they were not already removed).
Determine all starting arrangements of coins such that there is a finite sequence of moves which removes all the coins. (New Zealand)
