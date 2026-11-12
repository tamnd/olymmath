---
tag: C9C7ZDVP4Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the joint distribution of two Bernoulli random variables $X$ and $Y$, taking values 0 and 1 (for simplicity), is completely determined by the parameters

$$
\mathrm{P}(X=1), \mathrm{P}(Y=1), \operatorname{cov}(X, Y)
$$

In particular, $X$ and $Y$ are independent if $\operatorname{cov}(X, Y)=0$.
