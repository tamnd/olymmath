---
tag: TY27T7FBMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3580186
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2706
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Iran Team Selection Test
---
Suppose $ n \in \mathbb{N} $ is a natural number. A function $ f(x, y) $ is called \textit{$ n $-friendly} if for fewer than 1\% of the integers $ k $ with $ -n \leq k \leq n $, the equation $ f(x, y) = k $ has a solution in natural numbers $ (x, y) $ such that $ \frac{y_0}{x_0} \in \left[\frac{1}{100}, 100\right] $, where $ (x_0, y_0) $ is a solution. Suppose $ f(x, y) \leq g(x, y) $, where $ g(x, y) $ is a polynomial with real coefficients, negative leading coefficients, and total degree greater than 2, and for every real number $ x $, we have $ g(x, y) \to \infty $ as $ \frac{y}{x} \in \left[\frac{1}{100}, 100\right] $. Prove that for sufficiently large $ n $, the function $ f $ is not $ n $-friendly.

*Proposed by Navid Safaei*
