---
tag: A4B56HRAHJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h486114
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2006
    source: hf-ai-mo-aops
    label: 2006 India IMO Training Camp
---
Let $u_{jk}$ be a real number for each $j=1,2,3$ and each $k=1,2$ and let $N$ be an integer such that
$$\max_{1\le k \le 2} \sum_{j=1}^3 |u_{jk}| \leq N$$
Let $M$ and $l$ be positive integers such that $l^2 <(M+1)^3$ . Prove that there exist integers $\xi_1,\xi_2,\xi_3$ not all zero, such that
$$\max_{1\le j \le 3}\xi_j \le M\ \ \ \ \text{and} \ \ \ \left|\sum_{j=1}^3 u_{jk}\xi_k\right| \le \frac{MN}{l} \ \ \ \ \text{for k=1,2}$$
