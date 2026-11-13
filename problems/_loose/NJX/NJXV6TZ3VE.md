---
tag: NJXV6TZ3VE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1301958
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14191
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Iran MO (3rd Round)
---
Let $F$ be a subset of the set of positive integers with at least two elements and $P(x)$ be a polynomial with integer coefficients such that for any two distinct elements of $F$ like $a$ and $b$ , the following two conditions hold

- $a+b \in F$ , and
- $\gcd(P(a),P(b))=1$ .

Prove that $P(x)$ is a constant polynomial.
