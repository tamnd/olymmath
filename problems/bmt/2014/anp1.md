---
tag: S251X5KW3Q
kind: problem
appearances:
  - at: bmt/2014/anp1
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2014 official paper
    url: https://berkeley.mt/archives/bmt-2014/AnaS2014.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260759
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $a, b, c, d$ are non-negative real numbers such that $a^2 + b^2 + c^2 + d^2 = 2$ and $ab + bc + cd + da = 1$. Find the maximum value of $a + b + c + d$ and determine all equality cases.
