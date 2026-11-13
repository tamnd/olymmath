---
tag: E1ANCWNRG2
kind: problem
appearances:
  - at: pumac/2016/ca5
    primary: true
  - at: pumac/2016/cb7
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2016 official paper
    url: https://pumac.princeton.edu/s/PUMaC2016_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $a_1,a_2,a_3,\ldots$ be an infinite sequence where for all positive integers $i$, $a_i$ is chosen to be a random positive integer between $1$ and $2016$, inclusive. Let $S$ be the set of all positive integers $k$ such that for all positive integers $j<k$, $a_j\ne a_k$. (So $1\in S$; $2\in S$ if and only if $a_1\ne a_2$; $3\in S$ if and only if $a_1\ne a_3$ and $a_2\ne a_3$; and so on.) In simplest form, let $\frac{p}{q}$ be the expected number of positive integers $m$ such that $m$ and $m+1$ are in $S$. Compute $pq$.
