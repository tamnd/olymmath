---
tag: V4CRBAMTHF
kind: problem
type: answer
answer: "17007"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Willy Wonka has $n$ distinguishable pieces of candy that he wants to split into groups. If the number of ways for him to do this is $p(n)$, then we have
\begin{tabular}{|c|c|c|c|c|c|c|c|c|c|c|}\hline
$n$ & $1$ & $2$ & $3$ & $4$ & $5$ & $6$ & $7$ & $8$ & $9$ & $10$ \\\hline
$p(n)$ & $1$ & $2$ & $5$ & $15$ & $52$ & $203$ & $877$ & $4140$ & $21147$ & $115975$ \\\hline
\end{tabular}
Define a *splitting* of the $n$ distinguishable pieces of candy to be a way of splitting them into groups. If Willy Wonka has $8$ candies, what is the sum of the number of groups over all splittings he can use?

*2020 CCA Math Bonanza Lightning Round #3.4*
