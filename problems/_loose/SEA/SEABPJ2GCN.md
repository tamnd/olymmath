---
tag: SEABPJ2GCN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55505
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players take turns. Before the game starts, they have an equal number of peas. A move consists of passing any number of peas to the opponent. It is not allowed to pass a number of peas that has already been passed by someone in this game. Passing zero peas is also not allowed. The player who cannot make a move according to the rules is considered the loser.

Who - the starting player or their opponent - will win this game, regardless of how their partner plays? Consider the cases:
a) Each has two peas;

b) Each has three peas;

c) Each has ten peas;

d) The general case: each has $N$ peas.
