---
tag: PYM1G3FHEW
kind: problem
appearances:
  - at: pumac/2019/na7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019NT_A_Div.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $f(x)$ be the nonnegative remainder when $x$ is divided by the prime $p=1297$. Let $g(x)$ be the largest possible value of $f(-p_1)+f(-p_2)+\ldots+f(-p_m)$ over all sets $\{p_1,\ldots,p_m\}$ where $p_k$ are primes such that for all $1\le i<j\le m$ we have $p\nmid(p_i^2-p_j^2)$, and
$$p\nmid\sigma((p_1\times\ldots\times p_m)^{x-1}),$$
where $\sigma(x)$ is the sum of the (distinct, positive, not necessarily proper) divisors of $x$. Find
$$\sum_{k=1}^{(p+1)/2}\left(g(p-2k+3)-g(p+2k+1)\right).$$
