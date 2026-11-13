---
tag: 5CA0APME0N
kind: problem
type: answer
answer: "2018"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100642
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $a_{1}, a_{2}, \cdots, a_{2018}$ satisfying
$$
a_{1}<a_{2}<\cdots<a_{2018} \text {. }
$$

For $i=1,2, \cdots, 2018, b_{i}$ is the number of positive integers in $a_{1}, a_{2}, \cdots, a_{2018}$ that do not exceed $i$. Then
$$
\frac{\sum_{k=1}^{2018} a_{k}+\sum_{k=1}^{a_{2018}} b_{k}}{a_{2018}+1}=
$$
$ $
