---
tag: WHVBK5TZA0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The words of the language of the robots on the planet Shelyakia are sequences of arrows "up", "down", "left", and "right", with the condition that two opposite arrows cannot stand next to each other. The teacher wrote 1000000 words of this language on the board. Four students copy the words into their notebooks, making the following changes: student U adds an arrow up before the word, and if this is forbidden (the word starts with "down"), then removes this first "down",

students D, L, R do the same, but add one arrow down, left, or right, respectively, and erase the first symbol if it turns out to be "up", "right", "left". Prove that in one of the four notebooks, at least half (500000) of the words will not appear among the words on the board.
