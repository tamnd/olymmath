---
tag: KCME7AK2A1
kind: problem
type: answer
answer: \frac{1}{3} + \frac{2 \pi \sqrt{3}}{27}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231827
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_n = \frac{1}{\binom{2n}{n}}, \forall n \leq 1$.

a) Show that $\sum\limits_{n=1}^{+\infty}a_nx^n$ converges for all $x \in (-4, 4)$ and that the function $f(x) = \sum\limits_{n=1}^{+\infty}a_nx^n$ satisfies the differential equation $x(x - 4)f'(x) + (x + 2)f(x) = -x$.

b) Prove that $\sum\limits_{n=1}^{+\infty}\frac{1}{\binom{2n}{n}} = \frac{1}{3} + \frac{2\pi\sqrt{3}}{27}$.
