---
tag: 8B35KPG7CX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144631
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an acute triangle $\triangle ABC$ with sides satisfying $BC > CA > AB$, its incircle $\odot I$ touches sides $BC, CA, AB$ at points $A_0, B_0, C_0$. Let the orthocenter of $\triangle ABC$ be $H$, and the midpoints of $HA, HB, HC$ be $A_1, B_1, C_1$. The points $A_1, B_1, C_1$ are reflected over $B_0C_0, C_0A_0, A_0B_0$ to points $A_2, B_2, C_2$.
Prove: $A_2, B_2, C_2$ are collinear, and
$$
\frac{A_2B_2}{B_2C_2} = \frac{\tan \frac{\angle BAC}{2} - \tan \frac{\angle ABC}{2}}{\tan \frac{\angle ABC}{2} - \tan \frac{\angle ACB}{2}}
$$
