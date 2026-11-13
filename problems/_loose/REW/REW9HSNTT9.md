---
tag: REW9HSNTT9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p_1, p_2, \dots, p_{2009} \in \mathbb{R}^+$. Prove the inequality
$$
\sum_{i=1}^{2009} \frac{p_i}{p_{i+1} + p_{i+2} + \dots + p_{i+1004}} \ge \frac{2009}{1004},
$$
where the indexes are taken mod $2009$.
