---
tag: AMRW4W31D6
kind: problem
type: answer
answer: a_{n}=(n-1)n,\quad\sqrt{4a_{1}+1}+\sqrt{4a_{2}+1}+\cdots+\sqrt{4a_{n}+1}=n^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left(a_{n}\right)_{n \in N^{*}}$ be defined as follows: $a_{1}=0$ and $a_{n+1}=a_{n}+\sqrt{4 a_{n}+1}+1, n \geq 1$.

a) Determine $a_{n}$.

b) Show that $\sqrt{4 a_{1}+1}+\sqrt{4 a_{2}+1}+\cdots+\sqrt{4 a_{n}+1}=n^{2}, n \geq 1$.
