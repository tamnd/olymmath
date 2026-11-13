---
tag: C2TFXHKJ1V
kind: problem
type: answer
answer: "4.583"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting from positive numbers $a_{0}, b_{0}$, form the sequences $a_{0}, a_{1}, \ldots, a_{n}, \ldots$ and $b_{0}, b_{1}, \ldots, b_{n}, \ldots$ such that if the elements $a_{n}, b_{n}$ are already determined, then

$$
a_{n+1}=\frac{2}{\frac{1}{a_{n}}+\frac{1}{b_{n}}}, b_{n+1}=\frac{a_{n}+b_{n}}{2}
$$

Prove that the common limit of the two sequences is the geometric mean of $a_{0}$ and $b_{0}$. Use this to determine the value of $\sqrt{21}$ to three decimal places.
