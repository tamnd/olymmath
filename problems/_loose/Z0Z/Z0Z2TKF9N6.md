---
tag: Z0Z2TKF9N6
kind: problem
type: answer
answer: n \ge 381
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a group of $n > 20$ people, there are some (at least one, and possibly all) pairs of people that know each other. Knowing is symmetric; if Alice knows Blaine, then Blaine also knows Alice. For some values of $n$ and $k,$ this group has a peculiar property: If any $20$ people are removed from the group, the number of pairs of people that know each other is
at most $\frac{n-k}{n}$ times that of the original group of people.
(a) If $k = 41,$ for what positive integers $n$ could such a group exist?
(b) If $k = 39,$ for what positive integers $n$ could such a group exist?
