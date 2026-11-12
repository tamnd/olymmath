---
tag: CPAJKVDTP9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33527
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let an urn contain $N$ balls, of which $a$ are white, $b$ are black, and $c$ are red, with $a+b+c=N$. Suppose $n$ balls are drawn, and let $\xi$ be the number of white balls and $\eta$ be the number of black balls among them. Show that if the selection is "with replacement," then

$$
\operatorname{cov}(\xi, \eta)=-n p q
$$

where $p=a / N$ and $q=b / N$. If the selection is "without replacement," then

$$
\operatorname{cov}(\xi, \eta)=-n p q \frac{N-n}{N-1}
$$

Show also that in both cases the correlation is given by the formula

$$
\rho(\xi, \eta)=-\sqrt{\frac{p q}{(1-p)(1-q)}}
$$
