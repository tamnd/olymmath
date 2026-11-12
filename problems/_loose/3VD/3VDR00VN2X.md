---
tag: 3VDR00VN2X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2026 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h3723630
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35629
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/2026
    source: hf-ai-mo-aops
    label: 2026 China National Olympiad
---
Determine all real numbers $\lambda$ , such that there exists $N>0$ satisfying the following property:

For any integer $n\geq N$ and $n$ non-negative reals $x_1,\cdots,x_n$ with sum $1$ , the following inequality holds: $$ \left(\sum_{1\leq i<j\leq n}x_ix_j\right)^2\leq\lambda\sum_{1\leq i<j<k\leq n}x_ix_jx_k+\frac{1}{n}\sum_{1\leq i<j\leq n}(x_i-x_j)^2. $$
