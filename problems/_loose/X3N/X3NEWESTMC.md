---
tag: X3NEWESTMC
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XLIII Russian mathematical olympiad
---
Initially, Bazil thinks of eight cells on a chessboard, no two of which are in the same row or in the same column. Then Pete makes a series of guesses. By a guess, he places onto the chessboard 8 rooks of Pete's rooks which stand on positions he thinks of. If Bazil indicates an even number of rooks, Pete wins. Otherwise, the rooks are removed from the board, and then Pete makes the next guess.

Find the least number of guesses at which Pete can win for sure.
