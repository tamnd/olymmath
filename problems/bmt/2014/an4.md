---
tag: VMTYGMK8C6
kind: problem
appearances:
  - at: bmt/2014/an4
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f(x) = x^5 - 20x^4 + ax^3 + bx^2 + cx + 24$ has the interesting property that its roots can be arranged to form an arithmetic sequence. Determine $f(8)$.
