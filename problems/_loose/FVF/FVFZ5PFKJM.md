---
tag: FVFZ5PFKJM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121982
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
X=a+b+c+2 \sqrt{a^{2}+b^{2}+c^{2}-a b-b c-c a},
$$

Prove: $X \geqslant \max \{3 a, 3 b, 3 c\}$, and one of $\sqrt{X-3 a}, \sqrt{X-3 b}, \sqrt{X-3 c}$ equals the sum of the other two.
