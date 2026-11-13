---
tag: F0AH6ADED5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h386865
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54491
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2001
    source: hf-ai-mo-aops
    label: 2001 Romania Team Selection Test
---
Let $n$ be a positive integer and $f(x)=a_mx^m+\ldots + a_1X+a_0$ , with $m\ge 2$ , a polynomial with integer coefficients such that:
a) $a_2,a_3\ldots a_m$ are divisible by all prime factors of $n$ ,
b) $a_1$ and $n$ are relatively prime.
Prove that for any positive integer $k$ , there exists a positive integer $c$ , such that $f(c)$ is divisible by $n^k$ .
