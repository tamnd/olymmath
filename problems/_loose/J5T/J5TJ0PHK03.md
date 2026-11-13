---
tag: J5TJ0PHK03
kind: problem
type: answer
answer: 'Two solutions: (1) lambda = 0 with a = b = c = 1; (2) lambda = 1/4 with a = 2, b = 1, c = 1/2.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
For what real numbers $\lambda$ are there positive numbers $a$, $b$, and $c$ such that
$$
a + \frac{1}{a} = 2(1 + \lambda),
$$
$$
c + \frac{1}{c} = 2(1 + \lambda),
$$
$$
b + \frac{1}{a} = 2(1 - \lambda),
$$
$$
c + \frac{1}{b} = 2(1 - \lambda)?
$$
For those values of $\lambda$, determine the corresponding values of $a$, $b$ and $c$.
