---
tag: N6FBVX7AMH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x, y, z$ be complex numbers so that $x \neq z$ and $\frac{x-y}{x-z} \notin \mathbb{R}$. Prove that
$$ \min(|2x - y - z|, |2y - x - z|, |2z - x - y|) \le \frac{1}{\sqrt{3}}(|x - y| + |y - z| + |z - x|). $$
