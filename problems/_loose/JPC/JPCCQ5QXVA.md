---
tag: JPCCQ5QXVA
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A pile of $2^n - 1$ coins is placed on the player. Alice is allowed to make the following moves: If a pile has an even number of coins, she can throw half of those coins away. If a pile has an odd number of coins $k$ such that $k + 1$ is properly divisible by $2^l$ (i.e. $2^l|k + 1$ and $2^l < k + 1$) for some positive integer $l$, Alice can take away $2^l - 1$ coins from this pile and form a new pile with those coins. Alice continues making moves until no more moves can be made. What are the possible values for the number of coins that will remain on the table?
