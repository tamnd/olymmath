---
tag: 6JJKANSMR9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ p_i $ denote the $ i $-th prime number. Let $ n = \lfloor\alpha^{2015}\rfloor $, where $ \alpha $ is a positive real number such that $ 2 < \alpha < 2.7 $. Prove that $$ \sum_{2 \le p_i \le p_j \le n}\frac{1}{p_ip_j} < 2017 $$
