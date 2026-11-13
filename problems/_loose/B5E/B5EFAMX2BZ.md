---
tag: B5EFAMX2BZ
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=194451
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every positive integer $n$, let $S_{n}=\{1,2,3, \ldots, n\}$; that is, $S_{n}$ is the set of integers from 1 to $n$ inclusive. There are $2^{n}$ subsets of $S_{n}$. If each subset has the same likelihood of being chosen, let $p(n)$ be the probability that a chosen subset does not contain two integers with a sum of $n+1$.

For example, the subsets of $S_{2}$ are $\emptyset$ (the empty set), $\{1\},\{2\}$, and $\{1,2\}$. Of these four subsets, only $\{1,2\}$ contains a pair of integers with a sum of $2+1=3$. The other three subsets do not contain such a pair, so $p(2)=\frac{3}{4}$.

What is the smallest even positive integer $n$ for which $p(n)<\frac{1}{4}$ ?
