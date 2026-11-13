---
tag: M4054SHNZP
kind: problem
type: answer
answer: \frac{425}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let real numbers $a_{1}, a_{2}, \cdots, a_{40}$ satisfy
$$
a_{1}+a_{2}+\cdots+a_{40}=0 \text {, }
$$

and for $1 \leqslant i \leqslant 40$, we have
$$
\left|a_{i}-a_{i+1}\right| \leqslant 1\left(a_{41}=a_{1}\right) .
$$

Let $a=a_{10}, b=a_{20}, c=a_{30}, d=a_{40}$.
Find: (1) the maximum value of $a+b+c+d$;
(2) the maximum value of $a b+c d$.
