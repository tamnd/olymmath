---
tag: ED2SE611MC
kind: problem
type: answer
answer: floor((n+3)/2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Given integer $n \ge 2$. Find the least positive integer $m$, such that there are $n^2$ distinct positive real numbers $x_{i,j}$ ($1 \le i, j \le n$) satisfying the following conditions:
(1) For every $i, j$,
$$
x_{i,j} = \max\{x_{i,1}, x_{i,2}, \dots, x_{i,j}\} \text{ or}
$$
$$
x_{i,j} = \max\{x_{1,j}, x_{2,j}, \dots, x_{i,j}\};
$$
(2) For every $i$, there are at most $m$ indices $k$, with
$$
x_{i,k} = \max\{x_{i,1}, x_{i,2}, \dots, x_{i,k}\};
$$
(3) For every $j$, there are at most $m$ indices $k$, with
$$
x_{k,j} = \max\{x_{1,j}, x_{2,j}, \dots, x_{k,j}\}.
$$
