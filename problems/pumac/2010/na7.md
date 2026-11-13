---
tag: RJQDGT8ZXW
kind: problem
appearances:
  - at: pumac/2010/na7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_NumberTheoryA.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be the number of polynomial functions from the integers modulo 2010 to the integers modulo 2010. $n$ can be written as $n=p_1p_2\cdots p_k$, where the $p_i$s are (not necessarily distinct) primes. Find $p_1+p_2+\cdots+p_n$.
