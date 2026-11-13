---
tag: XE5FKS7FVA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620295
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16814
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218454
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $q<50$ be a prime number. Call a sequence of polynomials $P_0(x), P_1(x), P_2(x), ..., P_{q^2}(x)$ *tasty* if it satisfies the following conditions:

- $P_i$ has degree $i$ for each $i$ (where we consider constant polynomials, including the $0$ polynomial, to have degree $0$ )
- The coefficients of $P_i$ are integers between $0$ and $q-1$ for each $i$ .
- For any $0\le i,j\le q^2$ , the polynomial $P_i(P_j(x)) - P_j(P_i(x))$ has all its coefficients divisible by $q$ .

As $q$ varies over all such prime numbers, determine the total number of tasty sequences of polynomials.

*Proposed by Vincent Huang*
