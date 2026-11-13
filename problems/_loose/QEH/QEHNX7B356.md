---
tag: QEHNX7B356
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135779
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n}, b_{1}, b_{2}, \cdots, b_{n} > 0$. Prove:
$$
\begin{array}{l}
\left(\sum_{i=1}^{n} a_{i} b_{i}\right)^{2} \leqslant\left(\sum_{i=1}^{n} f\left(a_{i}, b_{i}\right)\right)\left(\sum_{i=1}^{n} g\left(a_{i}, b_{i}\right)\right) \\
\leqslant\left(\sum_{i=1}^{n} a_{i}^{2}\right)\left(\sum_{i=1}^{n} b_{i}^{2}\right)
\end{array}
$$

The necessary and sufficient condition for the above inequality to hold for all positive integers $n$ is
$$
\left\{\begin{array}{l}
f(a, b) g(a, b)=a^{2} b^{2}, \\
f(k a, k b)=k^{2} f(a, b)(k>0), \\
\frac{b f(a, 1)}{a f(b, 1)}+\frac{a f(b, 1)}{b f(a, 1)} \leqslant \frac{a}{b}+\frac{b}{a} .
\end{array}\right.
$$
