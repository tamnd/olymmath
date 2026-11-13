---
tag: QVGJK6K3VN
kind: problem
type: answer
answer: \frac{+2-\sqrt{^{2}-4}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a>2$ be given, and define a sequence $a_{0}, a_{1}, a_{2}, \ldots$ by

$$
a_{0}=1, a_{1}=a, a_{n+1}=\left(\frac{a_{n}^{2}}{a_{n-1}^{2}}-2\right) \cdot a_{n} .
$$

Show that for all integers $k \geq 0$, we have

$$
\sum_{i=0}^{k} \frac{1}{a_{i}}<\frac{a+2-\sqrt{a^{2}-4}}{2} .
$$
