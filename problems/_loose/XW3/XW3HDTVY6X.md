---
tag: XW3HDTVY6X
kind: problem
type: answer
answer: f()=\frac{1}{2\pii}\int_{C}\frac{e^{-iz}}{z}=\begin{cases}0&\text{for}<0\\1&\text{for}>0\end{cases}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31088
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the integral representation of the unit function (Heaviside function)

$$
f(t)=\left\{\begin{array}{lll}
0 & \text { for } t<0 \\
1 & \text { for } t>0
\end{array}\right.
$$
