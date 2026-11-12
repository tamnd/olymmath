---
tag: SMT2TCFX5W
kind: problem
type: answer
answer: f(x)=\frac{1}{3}\cosx
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $T$ is the period of the function $y=f(x)$. From the condition, we get:

$$
\cos x=f(x)-2 f(x-\pi)=f(x-T)-2 f(x-T-\pi)=\cos (x-T)
$$

Since this equality holds for all $x$, the number $T$ is the period of the function $y=\cos x$, i.e., $T=2 \pi n$, where $n$ is some natural number. From the given equation, we get:

$$
\begin{gathered}
f(x)=2 f(x-\pi)+\cos x=2(2 f(x-2 \pi)-\cos x)+\cos x= \\
=2(2(2 f(x-3 \pi)+\cos x)-\cos x)+\cos x= \\
=\ldots=2(2(\ldots(2 f(x-2 \pi n)-\cos x)+\ldots+\cos x)-\cos x)+\cos x= \\
=2^{2 n} f(x)-\cos x\left(2^{2 n-1}-2^{2 n-2}+2^{2 n-3}-\ldots+2-1\right)
\end{gathered}
$$

Then

$$
f(x)\left(1-2^{2 n}\right)=\cos x\left(1-2+2^{2}-\ldots-2^{2 n-1}\right)=\cos x \frac{1-2^{2 n}}{1+2}
$$

Therefore, $f(x)=\frac{1}{3} \cos x$.
