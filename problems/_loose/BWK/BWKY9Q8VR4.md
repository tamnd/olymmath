---
tag: BWKY9Q8VR4
kind: problem
type: answer
answer: "100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $100$ empty red and $k$ empty white baskets. At each step we choose one red and one white basket and add equal amounts of water into two chosen baskets. It was observed that after finite number of steps all baskets are non empty and any two baskets simultaneously chosen at some step contain equal amounts of water. Find all possible values of $k$.
