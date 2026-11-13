---
tag: KK27EEHC2Y
kind: problem
type: answer
answer: f(0) \ln \frac{b}{a}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real numbers $b>a>0$, let $f : [0,\ \infty)\rightarrow \mathbb{R}$ be a continuous function.
Prove that :

(i) $\lim_{\epsilon\rightarrow +0} \int_{a\epsilon}^{b\epsilon} \frac{f(x)}{x}dx=f(0)\ln \frac{b}{a}.$

(ii) If $\int_1^{\infty} \frac{f(x)}{x}dx$ converges, then $\int_0^{\infty} \frac{f(bx)-f(ax)}{x}dx=f(0)\ln \frac{a}{b}.$
