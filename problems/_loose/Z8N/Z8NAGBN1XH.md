---
tag: Z8NAGBN1XH
kind: problem
type: answer
answer: All even integers k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2021
    source: hf-mathnet
    label: Baltic Way Baltic Way 2021 Shortlist
---
Find all $k \in \mathbb{Z}$ such that there exists a function $f : \mathbb{Z} \to \mathbb{Z}$ satisfying
$$
f(f(n)) = n + k
$$
for all $n \in \mathbb{Z}$.
