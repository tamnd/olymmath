---
tag: 3PFPN4FTQT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : \mathbb{Z} \to \mathbb{Z}$ be a function satisfying $f(0) \neq 0 = f(1)$. Assume also that $f$ satisfies equations **(A)** and **(B)** below. \begin{eqnarray*}f(xy) = f(x) + f(y) -f(x) f(y) \mathbf{(A)}\\
f(x-y) f(x) f(y) = f(0) f(x) f(y) \mathbf{(B)}
\end{eqnarray*} for all integers $x,y$.

**(i)** Determine explicitly the set $\big\{f(a)~:~a\in\mathbb{Z}\big\}$.
**(ii)** Assuming that there is a non-zero integer $a$ such that $f(a) \neq 0$, prove that the set $\big\{b~:~f(b) \neq 0\big\}$ is infinite.
