---
tag: ZV9QV4S1FG
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$a_0, a_1, \ldots, a_{100}$ and $b_1, b_2,\ldots, b_{100}$ are sequences of real numbers, for which the property holds: for all $n=0, 1, \ldots, 99$, either
$$a_{n+1}=\frac{a_n}{2} \text{and} b_{n+1}=\frac{1}{2}-a_n,$$
or
$$a_{n+1}=2a_n^2 \text{and} b_{n+1}=a_n.$$
Given $a_{100}\leq a_0$, what is the maximal value of $b_1+b_2+\cdots+b_{100}$?
