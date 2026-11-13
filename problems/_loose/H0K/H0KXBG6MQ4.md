---
tag: H0KXBG6MQ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let it $C,D > 0$. We call a function $f:\mathbb{R} \rightarrow \mathbb{R}$ *pretty* if $f$ is a $C^2$-class, $|x^3f(x)| \leq C$ and $|xf''(x)| \leq D$.

- Show that if $f$ is pretty, then, given $\epsilon \geq 0$, there is a $x_0 \geq 0$ such that for every $x$ with $|x| \geq x_0$, we have $|x^2f'(x)| < \sqrt{2CD}+\epsilon$.

- Show that if $0 < E < \sqrt{2CD}$ then there is a pretty function $f$ such that for every $x_0 \geq 0$ there is a $x > x_0$ such that $|x^2f'(x)| > E$.
