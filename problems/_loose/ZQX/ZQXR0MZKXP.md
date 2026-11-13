---
tag: ZQXR0MZKXP
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is the sequence of numbers $a_{0}, a_{1}, a_{2}, \ldots, a_{2020}$. It is given that $a_{0}=0$. Moreover, for every $k=1,2, \ldots, 2020$ it holds that

$$
a_{k}= \begin{cases}a_{k-1} \cdot k & \text { if } k \text { is divisible by } 8, \\ a_{k-1}+k & \text { if } k \text { is not divisible by } 8 .\end{cases}
$$

What are the last two digits of $a_{2020}$?
