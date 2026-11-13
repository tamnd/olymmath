---
tag: ENHTA1VR38
kind: problem
type: answer
answer: Equality holds if and only if n = 3 and a = b = c.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbb{N}^*$. Prove that
$$
\frac{a}{(n+1)a+b+c} + \frac{b}{a+(n+1)b+c} + \frac{c}{a+b+(n+1)c} \le \frac{1}{2}\sqrt{\frac{3}{n}},
$$
for every $a, b, c \in (0, \infty)$. Find the cases of equality.
