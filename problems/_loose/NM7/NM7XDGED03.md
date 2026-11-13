---
tag: NM7XDGED03
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Is there a sequence $a_{1}, \ldots, a_{2016}$ of positive integers, such that every sum

$$
a_{r}+a_{r+1}+\ldots+a_{s-1}+a_{s}
$$

(with $1 \leqslant r \leqslant s \leqslant 2016$ ) is a composite number, but
a) $G C D\left(a_{i}, a_{i+1}\right)=1$ for all $i=1,2, \ldots, 2015$;
b) $\operatorname{GCD}\left(a_{i}, a_{i+1}\right)=1$ for all $i=1,2, \ldots, 2015$ and $G C D\left(a_{i}, a_{i+2}\right)=1$ for all $i=1,2, \ldots, 2014$ ?

$\operatorname{GCD}(x, y)$ denotes the greatest common divisor of $x, y$.

(Matija Bucić)
