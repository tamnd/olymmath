---
tag: E9KAXT7Z9P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226998
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $0<p<1$ be given. Initially, we have $n$ coins, all of which have probability $p$ of landing on heads, and probability $1-p$ of landing on tails (the results of the tosses are independent of each other). In each round, we toss our coins and remove those that result in heads. We keep repeating this until all our coins are removed. Let $k_n$ denote the expected number of rounds that are needed to get rid of all the coins. Prove that there exists $c>0$ for which the following inequality holds for all $n>0$ $$c\bigg(1+\frac{1}{2}+\cdots+\frac{1}{n}\bigg)<k_n<1+c\bigg(1+\frac{1}{2}+\cdots+\frac{1}{n}\bigg).$$
