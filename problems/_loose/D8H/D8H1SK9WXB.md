---
tag: D8H1SK9WXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3610469
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2628
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Germany Team Selection Test
  - at: isl/2024
    source: hf-mathnet
    label: IMO IMO2024 Shortlisted Problems
---
Let $N$ be a positive integer. Geoff and Ceri play a game in which they start by writing the numbers $1, 2, \dots, N$ on a board. They then take turns to make a move, starting with Geoff. Each move consists of choosing a pair of integers $(k, n)$ , where $k \geq 0$ and $n$ is one of the integers on the board, and then erasing every integer $s$ on the board such that $2^k \mid n - s$ . The game continues until the board is empty. The player who erases the last integer on the board loses.

Determine all values of $N$ for which Geoff can ensure that he wins, no matter how Ceri plays.
