---
tag: R2EXP9T7SF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834947
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73331
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2021
    source: hf-ai-mo-aops
    label: 2021 Princeton University Math Competition
---
Alice and Bob are playing a game, starting with a binary string $ b$ of length $2022$ . In each step, the rightmost digit of the string is deleted. If the deleted digit was $1$ , Alice gets to choose which digit she wants to append on the left. Otherwise, Bob gets to choose the digit to append on the left of the string.
Alice would like to turn the string $b$ into the all-zero string $\underbrace{00 . . . 0}_{2022}$ , in the least number of
steps possible, while Bob would like to maximize the number of steps necessary, or prevent Alice from doing this at all.
a) Is there a string $b$ for which Bob can prevent Alice in her goal, if both players play optimally?
b) If the answer to part a is yes, find all such strings $b$ . If the answer is no, find the maximal game time and find the set of strings $b$ for which the game time is maximal.
