---
tag: YWS3911AKB
kind: problem
type: answer
answer: n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anana has an ordered $n$-tuple $(a_1, a_2, ..., a_n)$ of integers. Banana may make a guess on Anana's ordered integer $n$-tuple $(x_1, x_2, ..., x_n)$, upon which Anana will reveal the product of differences $(a_1 - x_1)(a_2 - x_2)...(a_n - x_n)$. How many guesses does Banana need to figure out Anana's $n$-tuple for certain?
