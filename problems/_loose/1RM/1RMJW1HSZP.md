---
tag: 1RMJW1HSZP
kind: problem
type: answer
answer: f(P) = \pm AP^d
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\mathbb{Z}[x]$ represents the set of all polynomials with integer coefficients. Find all functions $f:\mathbb{Z}[x]\rightarrow \mathbb{Z}[x]$ such that for any 2 polynomials $P,Q$ with integer coefficients and integer $r$, the following statement is true. $$P(r)\mid Q(r) \iff f(P)(r)\mid f(Q)(r).$$

(We define $a|b$ if and only if $b=za$ for some integer $z$. In particular, $0|0$.)

*Proposed by the4seasons.*
