---
tag: 6J4J1ZXDC7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $f: \mathbb{R}^{+} \mapsto \mathbb{R}^{+}$ is a function such that $\frac{f(x)}{x}$ is increasing on $\mathbb{R}^{+}$. For $a,b,c>0$, prove that $$2\left (\frac{f(a)+f(b)}{a+b} + \frac{f(b)+f(c)}{b+c}+ \frac{f(c)+f(a)}{c+a} \right) \geq 3\left(\frac{f(a)+f(b)+f(c)}{a+b+c}\right) + \frac{f(a)}{a}+ \frac{f(b)}{b}+ \frac{f(c)}{c}$$
