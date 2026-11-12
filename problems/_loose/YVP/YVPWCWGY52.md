---
tag: YVPWCWGY52
kind: problem
type: answer
answer: \lim_{|x|arrow\infty}\frac{\lnf(x)}{e^{|x|}}=-\frac{e^{2\gamma}\pi}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34035
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random variable such that $\mathrm{E} e^{s X}<\infty, s \in \mathbb{R}$ and

$$
\int_{\mathbb{R}}\left|\mathrm{E} e^{(s+i t) X}\right| d t<\infty, s, t \in \mathbb{R}
$$

The latter for $s=0$ guarantees the existence of a density $f=f(x)$ for $X$. Under these conditions, suggest some method for obtaining upper bounds for $f$ on $\mathbb{R}$.
