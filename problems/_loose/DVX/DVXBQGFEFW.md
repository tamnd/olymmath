---
tag: DVXBQGFEFW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h3107628
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=762
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2023
    source: hf-ai-mo-aops
    label: 2023 India IMO Training Camp
---
Let $\mathbb{Z}_{\ge 0}$ be the set of non-negative integers and $\mathbb{R}^+$ be the set of positive real numbers. Let $f: \mathbb{Z}_{\ge 0}^2 \rightarrow \mathbb{R}^+$ be a function such that $f(0, k) = 2^k$ and $f(k, 0) = 1$ for all integers $k \ge 0$ , and $$ f(m, n) = \frac{2f(m-1, n) \cdot f(m, n-1)}{f(m-1, n)+f(m, n-1)} $$ for all integers $m, n \ge 1$ . Prove that $f(99, 99)<1.99$ .

*Proposed by Navilarekallu Tejaswi*
