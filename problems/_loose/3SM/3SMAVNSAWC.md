---
tag: 3SMAVNSAWC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 38th Iranian Mathematical Olympiad
---
Let $a_1, \dots, a_n; b_1, \dots, b_n; c_1, \dots, c_n$ be real numbers. Prove that
$$
\sqrt{\sum_{i=1}^{n} (3a_i - b_i - c_i)^2} + \sqrt{\sum_{i=1}^{n} (3b_i - a_i - c_i)^2} + \sqrt{\sum_{i=1}^{n} (3c_i - a_i - b_i)^2} \\
\geq \sqrt{\sum_{i=1}^{n} a_i^2} + \sqrt{\sum_{i=1}^{n} b_i^2} + \sqrt{\sum_{i=1}^{n} c_i^2}. (\to \text{p.21})
$$
