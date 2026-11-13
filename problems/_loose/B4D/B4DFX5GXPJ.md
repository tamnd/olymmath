---
tag: B4DFX5GXPJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2537247
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37280
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Croatia National Olympiad
---
Let $p_1,p_2,p_3,p_4$ be four distinct primes, and let $1=d_1<d_2<\ldots<d_{16}=n$ be the divisors of $n=p_1p_2p_3p_4$ . Determine all $n<2001$ with the property that $d_9-d_8=22$ .
