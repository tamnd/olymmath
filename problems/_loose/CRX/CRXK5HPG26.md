---
tag: CRXK5HPG26
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A prime number $p$ is a **moderate** number if for every $2$ positive integers $k > 1$ and $m$, there exists k positive integers $n_1, n_2, ..., n_k $ such that $$ n_1^2+n_2^2+ ... +n_k^2=p^{k+m} $$
If $q$ is the smallest **moderate** number, then determine the smallest prime $r$ which is not moderate and $q < r$.
