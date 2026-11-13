---
tag: SRWA5MBE56
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each of the following equalities, prove it using a polynomial method.

1. Let $n \in \mathbb{N}$. Show that

$$
\sum_{k=0}^{n}\binom{n}{k}=2^{n}
$$

2. Let $n \in \mathbb{N}^{*}$. Show the captain's formula

$$
\forall k \in \llbracket 1, n \rrbracket, k\binom{n}{k}=n\binom{n-1}{k-1} .
$$

3. Let $p, q \in \mathbb{N}$ and $n \in \mathbb{N}$. Show the Vandermonde's formula

$$
\sum_{k=0}^{n}\binom{p}{k}\binom{q}{n-k}=\binom{p+q}{n}
$$

4. Let $n \in \mathbb{N}^{*}$ and $r \in \llbracket 0, n \rrbracket$. Show the generalized captain's formula

$$
\forall k \in \llbracket r, n \rrbracket,\binom{k}{r}\binom{n}{k}=\binom{n}{r}\binom{n-r}{k-r}
$$
