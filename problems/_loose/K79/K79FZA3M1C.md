---
tag: K79FZA3M1C
kind: problem
type: answer
answer: 13,14,15
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a rectangular table $14 \times n$. In its top-left cell, there is a chip. Sasha and Olya take turns (Sasha starts) moving the chip one cell to the right or down. We will say that a turn has occurred if the direction of the player's move differs from the direction of the move made by the opponent before that. If, by the time the chip reaches the bottom-right corner, an even number of turns have occurred, Sasha wins; otherwise, Olya wins. For which values of $n$ can Olya ensure her victory regardless of Sasha's actions?
