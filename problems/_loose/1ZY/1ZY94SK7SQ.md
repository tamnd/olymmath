---
tag: 1ZY94SK7SQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87694
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for every natural number $n$ greater than 1, the following holds:

$$
\operatorname{tg} x \cdot \operatorname{tg} 2 x+\operatorname{tg} 2 x \cdot \operatorname{tg} 3 x+\ldots+\operatorname{tg}(n x-x) \cdot \operatorname{tg} n x=\frac{\operatorname{tg} n x}{\operatorname{tg} x}-n
$$

for all $x$ for which all addends are defined and $\operatorname{tg} x \neq 0$.
