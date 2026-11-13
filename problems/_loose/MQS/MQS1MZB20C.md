---
tag: MQS1MZB20C
kind: problem
type: answer
answer: 12\pi
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest positive period of the function $f(x)=\sin x \sin \frac{1}{2} x \sin \frac{1}{3} x$.
 of $f(x)$. To find the smallest positive period $T(0<T<12 \pi)$ of $f(x)$, from $f(x+T)=f(x)$, we get
$$
\sin (x+T) \sin \frac{1}{2}(x+T) \sin \frac{1}{3}(x+T)=\sin x \sin \frac{1}{2} x \sin \frac{1}{3} x .
$$

In the interval $(0, \pi)$, $\sin x \neq 0, \sin \frac{1}{2} x \neq 0, \sin \frac{1}{3} x \neq 0$,
In (1), let $x \rightarrow 0$, we get $\sin T \sin \frac{1}{2} T \sin \frac{1}{3} T=0$,
