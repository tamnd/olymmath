---
tag: 4WQN6ZFNJN
kind: problem
type: answer
answer: -(9!)^2 + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_0, a_1,\dots, a_{19} \in \mathbb{R}$ and $$P(x) = x^{20} + \sum_{i=0}^{19}a_ix^i, x \in \mathbb{R}.$$ If $P(x)=P(-x)$ for all $x \in \mathbb{R}$, and $$P(k)=k^2,$$ for $k=0, 1, 2, \dots, 9$ then find $$\lim_{x\rightarrow 0} \frac{P(x)}{\sin^2x}.$$
