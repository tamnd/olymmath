---
tag: 3N24RNEG6Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\begin{array}{l}
\text { 3. Let } f(x)=\frac{x}{x+1} \text {, and let } \\
a_{1}=\frac{1}{2}, a_{2}=\frac{3}{4}, \\
a_{n+2}=f\left(a_{n}\right)+f\left(a_{n+1}\right)(n=1,2, \cdots) .
\end{array}
$$

Prove: For any positive integer $n$, we have
$$
f\left(3 \times 2^{n-1}\right) \leqslant a_{2 n} \leqslant f\left(3 \times 2^{2 n-2}\right) \text {. }
$$
