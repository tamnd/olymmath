---
tag: PMWV1BZRTJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=64
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 66th Belarusian Mathematical Olympiad
---
An array of $N$ ($N \ge 3$) integer numbers is written on a blackboard. Per move one change the array using the following rule: let $s$ be the arithmetic mean of all numbers of the current array, then each number which is less than or equal to $s-1$ is increased by 1 and each number which is greater than or equal to $s+1$ is decreased by 1; all other numbers are not changed.
Prove that after finite number of the moves the numbers on the blackboard cannot be changed.
(E. Zhibrik)
