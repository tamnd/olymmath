---
tag: BSQKR6YN7R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h386612
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54015
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2001
    source: hf-ai-mo-aops
    label: 2001 Romania National Olympiad
---
Let $f:[0,\infty )\rightarrow\mathbb{R}$ be a periodical function, with period $1$ , integrable on $[0,1]$ . For a strictly increasing and unbounded sequence $(x_n)_{n\ge 0}, x_0=0,$ with $\lim_{n\rightarrow\infty} (x_{n+1}-x_n)=0$ , we denote $r(n)=\max \{ k\mid x_k\le n\}$ .

a) Show that:
$$\lim_{n\rightarrow\infty}\frac{1}{n}\sum_{k=1}^{r(n)}(x_k-x_{k+1})f(x_k)=\int_0^1 f(x) dx$$
b) Show that:
$$ \lim_{n\rightarrow\infty} \frac{1}{\ln n}\sum_{k=1}^{r(n)}\frac{f(\ln k)}{k}=\int_0^1f(x) dx$$
