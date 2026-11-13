---
tag: QVJ6FA9E6Q
kind: problem
appearances:
  - at: pumac/2019/na2
    primary: true
  - at: pumac/2019/nb3
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
Let $f$ be a function over the natural numbers so that

(a) $f(1)=1$

(b) If $n=p_1^{e_1}\ldots p_k^{e_k}$ where $p_1,\cdots,p_k$ are distinct primes, and $e_1,\cdots e_k$ are non-negative integers, then $f(n)=(-1)^{e_1+\ldots+e_k}$.

Find $\displaystyle\sum_{i=1}^{2019}\sum_{d\mid i}f(d)$.
