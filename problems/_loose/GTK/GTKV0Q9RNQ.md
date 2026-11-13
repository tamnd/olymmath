---
tag: GTKV0Q9RNQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a one-player game, you have three cards. At the beginning, a nonnegative integer is written on each of the cards, and the sum of these three integers is $2006$. At each step, you can select two of the three chards, subtract $1$ from the integer written on each of these two cards - as long as the resulting integers are still nonnegative -, and add $1$ to the integer written on the third card. You play this game until you can't perform a step anymore because two of the cards have $0$'s written on them. Assume that, at this moment, the third card has a $1$ written on it. Prove that I can tell you which card contains the $1$ without knowing how exactly you proceeded in your game, but only knowing the starting configuration (i. e., the numbers written on the cards at the beginning of the game) and the fact that at the end, you were left with two $0$'s and a $1$.
