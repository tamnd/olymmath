---
tag: 31WGT9YAXG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have $10$ intervals of numbers $I_1 = [a_1, b_1], I_2 = [a_2, b_2], \dots, I_{10} = [a_{10}, b_{10}]$ such that $I_1 \cup I_2 \cup \dots \cup I_{10} = [0, 1]$. Prove that there is a $k \le 10$ such that we can choose $k$ intervals $I_{n_1}, I_{n_2}, \dots, I_{n_k}$ among $I_1, I_2, \dots, I_{10}$ for which no two different intervals $I_{n_i}$ and $I_{n_j}$ intersect and $(b_{n_1} - a_{n_1}) + (b_{n_2} - a_{n_2}) + \dots + (b_{n_k} - a_{n_k}) \ge \frac{1}{2}$.
