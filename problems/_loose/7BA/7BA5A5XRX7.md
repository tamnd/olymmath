---
tag: 7BA5A5XRX7
kind: problem
type: answer
answer: f(x) = -\sqrt{1 - x^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that a function $f(x)$ defined in $-1<x<1$ satisfies the following properties (i) , (ii), (iii).

(i) $f'(x)$ is continuous.

(ii) When $-1<x<0,\ f'(x)<0,\ f'(0)=0$, when $0<x<1,\ f'(x)>0$.

(iii) $f(0)=-1$

Let $F(x)=\int_0^x \sqrt{1+\{f'(t)\}^2}dt\ (-1<x<1)$. If $F(\sin \theta)=c\theta\ (c :\text{constant})$ holds for $-\frac{\pi}{2}<\theta <\frac{\pi}{2}$, then find $f(x)$.

*1975 Waseda University entrance exam/Science and Technology*
