---
tag: XTAZDN90FS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33930
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [90].) Let $X$ be a bounded random variable with distribution function $F=F(x)$ and smooth density $f=f(x)$.

(a) Suppose $f(x)$ is non-increasing for $x>0$ and non-decreasing for $x \leqslant 0$, in other words, the variable $X$ is unimodal with mode at $x=0$. Prove that $X \stackrel{d}{=} U Z$, where $U$ and $Z$ are independent random variables, and $U$ has a uniform distribution on $[0,1]$, while the distribution function of the variable $Z$ is given by $G(x)=F(x)-x f(x), x \in \mathbb{R}$.

(b) Establish the converse: if $X \stackrel{d}{=} U Z$, where the variables $U$ and $Z$ are independent, and $U$ has a uniform distribution on $[0,1]$, then the variable $X$ is unimodal with mode at zero.

Remark. These statements are a special case of Khintchine's criterion, in which there are no restrictions on the smoothness of the function $F$ and the boundedness of the variable $X$.
