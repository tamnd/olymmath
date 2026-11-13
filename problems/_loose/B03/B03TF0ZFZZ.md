---
tag: B03TF0ZFZZ
kind: problem
type: answer
answer: 3 \leq n \leq 2015
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that $A$$=${$a_1,a_2,a_3\cdots a_n$} consisting $n>2$ distinct positive integers is $good$ if for every $i=1,2,3\cdots n$ the number ${a_i}^{2015}$ is divisible by the product of all numbers in $A$ except $a_i$. Find all integers $n>2$ such that exists a $good$ set consisting of $n$ positive integers.
