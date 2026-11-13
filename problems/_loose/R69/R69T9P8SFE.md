---
tag: R69T9P8SFE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166844
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the given numbers $a, b, c, n$, we form the

$$
\begin{aligned}
p & =n a+(n+1) b+(n+1) c \\
q & =(n+3) a+(n+2) b+(n+3) c \\
r & =(n+3) a+(n+3) b+(n+2) c
\end{aligned}
$$

triple, then the

$$
p^{\prime}=2 s-p, q^{\prime}=2 s-q, r^{\prime}=2 s-r
$$

triple, where $s$ is the arithmetic mean of the numbers $p, q, r$. Show that the

$$
p^{k}+q^{k}+r^{k}=p^{\prime k}+q^{\prime k}+r^{\prime k}
$$

equality holds if $k=1,2$.
