---
tag: FBCS9B0W1B
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=96
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nl-nwo-r2
    source: hf-mathnet
    label: Netherlands Second Round
---
In a $3 \times 2$ rectangle, we put the numbers $1$ to $6$ in the squares in such a way that each number occurs exactly once. The *score* of such a distribution is determined as follows: for each two adjacent squares we compute the difference between their two numbers and we add up all these differences. In the example on the right, the differences are indicated in red. This distribution has score $17$.
What is the smallest possible score of such a distribution?
