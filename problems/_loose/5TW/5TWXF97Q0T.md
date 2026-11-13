---
tag: 5TWXF97Q0T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1610597
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54642
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248147
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=70
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Romania Team Selection Test
  - at: ro-tst
    source: hf-mathnet
    label: Romania THE 68th NMO SELECTION TESTS FOR THE BALKAN AND INTERNATIONAL MATHEMATICAL OLYMPIADS
---
Let m be a positive interger, let $p$ be a prime, let $a_1=8p^m$ , and let $a_n=(n+1)^{\frac{a_{n-1}}{n}}$ , $n=2,3...$ . Determine the primes $p$ for which the products $a_n(1-\frac{1}{a_1})(1-\frac{1}{a_2})...(1-\frac{1}{a_n})$ , $n=1,2,3...$ are all integral.
