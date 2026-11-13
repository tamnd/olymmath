---
tag: 5SNWJCV1ZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a class there are n students with unequal heights.
$\textbf{(a)}$ Find the number of orderings of the students such that the shortest person
is not at the front and the tallest person is not at the end.
$\textbf{(b)}$ Define the *badness* of an ordering as the maximum number $k$ such that there
are $k$ many people with height greater than in front of a person. For example:
the sequence $66, 61, 65, 64, 62, 70$ has *badness * $3$ since there are $3$ numbers greater
than $62$ in front of it. Let $f_k(n)$ denote the number of orderings of $n$ with *badness* $k$. Find $f_k(n)$.
