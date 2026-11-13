---
tag: C8FRFE3KJ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h5612
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55652
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249019
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1994
    source: hf-ai-mo-aops
    label: 1994 All-Russian Olympiad
---
I'll post some nice combinatorics problems here, taken from the wonderful training book "Les olympiades de mathmatiques" (in French) written by Tarik Belhaj Soulami.
Here goes the first one:

Let $\mathbb{I}$ be a non-empty subset of $\mathbb{Z}$ and let $f$ and $g$ be two functions defined on $\mathbb{I}$ . Let $m$ be the number of pairs $(x, y)$ for which $f(x) = g(y)$ , let $n$ be the number of pairs $(x, y)$ for which $f(x) = f(y)$ and let $k$ be the number of pairs $(x, y)$ for which $g(x) = g(y)$ . Show that $$2m \leq n + k.$$
