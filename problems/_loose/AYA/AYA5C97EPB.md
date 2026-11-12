---
tag: AYA5C97EPB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h3451730
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/2025
    source: hf-ai-mo-aops
    label: 2025 China National Olympiad
---
Let $a_1, a_2, \ldots, a_n$ be integers such that $a_1 > a_2 > \cdots > a_n > 1$. Let $M = \operatorname{lcm} \left( a_1, a_2, \ldots, a_n \right)$. For any finite nonempty set $X$ of positive integers, define $$ f(X) = \min_{1 \leqslant i \leqslant n} \sum_{x \in X} \left\{ \frac{x}{a_i} \right\}. $$ Such a set $X$ is called *minimal* if for every proper subset $Y$ of it, $f(Y) < f(X)$ always holds.

Suppose $X$ is minimal and $f(X) \geqslant \frac{2}{a_n}$ . Prove that $$ |X| \leqslant f(X) \cdot M. $$
