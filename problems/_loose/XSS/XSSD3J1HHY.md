---
tag: XSSD3J1HHY
kind: problem
type: answer
answer: \pik\leqx\leq\frac{\pi}{4}+\pik,k\inZ
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Transform the right side of the equation

$2 \sin x(\sin x-\cos x)=2 \sin ^{2} x-\sin 2 x=1-\cos 2 x-\sin 2 x$.

Let $t=\sin 2 x+\cos 2 x-1$, then the original inequality can be rewritten as

$$
\sin t \geq -t
$$

The solutions to this inequality are $t: t \geq 0$. As a result, we arrive at the inequality

$$
\sin 2 x+\cos 2 x \geq 1
$$

Divide both sides of the obtained inequality by $\sqrt{2}$

$$
\frac{1}{\sqrt{2}} \cdot \sin 2 x+\frac{1}{\sqrt{2}} \cdot \cos 2 x \geq \frac{1}{\sqrt{2}}
$$

and rewrite it as

$$
\cos \left(2 x-\frac{\pi}{4}\right) \geq \frac{1}{\sqrt{2}}
$$

Its solutions are $-\frac{\pi}{4}+2 \pi k \leq 2 x-\frac{\pi}{4} \leq \frac{\pi}{4}+2 \pi k, k \in Z$, from which we find $\pi k \leq x \leq \frac{\pi}{4}+\pi k, k \in Z$
