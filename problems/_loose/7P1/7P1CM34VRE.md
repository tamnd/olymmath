---
tag: 7P1CM34VRE
kind: problem
type: answer
answer: \frac{1}{n+1} \int_0^a f(t)^{2n+1} \, dt \leq \left( \int_0^a f(t)^n \, dt \right)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,\infty)\to\mathbb{R}$ be a differentiable function, with a continous derivative. Given that $f(0)=0$ and $0\leqslant f'(x)\leqslant 1$ for every $x>0$ prove that$$\frac{1}{n+1}\int_0^af(t)^{2n+1}\mathrm{d}t\leqslant\left(\int_0^af(t)^n\mathrm{d}t\right)^2,$$for any positive integer $n{}$ and real number $a>0.$
