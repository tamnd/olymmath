---
tag: XBHYT279CK
kind: problem
appearances:
  - at: pumac/2012/na3
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\{x_n\}$ be defined by $x_1\in\{5,7\}$ and, for $k\ge 1$, $x_{k+1}\in\{5^{x_k},7^{x_k}\}$. For example, the possible values of $x_3$ are $5^{5^5}$, $5^{5^7}$, $5^{7^5}$, $5^{7^7}$, $7^{5^5}$, $7^{5^7}$, $7^{7^5}$, and $7^{7^7}$. Determine the sum of all possible values for the last two digits of $x_{2012}$.
