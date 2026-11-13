---
tag: EFP70ZFPP1
kind: problem
type: answer
answer: \frac{+\sqrt{3}}{1-\sqrt{3}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence of real numbers $\left\{a_{n}\right\}$ satisfies $a_{n}=a, a$ is a real number. $a_{n}=\frac{\sqrt{3} a_{n-1}+1}{\sqrt{3}-a_{n}}(n \in \mathbf{N})$, find the value of $a_{20 n}$.
