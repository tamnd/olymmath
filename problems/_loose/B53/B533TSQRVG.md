---
tag: B533TSQRVG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a polynomial

$$
P(x)=a_{n} x^{n}+\cdots+a_{1} x+a_{0}
$$

with integer coefficients. If the polynomial $P$ has two distinct integer zeros that are not positive (and possibly other zeros besides these two) and $P(1)=2$, prove:
a) $a_{0}=0$;
b) $\sum_{2 \mid i} a_{i}=\sum_{2 \nmid i} a_{i}$.
