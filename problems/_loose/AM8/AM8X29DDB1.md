---
tag: AM8X29DDB1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c, d$ be positive numbers, and $(a+b)(b+c)(c+d)(d+a)=1$.

Prove: $(2a+b+c)(2b+c+d)(2c+d+a)(2d+a+b)(abcd)^2 \leqslant \frac{1}{16}$.
