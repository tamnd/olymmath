---
tag: B5R2X9QETW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $b_k \geq a_k \geq 0$ $(k = 1, 2, 3)$ and $\alpha \geq 1$ then$$(\alpha+3)\sum \limits_{cyc}(b_1-a_1)\left((b_2+b_3)^{\alpha+2}+(a_2+a_3)^{\alpha+2}-(a_2+b_3)^{\alpha+1}-(b_2+a_3)^{\alpha+1}\right)$$ $$\leq (\alpha+2)(\alpha+3)\sum \limits_{cyc}(b_1-a_1)(b_2-a_2)(b_3^{\alpha+1}-a_3^{\alpha+1})$$ $$+ (b_3 + b_2 + a_1)^{\alpha+3}+(b_3 + a_2 + a_1)^{\alpha+3}+(a_3 + b_2 + a_1)^{\alpha+3}+(a_3 + a_2 + b_1)^{\alpha+3}$$ $$-(b_3 + b_2 + b_1)^{\alpha+3}-(b_3 + a_2 + a_1)^{\alpha+3}-(a_3 + b_2 + b_1)^{\alpha+3}-(a_3 + a_2 + a_1)^{\alpha+3}$$
