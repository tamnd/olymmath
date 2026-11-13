---
tag: QE4ZAVPKM4
kind: problem
appearances:
  - at: pumac/2016/fa2
    primary: true
  - at: pumac/2016/fb3
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2016 official paper
    url: https://pumac.princeton.edu/s/PUMaC2016_FinalsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $m$, $k$, and $c$ be positive integers with $k>c$, and let $\lambda$ be a positive, non-integer real root of the equation $\lambda^{m+1}-k\lambda^m-c=0$. Let $f:\mathbb{Z}^+\to\mathbb{Z}$ be defined by $f(n)=\lfloor\lambda n\rfloor$ for all $n\in\mathbb{Z}^+$. Show that $f^{m+1}(n)\equiv cn-1\pmod{k}$ for all $n\in\mathbb{Z}^+$. (Here, $\mathbb{Z}^+$ denotes the set of positive integers, $\lfloor x\rfloor$ denotes the greatest integer less than or equal to $x$, and $f^{m+1}(n)=f(f(\ldots f(n)\ldots))$ where $f$ appears $m+1$ times.)
