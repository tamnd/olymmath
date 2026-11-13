---
tag: P5KVH157YT
kind: problem
type: answer
answer: "2021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=27
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Round 3
---
Find the smallest positive integer $n$ with the following property:
For any sequence $a_1, a_2, \dots, a_{2021}$ of real numbers satisfying
$$
0 < a_1, a_2, \dots, a_{2021} < 2 \text{and} a_1 + a_2 + \dots + a_{2021} = 2021,
$$
there is a sequence $b_1, b_2, \dots, b_n$ of real numbers satisfying
$$
0 < b_1, b_2, \dots, b_n < 2 \text{and} b_1 + b_2 + \dots + b_n = n
$$
and a permutation $c_1, c_2, \dots, c_{n+2021}$ of the sequence $a_1, a_2, \dots, a_{2021}, b_1, b_2, \dots, b_n$ such that
$$
\begin{cases} c_1 + c_2 + \dots + c_l \le l, & \text{for all } 1 \le l \le n + 2021 \text{ odd} \\ c_1 + c_2 + \dots + c_l \ge l, & \text{for all } 1 \le l \le n + 2021 \text{ even}. \end{cases}
$$
