---
tag: BNWBW7DM7N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33547
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that for $x>0$ the inequalities hold

$$
\frac{x}{1+x^{2}} \varphi(x)<1-\Phi(x)<\frac{\varphi(x)}{x}
$$

where $\varphi(x)=\frac{1}{\sqrt{2 \pi}} e^{-x^{2} / 2}$ and $\Phi(x)=\int_{-\infty}^{x} \varphi(y) d y$.
