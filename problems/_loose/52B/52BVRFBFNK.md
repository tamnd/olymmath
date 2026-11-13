---
tag: 52BVRFBFNK
kind: problem
type: answer
answer: "671"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=174
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
In a math camp there are $2018$ children. The entertainer has $4036$ tokens. There are two tokens with each of the numbers from $1$ to $2018$; that is, there are two tokens with number $1$, two tokens with number $2$, and so on.

Two tokens with different numbers are given to every child. There cannot be two children receiving the same two numbers.

The children are arranged so that the following condition is satisfied: each child holds a hand with each of the two children sharing a number with him or her.

An *exchange* consists in asking two children to exchange one of their tokens and to rearrange so that the previous condition is still satisfied.

If the $2018$ children have not end in a round, the entertainer can make exchanges to get them form a single big round. But every time he makes an exchange, he must deposit a coin in the money box.

What is the minimum number of coins that the entertainer needs to be sure that, for any initial distribution of the tokens, he can obtain a big round by making exchanges?
