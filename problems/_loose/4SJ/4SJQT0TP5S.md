---
tag: 4SJQT0TP5S
kind: problem
type: answer
answer: \frac{-1}{999!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90767
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{1000}$ be real numbers such that

$$
\begin{array}{r}
a_{1} \cdot 1+a_{2} \cdot 2+a_{3} \cdot 3+\cdots+a_{1000} \cdot 1000=0 \\
a_{1} \cdot 1^{2}+a_{2} \cdot 2^{2}+a_{3} \cdot 3^{2}+\cdots+a_{1000} \cdot 1000^{2}=0 \\
a_{1} \cdot 1^{3}+a_{2} \cdot 2^{3}+a_{3} \cdot 3^{3}+\cdots+a_{1000} \cdot 1000^{3}=0 \\
\vdots \\
a_{1} \cdot 1^{999}+a_{2} \cdot 2^{999}+a_{3} \cdot 3^{999}+\cdots+a_{1000} \cdot 1000^{999}=0 \\
a_{1} \cdot 1^{1000}+a_{2} \cdot 2^{1000}+a_{3} \cdot 3^{1000}+\cdots+a_{1000} \cdot 1000^{1000}=1 .
\end{array}
$$

What is the value of $a_{1}$ ?
