---
tag: B9AD2P3GDP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n,p \geq 2$ be two integers and $A$ an $n\times n$ matrix with real elements such that $A^{p+1} = A$.

a) Prove that $\textrm{rank} \left( A \right) + \textrm{rank} \left( I_n - A^p \right) = n$.

b) Prove that if $p$ is prime then $$ \textrm{rank} \left( I_n - A \right) = \textrm{rank} \left( I_n - A^2 \right) = \ldots = \textrm{rank} \left( I_n - A^{p-1} \right) . $$
