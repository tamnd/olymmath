---
tag: ZGE679ZAHC
kind: problem
type: answer
answer: u(x,)=\frac{3}{4}e^{-4\pi^{2}}\sin2\pix-\frac{1}{4}e^{-36\pi^{2}}\sin6\pix
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the first mixed problem for the heat equation on the interval:

$$
\begin{aligned}
& u_{t}=u_{x x}, x \in(0,1), t \in(0, \infty) \\
& u(x, 0)=\sin ^{3} 2 \pi x, x \in(0,1) \\
& u(0, t)=u(1, t)=0, t \in(0, \infty)
\end{aligned}
$$
