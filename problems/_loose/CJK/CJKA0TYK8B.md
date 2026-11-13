---
tag: CJKA0TYK8B
kind: problem
type: answer
answer: p+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a prime number $p$. We must design a pachisi tournament subject to the following rules.

- The tournament has $p^{2}$ players.
- In each game, $p$ players play.
- The tournament is divided into rounds. The rounds are divided into games. Each player plays one, or none, game in each round.
- At the end of the tournament, each player has faced each of the other players exactly once.

Determine if it is possible to design such a tournament. If so, find the minimum number of rounds the tournament can have.
