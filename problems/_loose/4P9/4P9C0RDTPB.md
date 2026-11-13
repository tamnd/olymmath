---
tag: 4P9C0RDTPB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259913
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be positive numbers. Find the largest number $c$, in terms of $a$ and $b$, such that for all $x$ with $0<|x|\le c$ and for all $\alpha$ with $0<\alpha<1$, we have:
$$a^\alpha b^{1-\alpha}\le\frac{a\sinh\alpha x}{\sinh x}+\frac{b\sinh x(1-\alpha)}{\sinh x}.$$
