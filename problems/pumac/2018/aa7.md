---
tag: JZF5KNA9NN
kind: problem
appearances:
  - at: pumac/2018/aa7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2018 official paper
    url: https://pumac.princeton.edu/s/Algebra-A-Test.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let the sequence $\{a_n\}_{n=-2}^{\infty}$ satisfy $a_{-1}=a_{-2}=0$, $a_0=1$, and for all non-negative integers $n$,
$$n^2=\sum_{k=0}^{n}a_{n-k}a_{k-1}+\sum_{k=0}^{n}a_{n-k}a_{k-2}.$$
Given $a_{2018}$ is rational, find the maximum integer $m$ such that $2^m$ divides the denominator of the reduced form of $a_{2018}$.
