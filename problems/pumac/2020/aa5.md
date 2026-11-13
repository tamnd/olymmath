---
tag: 2VEFQVZCC9
kind: problem
appearances:
  - at: pumac/2020/aa5
    primary: true
  - at: pumac/2020/ab7
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020AlgebraAQuestions.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263148
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose we have a sequence $a_1,a_2,\ldots$ of positive real numbers so that for each positive integer $n$, we have that $\sum_{k=1}^{n}a_ka_{\lfloor\sqrt{k}\rfloor}=n^2$. Determine the first value of $k$ so $a_k>100$.
