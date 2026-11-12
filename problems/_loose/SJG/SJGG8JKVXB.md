---
tag: SJGG8JKVXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3534651
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 China Team Selection Test
---
Let $ X $ be a finite set of real numbers, $ d $ be a real number, and $\lambda_1, \lambda_2, \cdots, \lambda_{2025}$ be 2025 non-zero real numbers. Define
$$A =
\left\{
(x_1, x_2, \cdots, x_{2025}) : x_1, x_2, \cdots, x_{2025} \in X \text{ and } \sum_{i=1}^{2025} \lambda_i x_i = d
\right\},$$
$$B =
\left\{
(x_1, x_2, \cdots, x_{2024}) : x_1, x_2, \cdots, x_{2024} \in X \text{ and } \sum_{i=1}^{2024} (-1)^i x_i = 0
\right\},$$
$$C =
\left\{
(x_1, x_2, \cdots, x_{2026}) : x_1, x_2, \cdots, x_{2026} \in X \text{ and } \sum_{i=1}^{2026} (-1)^i x_i = 0
\right\}.$$
Show that $ |A|^2 \leq |B| \cdot |C| $.
