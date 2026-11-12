---
tag: MHWJFRSJ6M
kind: problem
type: answer
answer: \frac{\pi}{3}+\pin,\frac{\pi}{3}+2\pikor\frac{\pi}{6}+\pin,\frac{2\pi}{3}+2\pik
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a=\operatorname{tg} x, b=\operatorname{tg} \frac{y}{2}$. Then $a+b=\frac{4}{\sqrt{3}}$ and $\frac{1}{a}+\frac{1}{b}=\frac{4}{\sqrt{3}}$. From the second equation, it follows that $a b=1$. By Vieta's theorem, $a$ and $b$ satisfy the equation $t^{2}-\frac{4}{\sqrt{3}} t+1=0$, whose roots are $\sqrt{3}$ and $\frac{1}{\sqrt{3}}$. Our system is equivalent to the combination of two systems: 1) $\left\{\begin{array}{l}\operatorname{tg} x=\sqrt{3}, \\ \operatorname{tg} \frac{y}{2}=\frac{1}{\sqrt{3}} ;\end{array}\right.$ or 2) $\left\{\begin{array}{l}\operatorname{tg} x=\frac{1}{\sqrt{3}} \\ \operatorname{tg} \frac{y}{2}=\sqrt{3}\end{array}\right.$
