---
tag: PQ9B49S0GT
kind: problem
type: answer
answer: \frac{2n-4}{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geqslant 2$. Find the largest real number $\lambda$ such that the inequality
$$
a_{n}^{2} \geqslant \lambda\left(a_{1}+a_{2}+\cdots+a_{n}\right)+2 a_{n}
$$

holds for any integers $a_{1}, a_{2}, \cdots, a_{n}$ satisfying $a_{1}<a_{2}<\cdots<a_{n}$. (Leng Gangsong)
