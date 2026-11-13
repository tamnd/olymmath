---
tag: 6VB1V5MYNM
kind: problem
type: answer
answer: "3943"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence of positive integers, starting from 1, certain numbers are colored red according to the following rules. First, color 1, then color 2 even numbers $2, 4$; then color the 3 nearest consecutive odd numbers after 4, which are 5, 7, 9; then color the 4 nearest consecutive even numbers after 9, which are 10, 12, $14, 16$; then color the 5 nearest consecutive odd numbers after 16, which are 17, $19, 21, 23, 25$. Continue coloring according to this rule, resulting in a red subsequence $1, 2, 4, 5, 7, 9, 12, 14, 16, 17, \cdots$. In this red subsequence, the 2003rd number starting from 1 is
A. 3844
B. 3943
C. 3945
D. 4006
