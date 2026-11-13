---
tag: B7Z4WSRWC9
kind: problem
type: answer
answer: n \equiv 0 \pmod{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221787
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Ana and Banana play a game with $2n$ lamps numbered $1$ to $2n$ from left to right. Initially, all lamps numbered $1$ through $n$ are on, and all lamps numbered $n+1$ through $2n$ are off. They play with the following rules, where they alternate turns with Ana going first:

- On Ana's turn, she can choose two adjacent lamps $i$ and $i+1$, where lamp $i$ is on and lamp $i+1$ is off, and toggle both.

- On Banana's turn, she can choose two adjacent lamps which are either both on or both off, and toggle both.

Players must move on their turn if they are able to,
and if at any point a player is not able to move on her turn, then the game ends.

Determine all $n$ for which Banana can turn off all the lamps before the game ends, regardless of the moves that Ana makes.

*Andrew Wen*
