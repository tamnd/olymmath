---
tag: ETAMGPW04A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 37th Iranian Mathematical Olympiad
---
Let $a$, $m$ be positive integers such that $\text{ord}_m(a)$ is odd and for any integers $x$, $y$ such that:
a) $xy \equiv a \pmod{m}$.
b) $\text{ord}_m(x) \le \text{ord}_m(a)$.
c) $\text{ord}_m(y) \le \text{ord}_m(a)$.
We have either $\text{ord}_m(x) \mid \text{ord}_m(a)$ or $\text{ord}_m(y) \mid \text{ord}_m(a)$. Prove that $\text{ord}_m(a)$ has at most one prime divisor.
