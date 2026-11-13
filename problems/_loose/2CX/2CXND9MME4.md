---
tag: 2CXND9MME4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2015470
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36043
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234591
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1988
    source: hf-ai-mo-aops
    label: 1988 National High School Mathematics League
---
$a,b$ are real numbers, satisfying that $\frac{1}{a}+\frac{1}{b}=1$ . Prove that for any $n\in\mathbb{Z}_+$ , $(a+b)^{2n}-a^n-b^n\geq2^{2n}-2^{n+1}$ .
