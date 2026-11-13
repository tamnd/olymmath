---
tag: 8KZTMX17R4
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A word is *palindromic* if it reads the same from the left and the right. What is the maximum length of a word written in two letters that cannot be partitioned into four or fewer palindromic subwords?
Here, for example, the word *abbaa* can be partitioned into two palindromic subwords as $(abba)(a)$ or three palindromic subwords as $(a)(bb)(aa)$.
