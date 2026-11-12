---
tag: EXV57D6RXH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1269703
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13927
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Germany Team Selection Test
---
In the beginning there are $100$ integers in a row on the blackboard. Kain and Abel then play the following game: A *move* consists in Kain choosing a chain of consecutive numbers; the length of the chain can be any of the numbers $1,2,\dots,100$ and in particular it is allowed that Kain only chooses a single number. After Kain has chosen his chain of numbers, Abel has to decide whether he wants to add $1$ to each of the chosen numbers or instead subtract $1$ from of the numbers. After that the next move begins, and so on.

If there are at least $98$ numbers on the blackboard that are divisible by $4$ after a move, then Kain has won.

Prove that Kain can force a win in a finite number of moves.
