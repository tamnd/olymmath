---
tag: JMQYFDYKRE
kind: problem
type: answer
answer: F_{n}=\frac{\varphi^{n}-\widehat{\varphi}^{n}}{\sqrt{5}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that the generating function of the Fibonacci sequence $F(x)=F_{0}+F_{1} x+F_{2} x^{2}+\ldots+F_{n} x^{n} + \ldots$ can be written in the form $F(x)=\frac{x}{1-x-x^{2}}=\frac{1}{\sqrt{5}}\left(\frac{1}{1-\varphi x}-\frac{1}{1-\widehat{\varphi} x}\right)$, where $\varphi=\frac{1+\sqrt{5}}{2}, \widehat{\varphi}=\frac{1-\sqrt{5}}{2}$.
