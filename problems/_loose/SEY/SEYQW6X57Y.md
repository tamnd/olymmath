---
tag: SEYQW6X57Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3330137
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1764
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2024
    source: hf-ai-mo-aops
    label: 2024 India IMOTC
---
Let $x_1, x_2 \dots, x_{2024}$ be non-negative real numbers such that $x_1 \le x_2\cdots \le x_{2024}$ , and $x_1^3 + x_2^3 + \dots + x_{2024}^3 = 2024$ . Prove that

$$\sum_{1 \le i < j \le 2024} (-1)^{i+j} x_i^2 x_j \ge -1012.$$

*Proposed by Shantanu Nene*
