---
tag: T6AHB9DV28
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Marius and Bogdan start a game using only the numbers from the set $A=\{1,2,3,4,5,6,7\}$. The rule of the game is as follows: Marius chooses a number from set A. Then Bogdan chooses, followed by Marius again, and so on, alternating. Starting from the second number chosen, each child calculates the sum of all the numbers chosen, including those of the opponent, up to the last number chosen by him. The game is won by the child who first achieves a sum of 49.

a) If Marius starts with the number 3, present a variant of choices that makes Bogdan the winner;

b) If Marius starts with the number 5, describe the strategy Bogdan should adopt to ensure victory;

c) With what number should Marius start to have a chance of winning?
