---
tag: PNQBGAQA6M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34075
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ and $Y$ be independent random variables, $\varphi=\varphi(t)$ and $\phi=\phi(t)$ be their characteristic functions. Prove the validity of the Parseval's relation:

$$
\mathrm{E} \phi(X-t)=\mathrm{E} e^{-i t Y} \varphi(Y)
$$

for each $t \in \mathbb{R}$.

From this, derive that for any $\sigma>0$ the following equality holds:

$$
\mathrm{E} e^{-\frac{(X-t)^{2}}{2 \sigma^{2}}}=\frac{\sigma}{\sqrt{2 \pi}} \int_{\mathbb{R}} e^{-i t y} e^{-\frac{\sigma^{2} y^{2}}{2}} \varphi(y) d y
$$
