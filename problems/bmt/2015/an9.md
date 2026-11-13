---
tag: 5VA2G20R18
kind: problem
appearances:
  - at: bmt/2015/an9
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2015 official paper
    url: https://berkeley.mt/archives/bmt-2015/AnaS2015.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find
$$\lim_{n \to \infty} \frac{1}{n^3}\left(\sqrt{n^2 - 1} + \sqrt{n^2 - 2^2} + \ldots + \sqrt{n^2 - (n - 1)^2}\right).$$
