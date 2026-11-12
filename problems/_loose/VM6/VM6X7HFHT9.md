---
tag: VM6X7HFHT9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2023
    url: https://artofproblemsolving.com/community/c6h3278271
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26694
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2023
    source: hf-ai-mo-aops
    label: Kvant 2023
---
There are $n{}$ currencies in a country, numbered from 1 to $n{}.$ In each currency, only non-negative integers are possible amounts of money. A person can have only one currency at any time.

A person can exchange all the money he has from currency $i{}$ to currency $j{}$ at the rate of $\alpha_{ij}$ which is a positive real number. If he had $d{}$ units of currency $i{}$ he instead receives $\alpha_{ij}d$ units of currency $j{}$ while this number is rounded to the nearest integer; a number of the form $t-1/2$ is rounded to $t{}$ for any integer $t{}.$

It is known that $\alpha_{ij}\alpha_{jk}=\alpha_{ik}$ and $\alpha_{ii}=1$ for every $i,j,k.$ Can there be a person who can get rich indefinitely?

*Proposed by I. Bogdanov*
