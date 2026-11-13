---
tag: QRA5NHMXW5
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XXVII Olimpiada Matemática Rioplatense
---
There are 13 weights, all of different colors, and a balance. Ana and Beto know that the weights are of $1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$, $9$, $10$, $11$, $12$ and $13$ grams, but only Ana knows which color corresponds to each weight.

An *operation* consists in putting weights on each side of the balance so that it stays balanced.

Ana wants to do a series of operations that allow Beto to determine with certainty the color of the weight of $1$ gram, by just looking at what she does.

What is the minimum number of operations Ana must do to achieve her goal? Decide which those operations are and how Beto determines the color of the weight of $1$ gram. Explain why she cannot do it with fewer operations.

**Remark:** The balance is balanced when the total weight of the objects put in each side is the same.
