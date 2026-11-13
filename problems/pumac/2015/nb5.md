---
tag: Y25F4EFKC9
kind: problem
appearances:
  - at: pumac/2015/nb5
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_NumberTheoryB.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that there are 24 primes between 3 and 100, inclusive, what is the number of ordered pairs $(p,a)$ with $p$ prime, $3\le p<100$, and $1\le a<p$ such that $p\mid(a^{p-2}-a)$?
