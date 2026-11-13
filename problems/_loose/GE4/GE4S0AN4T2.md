---
tag: GE4S0AN4T2
kind: problem
type: answer
answer: \frac{b-}{\lnb-\ln}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179969
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the real numbers $a, b>0$. We define the sequences $\left(a_{n}\right)_{n \in \mathbb{N}^{*}}$ and $\left(b_{n}\right)_{n \in \mathbb{N}^{*}}$ by the relations:

$$
a_{0}=a, b_{0}=b, a_{n+1}=\frac{a_{n}+\sqrt{a_{n} b_{n}}}{2}, b_{n+1}=\frac{b_{n}+\sqrt{a_{n} b_{n}}}{2}, \forall n \in \mathbb{N}^{*}
$$

a) Prove that the sequences are convergent and have the same limit;

b) Calculate the limit of the two sequences.
