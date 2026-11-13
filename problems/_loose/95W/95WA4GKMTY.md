---
tag: 95WA4GKMTY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=8512
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=158452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{n}$ be real constants and $$ y(x)=\cos \left(a_{1}+x\right)+\frac{\cos \left(a_{2}+x\right)}{2}+\frac{\cos \left(a_{3}+x\right)}{2^{2}}+\cdots+\frac{\cos \left(a_{n}+x\right)}{2^{n-1}} . $$ If $x_{1}, x_{2}$ are real and $y\left(x_{1}\right)=y\left(x_{2}\right)=0$, prove that $x_{1}-x_{2}=m \pi$ for some integer $m$.
