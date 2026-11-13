---
tag: JBTRA29A3B
kind: problem
type: answer
answer: Béatrice
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Albert and Béatrice are playing a game. There are 2021 pebbles on a table. Taking turns and starting with Albert, they will remove a certain number of pebbles from the table, following this rule. On turn $n \geqslant 1$, the player whose turn it is, that is, Albert if $n$ is odd and Béatrice if $n$ is even, can remove a number of pebbles between 1 and $n$. On the first turn, Albert must remove 1 pebble; on the second turn, Béatrice can remove 1 or 2 pebbles; on the third turn, Albert can remove 1, 2, or 3 pebbles, and so on. The player who removes the last pebble from the table loses the game. Determine which of the two players has a strategy to win for sure.
