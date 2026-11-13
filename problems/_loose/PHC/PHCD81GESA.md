---
tag: PHCD81GESA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33718
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $X$ be independent random variables, such that

$$
\mathrm{P}(\xi=1)=\mathrm{P}(\xi=-1)=\frac{1}{2}
$$

Show the equivalence of the following statements:

(a) $X \stackrel{d}{=}-X$, i.e., $X$ has a symmetric distribution;

(b) $X \stackrel{d}{=} \xi X$;

(c) $X \stackrel{d}{=} \xi|X|$.
