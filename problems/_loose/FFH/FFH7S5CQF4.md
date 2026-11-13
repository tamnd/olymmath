---
tag: FFH7S5CQF4
kind: problem
type: answer
answer: "48"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A flea is initially on a vertex of a regular 2015-sided polygon; it performs a sequence of jumps counterclockwise: on the first jump, it moves to the next vertex (from the initial one to the adjacent one), on the second jump, it moves three vertices, on the third jump, it moves five vertices, and so on, such that on the $n$-th jump, it moves $2n-1$ vertices counterclockwise. After how many jumps will it land on a vertex it has already visited for the first time?

Camilla has a box containing 2015 paper clips. She takes a positive number $n$ and places them on Federica's desk, challenging her to the following game. Federica has two types of moves: she can remove 3 paper clips from the pile on her desk (if the pile contains at least 3 paper clips), or she can remove half of the paper clips present (if the pile contains an even number of paper clips). Federica wins if, with a sequence of moves of the types described, she can remove all the paper clips from her desk.

(a) For how many of the 2015 possible values of $n$ can Federica win?

(b) The girls change the rules of the game and decide to award Federica the win if she can leave a single paper clip on the desk. For how many of the 2015 values of $n$ can Federica win with the new rules?
