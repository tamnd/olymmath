---
tag: JNMKCFB4ZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob play the following game: Alice writes a strictly positive integer on the board. On each of his turns, Bob chooses an integer $a \geqslant 1$, and replaces the integer $n$ written on the board with $n-a^{2}$. On each of her turns, Alice chooses an integer $k \geqslant 1$, and replaces the integer $m$ with $m^{k}$. Bob starts: he wins if after a finite number of turns, he manages to write 0 on the board, otherwise Alice wins. Which of the two players has a winning strategy?
