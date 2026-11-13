---
tag: QJBJNQTP0A
kind: problem
type: answer
answer: k = 4, 24, 40
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the table, there are $1024$ marbles and two students, $A$ and $B$, alternatively take a positive number of marble(s). The student $A$ goes first, $B$ goes after that and so on. On the first move, $A$ takes $k$ marbles with $1 < k < 1024$. On the moves after that, $A$ and $B$ are not allowed to take more than $k$ marbles or $0$ marbles. The student that takes the last marble(s) from the table wins. Find all values of $k$ the student $A$ should choose to make sure that there is a strategy for him to win the game.
