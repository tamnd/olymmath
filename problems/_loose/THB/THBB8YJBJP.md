---
tag: THBB8YJBJP
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=71
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Every term of the sequence $a_1, a_2, a_3, \dots$ is either $0$ or $1$. It is known that both $0$ and $1$ occur at least $1010$ times among every $2021$ consecutive terms of the sequence. May one be sure that the sequence is periodic from some place on, i.e., there exist positive integers $n$ and $p$ such that $a_{n+i} = a_{n+i+p}$ for every natural number $i$?
