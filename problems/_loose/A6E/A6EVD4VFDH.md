---
tag: A6EVD4VFDH
kind: problem
type: answer
answer: "19"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=153918
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting with a list of three numbers, the "Make-My-Day" procedure creates a new list by replacing each number by the sum of the other two.
For example, from $\{1,3,8\}$ "Makee-My-Day" gives $\{11,9,4\}$ and a new "Make$M y$-Day" leads to $\{13,15,20\}$.
If we begin with $\{20,1,8\}$, what is the maximum difference between two numbers on the list after 2018 consecutive "Make-My-Day"s?
