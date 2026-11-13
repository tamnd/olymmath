---
tag: NZ50HT4JXT
kind: problem
type: answer
answer: Equality holds when a = b = c = 1.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=55
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong HKG TST
---
Let $a$, $b$, $c$ be positive and $abc = 1$. Prove that
$$
\frac{1 + ab^2}{c^3} + \frac{1 + bc^2}{a^3} + \frac{1 + ca^2}{b^3} \geq \frac{18}{a^3 + b^3 + c^3}.
$$
Determine when equality is attained.
