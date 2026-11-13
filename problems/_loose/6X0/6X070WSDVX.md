---
tag: 6X070WSDVX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2609473
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20082
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2021
    source: hf-ai-mo-aops
    label: 2021 Greece Junior Math Olympiad
---
Anna and Basilis play a game writing numbers on a board as follows:
The two players play in turns and if in the board is written the positive integer $n$ , the player whose turn is chooses a prime divisor $p$ of $n$ and writes the numbers $n+p$ . In the board, is written at the start number $2$ and Anna plays first. The game is won by whom who shall be first able to write a number bigger or equal to $31$ .
Find who player has a winning strategy, that is who may writing the appropriate numbers may win the game no matter how the other player plays.
