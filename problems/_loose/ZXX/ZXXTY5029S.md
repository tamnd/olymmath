---
tag: ZXXTY5029S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178815
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a>1$ and $f:\left[\frac{1}{a}, a\right] \rightarrow \mathbb{R}$ be a function with the property that: $f(x)+f\left(\frac{1}{x}\right)=k, \forall x \in\left[\frac{1}{a}, a\right]$. Calculate:
a) $\int_{\frac{1}{a}}^{a} \frac{(x+1) \cdot f(x)}{x \cdot \sqrt{x^{2}+1}} \mathrm{~d} x$;
b) $\int_{\frac{1}{2}}^{2} \frac{(x+1) \cdot \operatorname{arctg} x}{x \cdot \sqrt{x^{2}+1}} \mathrm{~d} x$;

c) Let $a \in\left(0, \frac{\pi}{2}\right)$ and $n \in \mathbb{N}, n \geq 2$. Determine $\lim _{n \rightarrow \infty} \int_{0}^{a} \sqrt[n]{\operatorname{tg} x} d x$.
