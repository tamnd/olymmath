---
tag: W0GCCQ4D6A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=255224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_1A_2... A_{2n + 1}$ be a convex polygon, $a_1 = A_1A_2$, $a_2 = A_2A_3$, $...$, $a_{2n} = A_{2n}A_{2n + 1}$, $a_{2n + 1} = A_{2n + 1}A_1$. Denote by: $\alpha_i = \angle A_i$, $1 \le i \le 2n + 1$, $\alpha_{k + 2n + 1} = \alpha_k$, $k \ge 1$, $ \beta_i = \alpha_{i + 2} + \alpha_{i + 4} +... + \alpha_{i + 2n}$, $1 \le i \le 2n + 1$. Prove what if
$$\frac{\alpha_1}{\sin \beta_1}=\frac{\alpha_2}{\sin \beta_2}=...=\frac{\alpha_{2n+1}}{\sin \beta_{2n+1}}$$
then a circle can be circumscribed around this polygon.
Does the inverse statement hold a place?
