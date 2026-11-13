---
tag: 882CTSAQPJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248667
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two heaps of checkers. the bigger contains $m$ checkers, the smaller -- $n$ ($m>n$). Two players are taking checkers in turn from the arbitrary heap. The players are allowed to take from the heap a number of checkers (not zero) divisible by the number of checkers in another heap. The player that takes the last checker in any heap wins.
a) Prove that if $m > 2n$, than the first can always win.
b) Find all $x$ such that if $m > xn$, than the first can always win.
