---
tag: GH4YAMF2TB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33918
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Khinchin's Law of Large Numbers states that

$$
\frac{X_{1}+\ldots+X_{n}}{n}-\mathrm{E} X_{1} I\left(\left|X_{1}\right| \leqslant n\right) \xrightarrow{p} 0
$$

for any sequence of i.i.d. random variables $\left(X_{n}\right)_{n \geqslant 1}$ such that $n \mathrm{P}\left(\left|X_{1}\right|>n\right) \rightarrow 0$. Assuming additionally that $\mathrm{P}\left(X_{1}>0\right)=1$, prove that

$$
\mathrm{E} \frac{X_{1}^{2}+\ldots+X_{n}^{2}}{\left(X_{1}+\ldots+X_{n}\right)^{2}} \rightarrow 0
$$
