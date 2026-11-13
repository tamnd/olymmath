---
tag: BXYQPETE6F
kind: problem
appearances:
  - at: pumac/2025/na4
    primary: true
  - at: pumac/2025/nb6
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Number_Theory_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
For $p$ prime and $k\ge 1$, let $S_k^{(p)}$ denote the number of positive integers $x<p^k$ where $x^{2^k}\equiv 1\pmod{p^k}$. Find
$$\sum_{k=1}^{4}\sum_{\substack{p<25\\ p\text{ prime}}}S_k^{(p)}.$$
