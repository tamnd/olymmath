---
tag: 1M6XZMEP8C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\{a_i\}_{i=1}^\infty$ is such that $a_1 > 0$ and $a_{n+1} = \frac{a_n}{1+a_n^2}$ for $n \ge 1$. Prove that:

a) $a_n \le \frac{1}{\sqrt{2n}}$ for $n \ge 2$;

b) there exists $n$ such that $a_n > \frac{7}{10\sqrt{n}}$.
