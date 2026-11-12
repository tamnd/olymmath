---
tag: NBAJ6HWNGR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3643928
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2025
    source: hf-ai-mo-aops
    label: 2025 Iran MO (3rd Round)
---
Let $x_0,x_1 \in (0,1)$ be real numbers and define the sequence $\{x_k\}_{k\geq 0}$ such that

$$
x_{n} = x_{n-1}(1 - x_{n-2})(x_{n-1} + x_{n-2}) \forall n \geq 2.
$$

Prove that $$ |x_{2025}-x_{2024}| < \dfrac{|x_{1404}-x_{1403}|}{2^{1000}}. $$
