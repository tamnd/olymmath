---
tag: A5FEJDPT4T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a$, $ b$, $ c$ and $ n$ be positive integers such that $ a^n$ is divisible by $ b$, such that $ b^n$ is divisible by $ c$, and such that $ c^n$ is divisible by $ a$.
Prove that $ \left(a + b + c\right)^{n^2 + n + 1}$ is divisible by $ abc$.

An even broader *generalization*, though not part of the QEDMO problem and not quite number theory either:
If $ u$ and $ n$ are positive integers, and $ a_1$, $ a_2$, ..., $ a_u$ are integers such that $ a_i^n$ is divisible by $ a_{i + 1}$ for every $ i$ such that $ 1\leq i\leq u$ (we set $ a_{u + 1} = a_1$ here), then show that $ \left(a_1 + a_2 + ... + a_u\right)^{n^{u - 1} + n^{u - 2} + ... + n + 1}$ is divisible by $ a_1a_2...a_u$.
