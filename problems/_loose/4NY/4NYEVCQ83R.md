---
tag: 4NYEVCQ83R
kind: problem
type: answer
answer: 0<\delta\leq\frac{1}{10100}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185968
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Show that the system of equations

$$
\begin{aligned}
7 x+100 y & =0 \\
0.069 x+y & =0.3
\end{aligned}
$$

has a unique solution $\left(x_{0}, y_{0}\right)$, and determine this solution!

In the following, in equation (2) of the system (1), (2), the coefficient of $x$ is changed within a given $\delta$-neighborhood of 0.069, i.e., for a given real $\delta > 0$, a real number $h$ is restricted to the interval

$$
-\delta \leq h \leq \delta
$$

and for each such $h$, the system of equations

$$
\begin{aligned}
7 x+100 y & =0 \\
(0.069+h) x+y & =0.3
\end{aligned}
$$

is considered. The goal is to achieve that $x_{0}$ changes by at most $1\%$ due to this change in the coefficient 0.069. This is the meaning of the following tasks b), c).

First, the following is defined:

If for some $h$ the system of equations (1), (4) has a unique solution, this solution is denoted by $\left(x_{h} ; y_{h}\right)$. If this is the case for all $h$ mentioned in (3) (for a given $\delta > 0$) and if there is among these values of $h$ one for which the number

$$
\eta=\frac{\left|x_{0}-x_{h}\right|}{\left|x_{0}\right|}
$$

is as large as possible, then this largest value of $\eta$ is denoted by $\eta_{\max }$ (maximum relative error of $x$ with respect to (3)).

b) Determine all $\delta > 0$ for which a maximum relative error $\eta_{\max }$ exists with respect to (3)!

c) Determine among the values of $\delta$ found in b) all those for which $\eta_{\max } \leq 0.01$ even holds!
