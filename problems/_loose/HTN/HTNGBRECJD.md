---
tag: HTNGBRECJD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97659
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the integer $n \geqslant 2$. Find the maximum real number $\lambda(n)$ such that for any $\theta_{i} \in\left(0, \frac{\pi}{2}\right)(i=$ $1,2, \cdots, n)$, we have
$$
\begin{array}{l}
\left(\sum_{i=1}^{n} \tan \theta_{i}\right)\left(\sum_{i=1}^{n} \cot \theta_{i}\right) \\
\geqslant\left(\sum_{i=1}^{n} \sin \theta_{i}\right)^{2}+\left(\sum_{i=1}^{n} \cos \theta_{i}\right)^{2}+\lambda(n)\left(\theta_{1}-\theta_{n}\right)^{2}
\end{array}
$$
