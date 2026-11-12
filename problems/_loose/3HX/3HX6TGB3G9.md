---
tag: 3HX6TGB3G9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24732
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a $p$-arithmetic sequence be given:

$$
\begin{gathered}
x_{0}, x_{1}=f\left(x_{0}\right)=\frac{a x_{0}+b}{c x_{0}+d} \\
x_{2}=f\left(x_{1}\right)=\frac{a x_{1}+b}{c x_{1}+d}, \ldots, x_{k}=f\left(x_{k-1}\right)=\frac{a x_{k-1}+b}{c x_{k-1}+d}, \ldots
\end{gathered}
$$

(or, equivalently, $x_{k}=f_{k}\left(x_{0}\right)$). Prove that

1) if $\sqrt{(a-d)^{2}+4 b c}$ cannot be extracted in $p$-arithmetic, then $x_{p+1}=x_{0}$;
2) if $(a-d)^{2}+4 b c=0$, then $x_{p}=x_{0}$;
3) if $(a-d)^{2}+4 b c \neq 0$ and $\sqrt{(a-d)^{2}+4 b c}$ can be extracted in $p$-arithmetic, then $x_{p-1}=x_{0}$.
