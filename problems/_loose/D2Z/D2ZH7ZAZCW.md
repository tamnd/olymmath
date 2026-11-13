---
tag: D2ZH7ZAZCW
kind: problem
type: answer
answer: All positive integers not divisible by 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XXIX Rioplatense Mathematical Olympiad
---
Initially there is a positive integer $N$ written on the blackboard. The following operations are allowed:
* Replace the number by a positive multiple of itself.
* Replace the number by another which has the same digits in a different order (it is allowed for the new number to begin with 0). For example, if $2022$ is written on the blackboard, with this operation one can write any of the numbers $222$, $2202$ or $2220$.
Find all values of $N$ such that it is possible to obtain $1$ after a sequence of operations.
