---
tag: PK3QMC2J88
kind: problem
type: answer
answer: a_{25} + b_{25} \geq 10\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241399
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive numbers $a_1$ and $b_1$, consider the sequences defined by
$$a_{n+1}=a_n+\frac{1}{b_n}, b_{n+1}=b_n+\frac{1}{a_n} (n \ge 1)$$
Prove that $a_{25}+b_{25} \geq 10\sqrt{2}$.
