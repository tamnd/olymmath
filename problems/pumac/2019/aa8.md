---
tag: VTFQ6CKAR0
kind: problem
appearances:
  - at: pumac/2019/aa8
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
For real numbers $a$ and $b$, define the sequence $\{x_{a,b}(n)\}$ as follows: $x_{a,b}(1)=a$, $x_{a,b}(2)=b$, and for $n>1$, $x_{a,b}(n+1)=(x_{a,b}(n-1))^2+(x_{a,b}(n))^2$. For real numbers $c$ and $d$, define the sequence $\{y_{c,d}(n)\}$ as follows: $y_{c,d}(1)=c$, $y_{c,d}(2)=d$, and for $n>1$, $y_{c,d}(n+1)=(y_{c,d}(n-1)+y_{c,d}(n))^2$. Call $(a,b,c)$ a good triple if there exists $d$ such that for all $n$ sufficiently large, $y_{c,d}(n)=(x_{a,b}(n))^2$. For some $(a,b)$ there are exactly three values of $c$ that make $(a,b,c)$ a good triple. Among these pairs $(a,b)$, compute the maximum value of $\lfloor 100(a+b)\rfloor$.
