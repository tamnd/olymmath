---
tag: ZM0W0PDA2K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alicia and Florent are playing the following game: starting with a number $1<n \leqslant 1000$, they take turns according to the following rules: Alicia (who starts) can either add 4 to the number (whatever it is) or divide it by 2 if it is even. Florent can either subtract 2 from the number (whatever it is) or multiply it by 2 if it is odd. Alicia wins if 0 or 1 is reached, and Florent wins if 1000 is exceeded or if Alicia hasn't won after 100 rounds of the game (1 round occurs when each has played once). Who has a winning strategy?
