---
tag: 45RXBV7EEW
kind: problem
type: answer
answer: '{\begin{pmatrix}\frac{3\sqrt{6}}{4},\text{when}n=2\\\sqrt{n+1},\text{when}n\geq3\end{pmatrix}.}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geq 2$, it is known that $a_{1}, a_{2}, \ldots, a_{n}, b \geq 0$, and $b+\sum_{i=1}^{n} a_{i}=1$. Try to find the maximum possible value of $S=$ $\sqrt{b+\frac{\sum_{i=1}^{n}\left(a_{i}-a_{i+1}\right)^{2}}{2 n}}+\sum_{i=1}^{n} \sqrt{a_{i}}$, where $a_{n+1}=a_{1}$.
