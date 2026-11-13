---
tag: RD8RRBD06R
kind: problem
appearances:
  - at: pumac/2020/ca6
    primary: true
  - at: pumac/2020/cb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020__PUMaC_Combinatorics_A-2.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747886
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the country of Princetonia, there are an infinite number of cities, connected by roads. For every two distinct cities, there is a unique sequence of roads that leads from one city to the other. Moreover, there are exactly three roads from every city. On a sunny morning in early July, n tourists have arrived at the capital of Princetonia. They repeat the following process every day: in every city that contains three or more tourists, three tourists are picked and one moves to each of the three cities connected to the original one by roads. If there are $2$ or fewer tourists in the city, they do nothing. After some time, all tourists will settle and there will be no more changing cities. For how many values of n from $1$ to $2020$ will the tourists end in a configuration in which no two of them are in the same city?
