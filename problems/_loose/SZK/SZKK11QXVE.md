---
tag: SZKK11QXVE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia National Olympiad Final Round
---
Call a tuple $(a_1, \dots, a_n)$ of real numbers *stable* if the sums $a_1 + a_2 + \dots + a_k$, as well as the sums $a_k + a_{k+1} + \dots + a_n$, where in both cases $0 < k \le n$, are either all negative or all non-negative.
For instance, the tuple $(3, -1, 2)$ is stable, since:
$$
\begin{array}{lclcl}
3 & \ge & 0, & 2 & \ge 0, \\
3 + (-1) & \ge & 0, & (-1) + 2 & \ge 0, \\
3 + (-1) + 2 & \ge & 0; & 3 + (-1) + 2 & \ge 0.
\end{array}
$$
Prove that in any stable tuple with at least 3 terms where all terms are alternately negative and non-negative (it is unknown whether the first term is negative or non-negative), there exist 3 consecutive terms that together (without reordering) form a stable tuple on their own.
