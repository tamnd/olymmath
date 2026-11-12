---
tag: EBTX4PRTGX
kind: problem
type: answer
answer: f(x)\sim\sum_{n=1}^{\infty}\frac{\sin(2n-1)x}{2n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Write the Fourier series for the function $f(x)$ defined by the equations

$$
\begin{gathered}
f(x)=\left\{\begin{array}{l}
-\frac{\pi}{4},-\pi<x<0 \\
0, x=0, x=-\pi \\
\frac{\pi}{4}, 0<x<\pi
\end{array}\right. \\
f(x)=f(x+2 \pi) .
\end{gathered}
$$
