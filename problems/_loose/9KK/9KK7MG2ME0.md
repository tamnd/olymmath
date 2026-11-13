---
tag: 9KK7MG2ME0
kind: problem
type: answer
answer: 5 \cdot 3^{16}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a game, a player can level up to 16 levels. In each level, the player can upgrade an ability spending that level on it. There are three kinds of abilities, however, one ability can not be upgraded before level 6 for the first time. And that special ability can not be upgraded before level 11. Other abilities can be upgraded at any level, any times (possibly 0), but the special ability needs to be upgraded exactly twice. In how many ways can these abilities be upgraded?
