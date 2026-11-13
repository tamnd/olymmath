---
tag: NAX278KP8B
kind: problem
type: answer
answer: "101"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92566
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
One evening, 21 people made $n$ phone calls to each other. It is known that among them, $m$ people $a_{1}, a_{2}, \cdots, a_{m}$ made phone calls to each other such that $a_{i}$ and $a_{i+1}$ communicated $\left(i=1,2, \cdots, m, a_{m+1}=a_{1}\right)$, and $m$ is odd. If among these 21 people, no 3 people made phone calls to each other, find the maximum value of $n$.
