---
tag: EQZN77AQPC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2799355
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Germany Team Selection Test
---
Given two positive integers $n$ and $m$ and a function $f : \mathbb{Z} \times \mathbb{Z} \to \left\{0,1\right\}$ with the property that
\begin{align*}
f\left(i, j\right) = f\left(i+n, j\right) = f\left(i, j+m\right) \text{for all } \left(i, j\right) \in \mathbb{Z} \times \mathbb{Z} .
\end{align*}
Let $\left[k\right] = \left\{1,2,\ldots,k\right\}$ for each positive integer $k$ .
Let $a$ be the number of all $\left(i, j\right) \in \left[n\right] \times \left[m\right]$ satisfying
\begin{align*}
f\left(i, j\right) = f\left(i+1, j\right) = f\left(i, j+1\right) .
\end{align*}
Let $b$ be the number of all $\left(i, j\right) \in \left[n\right] \times \left[m\right]$ satisfying
\begin{align*}
f\left(i, j\right) = f\left(i-1, j\right) = f\left(i, j-1\right) .
\end{align*}
Prove that $a = b$ .
