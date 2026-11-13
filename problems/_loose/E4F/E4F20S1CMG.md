---
tag: E4F20S1CMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Al is bored of Rock Paper Scissors, and wants to invent a new game: $Z-Y-X-W-V.$ Two players, each choose to play either $Z, Y, X, W,$ or $V.$ If they play the same thing, the result is a tie. However, Al must come up with a 'pecking order', that is, he must decide which plays beat which. For each of the $10$ pairs of distinct plays that the two players can make, Al randomly decides a winner. For example, he could decide that $W$ beats $Y$ and that $Z$ beats $X,$ etc. What is the probability that after Al makes all of these $10$ choices, the game is balanced, that is, playing each letter results in an equal probability of winning?
