---
tag: G8NRXNRSYX
kind: problem
type: answer
answer: p^{*}=(\sumx_{i})/(n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the point estimate of the unknown parameter $p$ (the probability of an event occurring in a single trial) of the binomial distribution using the method of maximum likelihood:

$$
P_{m}\left(x_{i}\right)=C_{m}^{x_{i}} p^{x_{i}}(1-p)^{m-x_{i}}
$$

where $x_{i}$ is the number of occurrences of the event in the $i$-th experiment, $m$ is the number of trials in one experiment, and $n$ is the number of experiments.
