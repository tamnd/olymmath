---
tag: D2WFDDCSQN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h3034051
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 1
---
Let $\mathbb{Q}_{>1}$ be the set of rational numbers greater than $1$ . Let $f:\mathbb{Q}_{>1}\to \mathbb{Z}$ be a function that satisfies
$$f(q)=\begin{cases}
q-3&\textup{ if }q\textup{ is an integer,}
\lceil q\rceil-3+f\left(\frac{1}{\lceil q\rceil-q}\right)&\textup{ otherwise.}
\end{cases}$$
Show that for any $a,b\in\mathbb{Q}_{>1}$ with $\frac{1}{a}+\frac{1}{b}=1$ , we have $f(a)+f(b)=-2$ .

*Proposed by usjl*
