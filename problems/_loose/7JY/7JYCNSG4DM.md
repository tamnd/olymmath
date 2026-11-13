---
tag: 7JYCNSG4DM
kind: problem
type: answer
answer: \frac{6}{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233519
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $\{a_n\}_{n\geq0}$ obeys the recurrence $a_n=1+a_{n-1}+\alpha a_{n-2}$ for all $n\geq2$ and for some $\alpha>0$. Given that $a_0=1$ and $a_1=2$, compute the value of $\alpha$ for which
$$\sum_{n=0}^{\infty}\frac{a_n}{2^n}=10$$
