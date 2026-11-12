---
tag: NNNF0H4NJK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \ldots$ be a sequence of independent and identically distributed (i.i.d.) random variables, $\mathrm{P}\left(\xi_{1}>x\right)=\exp (-x), x \geqslant 0$ (i.e., the variables are exponentially distributed). Show that

$$
\mathrm{P}\left(\xi_{n}>\alpha \ln n \text { i.o. }\right)= \begin{cases}1, & \text { if } \alpha \leqslant 1, \\ 0, & \text { if } \alpha>1 .\end{cases}
$$

Verify that this statement admits the following refinements:

$$
\mathrm{P}\left(\xi_{n}>\ln n+\alpha \ln \ln n \text { i.o. }\right)= \begin{cases}1, & \text { if } \alpha \leqslant 1, \\ 0, & \text { if } \alpha>1,\end{cases}
$$

and, generally, for any $k \geqslant 1$ the equality holds:

$$
\begin{aligned}
& \mathrm{P}(\xi_{n}>\ln n+\ln \ln n+\ldots+\underbrace{\ln \ldots \ln }_{k \text { times }} n+\alpha \underbrace{\ln \ldots \ln }_{k+1 \text { times }} n \text { i.o. })= \\
&= \begin{cases}1, & \text { if } \alpha \leqslant 1, \\
0, & \text { if } \alpha>1 .\end{cases}
\end{aligned}
$$
