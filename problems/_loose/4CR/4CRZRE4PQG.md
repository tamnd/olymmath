---
tag: 4CRZRE4PQG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h546370
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9586
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2013
    source: hf-ai-mo-aops
    label: 2013 India IMO Training Camp
---
Let $n \ge 2$ be an integer and $f_1(x), f_2(x), \ldots, f_{n}(x)$ a sequence of polynomials with integer coefficients. One is allowed to make moves $M_1, M_2, \ldots $ as follows: in the $k$ -th move $M_k$ one chooses an element $f(x)$ of the sequence with degree of $f$ at least $2$ and replaces it with $(f(x) - f(k))/(x-k)$ . The process stops when all the elements of the sequence are of degree $1$ . If $f_1(x) = f_2(x) = \cdots = f_n(x) = x^n + 1$ , determine whether or not it is possible to make appropriate moves such that the process stops with a sequence of $n$ identical polynomials of degree 1.
