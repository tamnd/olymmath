---
tag: C9PAF0DC12
kind: problem
type: answer
answer: -floor(n/2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0000.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union 5th ASU
---
a. Each of $x_{1}, \ldots, x_{n}$ is $-1$, $0$ or $1$. What is the minimal possible value of the sum of all $x_{i}x_{j}$ with $1 \leq i < j \leq n$?

b. Is the answer the same if the $x_{i}$ are real numbers satisfying $0 \leq |x_{i}| \leq 1$ for $1 \leq i \leq n$?
