---
tag: SK7TBWR08Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=67789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that any polynomial $P(x)$ of degree $n$ can be uniquely expanded in powers of $x-c$:

$$
P(x)=\sum_{k=0}^{n} c_{k}(x-c)^{k}
$$

where the coefficients $c_{k}$ can be found by the formula

$$
c_{k}=\left.\frac{P^{(k)}(x)}{k!}\right|_{x=c} (0 \leqslant k \leqslant n)
$$
