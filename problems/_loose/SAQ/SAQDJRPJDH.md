---
tag: SAQDJRPJDH
kind: problem
type: answer
answer: a_{n}=n!+2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130988
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ satisfy:
$$
a_{0}=2, a_{1}=3, a_{2}=6 \text {, }
$$

and for $n \geqslant 3$, we have
$$
a_{n}=(n+4) a_{n-1}-4 n a_{n-2}+(4 n-8) a_{n-3} \text {. }
$$

Find the general term of $\left\{a_{n}\right\}$.
