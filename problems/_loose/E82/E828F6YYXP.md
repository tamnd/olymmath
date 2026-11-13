---
tag: E828F6YYXP
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For how many primes $p$ less than $15$, there exists integer triples $(m,n,k)$ such that
$$
\begin{array}{rcl}
m+n+k &\equiv& 0 \pmod p \\
mn+mk+nk &\equiv& 1 \pmod p \\
mnk &\equiv& 2 \pmod p.
\end{array}
$$

$
\textbf{(A)}\ 2
\textbf{(B)}\ 3
\textbf{(C)}\ 4
\textbf{(D)}\ 5
\textbf{(E)}\ 6
$
