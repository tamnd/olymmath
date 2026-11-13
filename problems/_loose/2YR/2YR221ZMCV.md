---
tag: 2YR221ZMCV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be some natural number. One boss writes $n$ letters a day numerated from 1 to $n$ consecutively. When he writes a letter he piles it up (on top) in a box. When his secretary is free, she gets the letter on the top of the pile and prints it. Sometimes the secretary isn't able to print the letter before her boss puts another one or more on the pile in the box. Though she is always able to print all of the letters at the end of the day.
A permutation is called *"printable"* if it is possible for the letters to be printed in this order. Find a formula for the number of *"printable"* permutations.
