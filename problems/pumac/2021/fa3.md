---
tag: R2EXP9T7SF
kind: problem
appearances:
  - at: pumac/2021/fa3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Finals_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834947
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73331
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob are playing a game, starting with a binary string $ b$ of length $2022$ . In each step, the rightmost digit of the string is deleted. If the deleted digit was $1$ , Alice gets to choose which digit she wants to append on the left. Otherwise, Bob gets to choose the digit to append on the left of the string.
Alice would like to turn the string $b$ into the all-zero string $\underbrace{00 . . . 0}_{2022}$ , in the least number of
steps possible, while Bob would like to maximize the number of steps necessary, or prevent Alice from doing this at all.
a) Is there a string $b$ for which Bob can prevent Alice in her goal, if both players play optimally?
b) If the answer to part a is yes, find all such strings $b$ . If the answer is no, find the maximal game time and find the set of strings $b$ for which the game time is maximal.
