---
tag: V790W5YDBJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=4
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be a set of positive integers and let $k$ be a positive integer. Set $A$ is said to be $k$-thin if there are $k$ positive integers $n_1, \dots, n_k$ so that for all $1 \le i < j \le k$ and all $a, a' \in A$, $n_i + a \ne n_j + a'$. Suppose that $A_r$ is a $k_r$-thin set for $1 \le r \le m$ and that $\cup_{r=1}^m A_r$ is the set of all positive integers. Show that
$$
\frac{1}{k_1} + \dots + \frac{1}{k_m} \ge 1.
$$
