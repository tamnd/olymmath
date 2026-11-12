---
tag: N4JAZP9D38
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
All cells of a $100 \times 100$ square table are numbered in some order with numbers from 1 to 10000. Petya colors the cells according to the following rules. Initially, he colors $k$ cells at his discretion. Then, on each move, Petya can color one more uncolored cell with number $a$ if at least one of the two conditions is met: either there is an already colored cell with a number less than $a$ in the same row; or there is an already colored cell with a number greater than $a$ in the same column. What is the smallest $k$ such that, regardless of the initial numbering, Petya can color all the cells of the table in several moves?

(S. Berlov)
