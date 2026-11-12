---
tag: TD5T0AFHRG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the so-called renewal equation

$$
m(t)=F(t)+\int_{0}^{t} m(t-s) d F(s)
$$

where $F(t)$ is the distribution function of a non-degenerate non-negative random variable $\xi$. Show that in the class of functions bounded on finite intervals, the unique solution to the renewal equation is the function defined by the formula

$$
m(t)=\sum_{n=1}^{\infty} F_{n}(t)
$$

where $F_{n}=F * \ldots * F$ (convolution $n$ times).
