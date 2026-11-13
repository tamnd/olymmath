---
tag: MAB6FDD713
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Davide plays the following game: he starts with an integer between 1 and 99 and at each move, he replaces the number $n$ he currently has with the number formed by the last two digits of $51n + 50$ (or just the last digit if the second-to-last digit is 0). What is the maximum number of different numbers he can obtain in the first 100 moves of a single game?
(A) 2
(B) 4
(C) 51
(D) 99
(E) 100
