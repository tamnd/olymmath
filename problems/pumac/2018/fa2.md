---
tag: G7NV8SF0N0
kind: problem
appearances:
  - at: pumac/2018/fa2
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2018 official paper
    url: https://pumac.princeton.edu/s/Individual-Finals-A-Test.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Find all functions $f:\mathbb{R}^+\to\mathbb{R}^+$ such that for all $x,y\in\mathbb{R}^+$ it holds that
$$f\left(xy\left(\frac{1}{x}+\frac{1}{y}+\frac{1}{x+y}\right)\right)=f\left(xy\left(\frac{1}{x}+\frac{1}{y}\right)\right)+f(x)\,f\left(\frac{y}{x+y}\right).$$
