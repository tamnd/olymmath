---
tag: DYZ40NW52E
kind: problem
type: answer
answer: "9590"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From 8 English letters $A, B, C, D, E, X, Y, Z$, any 5 letters (letters can be repeated) form a "word". All possible "words" are arranged in "dictionary order" (i.e., the order in which English words are arranged in an English-Chinese dictionary), resulting in a "word list":

Try to find the number of "words" located between the "word" $C Z Y E B$ and the "word" $X C E D A$ (excluding these two words).
