---
tag: DAR2F8EW0B
kind: problem
type: answer
answer: \frac{k^{2}}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a_{1}, a_{2}, \cdots, a_{n}$ is a set of real numbers, and $a_{1}+a_{2}+\cdots+a_{n}=k$. Find the minimum value of $a_{1}^{2}+a_{2}^{2}+\cdots+a_{n}^{2}$.
 on $(-\infty,+\infty)$, so $\frac{1}{n}\left[f\left(a_{1}\right)+\cdots+f\left(a_{n}\right)\right] \geqslant f\left(\frac{a_{1}+\cdots+a_{n}}{n}\right)$. Therefore, $a_{1}^{2}+a_{2}^{2}+\cdots+a_{n}^{2} \geqslant n \cdot\left(\frac{k}{n}\right)^{2}=\frac{k^{2}}{n}$.
