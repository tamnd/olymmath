---
tag: FZG59TXKH0
kind: problem
type: answer
answer: \exp\left(-\frac{3}{2}\right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a hidden friend, suppose no one takes oneself. We say that the hidden friend has "marmalade" if
there are two people $A$ and $ B$ such that A took $B$ and $ B $ took $A$. For each positive integer n, let $f (n)$ be the number of hidden friends with n people where there is no "marmalade", i.e. $f (n)$ is equal to the number of permutations $\sigma$ of {$1, 2,. . . , n$} such that:

*$\sigma (i) \neq i$ for all $i=1,2,...,n$

* there are no $ 1 \leq i <j \leq n $ such that $ \sigma (i) = j$ and $\sigma (j) = i. $

Determine the limit

$\lim_{n \to + \infty} \frac{f(n)}{n!}$
