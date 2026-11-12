---
tag: VPCFP8JWFR
kind: problem
type: answer
answer: "28"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the sum of all integers $ x \in [-3 ; 13] $ that satisfy the inequality

$$
\left(1-\operatorname{ctg}^{2} \frac{\pi x}{12}\right)\left(1-3 \operatorname{ctg}^{2} \frac{\pi x}{12}\right)\left(1-\operatorname{tg} \frac{\pi x}{6} \cdot \operatorname{ctg} \frac{\pi x}{4}\right) \leqslant 16
$$
